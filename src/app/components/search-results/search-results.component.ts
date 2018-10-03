import { Component, Input } from '@angular/core';
import { Search } from '../../models/search';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  constructor(private location: Location){}

  @Input() searchResults: Search[];


  returnToSearch() {
    // route back to landing page
    this.location.back();
  }

}

