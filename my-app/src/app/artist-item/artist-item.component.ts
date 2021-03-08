import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../models/Artist';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html'
})
export class ArtistItemComponent implements OnInit {
  @Input() artist: Artist;
  constructor() { }
  ngOnInit(): void {
  }

}
