import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Search } from '../models/search';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class SearchRetrieverService {
  private apiUrl = environment.Api.searchRetriever;

  constructor(private _httpClient: HttpClient) {}

  retrieve(query: string): Observable<Search[]> {
    return this._httpClient
      .get(`${this.apiUrl}?query=${query}`)
      .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
