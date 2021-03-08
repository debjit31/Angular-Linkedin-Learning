import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from './models/Artist';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles : [
    `
      .list-group-item:first-child{
        border-top-left-radius : 0;
        border-top-right-radius : 0;
        border-top : 0;
      }
    `
  ],
})
export class AppComponent implements OnInit{
  // data binding
  // class variables with datatypes
    name: string;
    artists:Artist[];
    currentArtist:Artist;

    //constructor to initialize variables to pass data to the componenets template 
    constructor(private http:HttpClient){
      this.name='';
    }
    // Lifecycle method
    ngOnInit() :void{
      //Fetching data from an external file using Http get method
      // Http Module fetch
      // making it a service
      this.http.get<Artist[]>('../assets/data.json').subscribe(
        data => {
          this.artists = data;
        })
      
    }
    // Adding Click Event on each artist tab
    showArtist(artist){
      this.name = artist.name;
      artist.highlight = !artist.highlight;
      this.currentArtist=artist;
    }
}
