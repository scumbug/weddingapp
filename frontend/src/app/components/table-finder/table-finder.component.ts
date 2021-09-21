import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guests.interface';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-table-finder',
  templateUrl: './table-finder.component.html',
  styleUrls: ['./table-finder.component.css'],
})
export class TableFinderComponent implements OnInit {
  selectedGuest!: Guest;
  results!: Guest[];

  constructor(private backend: HttpService) {}

  ngOnInit(): void {}

  search($event: { query: string }) {
    this.backend.lookupGuests($event.query).then((data) => {
      this.results = data;
    });
    console.log(this.selectedGuest);
  }
}
