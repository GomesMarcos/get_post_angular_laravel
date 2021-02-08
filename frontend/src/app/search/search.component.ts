import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() searchString: string = '';
  emissor = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  typingSearch(event) {
    this.searchString = event.target.value;
  }

  search() {
    this.searchString = (<HTMLInputElement>(
      document.getElementById('searchInput')
    )).value;
  }
}
