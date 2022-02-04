import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  guests!: Guest[];
  @ViewChild('autocomplete', { static: false, read: ElementRef })
  autocomplete!: ElementRef<HTMLInputElement>;

  constructor(private backend: HttpService) {}

  ngOnInit(): void {}

  search($event: { query: string }) {
    this.backend.lookupGuests($event.query).then((data) => {
      this.results = data;
    });
  }

  getTable($event: any) {
    this.backend.lookupTables($event.table).then((data: any) => {
      this.guests = data;
      const defocus = this.autocomplete.nativeElement.childNodes[0].childNodes[0] as HTMLInputElement;
      defocus.blur();
    });
  }
}
