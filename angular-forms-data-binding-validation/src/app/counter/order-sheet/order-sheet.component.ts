import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl , FormArray, Form} from '@angular/forms';

@Component({
  selector: 'app-order-sheet',
  templateUrl: './order-sheet.component.html',
  styleUrls: ['./order-sheet.component.css']
})
export class OrderSheetComponent {
  orderSheetForm: FormGroup;
  weirdRequestsControls : FormArray;

  constructor(private formBuilder: FormBuilder) { 
    this.buildForm();
  }
  buildForm(){
    this.orderSheetForm = this.formBuilder.group({
      // Add form fields to the form to take user input
      customerName : this.formBuilder.control(null),
      size : this.formBuilder.control(null),
      bread : this.formBuilder.control(null),
      specialtySandwich : this.formBuilder.control(null),
      weirdNotes : this.formBuilder.array([
        this.formBuilder.control(null)
      ]),
      otherNotes : this.formBuilder.control(null),
      meat : this.formBuilder.group({
        meatHam : this.formBuilder.control(null),
        meatTurkey : this.formBuilder.control(null),
        meatRoastBeef : this.formBuilder.control(null)
      }),
      cheese : this.formBuilder.group({
        cheeseProvolone : this.formBuilder.control(null),
        cheeseCheddar : this.formBuilder.control(null),
        cheeseSwiss : this.formBuilder.control(null),
      }),
      veggiesAndSuch : this.formBuilder.group({
        veggieLettuce : this.formBuilder.control(null),
        veggieTomato : this.formBuilder.control(null),
        veggieNustard : this.formBuilder.control(null),
      })
    });
    this.weirdRequestsControls = this.orderSheetForm.get('weirdRequests') as FormArray;
  }
  onAddWeirdRequests(){
    this.weirdRequestsControls.push(this.formBuilder.control(null));
  }
  onRemoveWeirdRequests(index){
    this.weirdRequestsControls.removeAt(index);
  }
}
