import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/custom-validators';

@Component({
  selector: 'app-order-sheet',
  templateUrl: './order-sheet.component.html',
  styleUrls: ['./order-sheet.component.css']
})
export class OrderSheetComponent implements OnInit {
  // Declare the form
  myForm:FormGroup;
  // Declare a formarray for weirdReuqests
  weirdRequestsControls : FormArray;
  showWelcomeMessage = false;
  customerNameControl;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      // Validators added to the name field
      customerName : new FormControl(null, [Validators.required, Validators.minLength(2)]),
      size : new FormControl(null), 
      specialtySandwiches : new FormControl(null),
      bread : new FormControl(null),
      meats : this.formBuilder.group({
        ham : new FormControl(null),
        turkey : new FormControl(null),
        roastBeef : new FormControl(null)
      }),
      chesses : this.formBuilder.group({
        provolone : new FormControl(null),
        cheddar : new FormControl(null),
        swiss : new FormControl(null),
      }),
      veggiesAndSuch : this.formBuilder.group({
        lettuce : new FormControl(null),
        tomato : new FormControl(null),
        mustard : new FormControl(null),
      }),
      weirdRequests : new FormArray([
        this.formBuilder.control(null)
      ]),
      otherNotes : new FormControl(null)
    }, 
    {
      validator : CustomValidators.requiredWhen('bread', 'specialtySandwiches')
    });
    this.weirdRequestsControls = this.myForm.get('weirdRequests') as FormArray;
    // Track  form control value changes
    this.customerNameControl = this.myForm.get('customerName');
    this.customerNameControl.valueChanges
    .subscribe(value => {
      this.showWelcomeMessage = value && value.toLowerCase().trim() === 'debjit';
    }); 
  }
  onAddWeirdRequests(){
    this.weirdRequestsControls.push(new FormControl(null))
  }
  onDeleteWeirdRequests(index){
    this.weirdRequestsControls.removeAt(index);
  }
  onSubmit(){
    console.log(this.myForm.value)
  }
  onReset(){
    this.myForm.reset();
  }

}
