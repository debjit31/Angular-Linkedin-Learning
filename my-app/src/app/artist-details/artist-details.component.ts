import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../models/Artist';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html'
})
export class ArtistDetailsComponent implements OnInit {
  @Input() artist:Artist;
  constructor() { }

  ngOnInit(): void {
  }

}
