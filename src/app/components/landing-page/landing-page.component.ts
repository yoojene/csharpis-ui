import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Search } from '../../models/search';
import { SearchRetrieverService } from '../../services/search-retriever.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  csSearchFormGroup: FormGroup;
  searchResults: Search[];
  error: boolean;
  resultsFound = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _searchRetriever: SearchRetrieverService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.csSearchFormGroup = this._formBuilder.group({
      searchQuery: ''
    });
  }

  submitForm(): void {
    this._searchRetriever.retrieve(this.csSearchFormGroup.value.searchQuery).subscribe(result => {
      this.searchResults = result;
      this.resultsFound = true;
      this.router.navigate(['/search']);
    }, error => {
      console.log(error);
      this.error = true;
    });
  }
}

