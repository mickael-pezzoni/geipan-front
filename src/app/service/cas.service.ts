import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cas, CasClassife } from '../interface/cas';
import { API } from '../const/api';
import { ResultsPage } from '../interface/results-page';

@Injectable({
  providedIn: 'root'
})
export class CasService {
  
  public allCas: CasClassife[];

  constructor(private httpClient: HttpClient) {
    this.allCas = [];
  }


  public getById(idCas: string): Observable<Cas> {
    return this.httpClient.get<Cas>(`${API.URL}${API.CAS.BYID}/${idCas}`);
  }

  public getAllByGroup(): Observable<CasClassife[]> {
    return this.httpClient.get<CasClassife[]>(`${API.URL}${API.CAS.ALL_GROUP}`);
  }

  public getAllByPage(page: number, pageSize: number): Observable<ResultsPage> {
    return this.httpClient.get<ResultsPage>(`${API.URL}${API.CAS.ALL_PAGE}?page=${page}&pageSize=${pageSize}`);
  }
}
