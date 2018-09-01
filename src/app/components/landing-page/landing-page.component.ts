import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Search } from '../../models/search';
import { SearchRetrieverService } from '../../services/search-retriever.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  csSearchFormGroup: FormGroup;
  searchResults: Search[];
  error: boolean;
  reultsFound: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _searchRetriever: SearchRetrieverService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.csSearchFormGroup = this._formBuilder.group({
      value: ''
    });
  }

  submitForm(): void {
    console.log(this.csSearchFormGroup.value);
    this._searchRetriever.retrieve(this.csSearchFormGroup.value).subscribe(result => {
      this.searchResults = result;
    }, error => {
      console.log(error);
      this.error = true;
    });
  }
}

