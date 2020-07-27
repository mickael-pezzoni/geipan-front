import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temoignage } from '../interface/temoignage';
import { API } from '../const/api';
import { ResultsPage } from '../interface/results-page';

@Injectable({
  providedIn: 'root'
})
export class TemoignageService {

  constructor(private httpClient: HttpClient) { }

  public getAllByPage(page: number, pageSize: number): Observable<ResultsPage> {
    return this.httpClient.get<ResultsPage>(`${API.URL}${API.TEM.ALL_PAGE}?page=${page}&pageSize=${pageSize}`);
  }
}
