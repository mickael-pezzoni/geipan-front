import { Component, OnInit } from '@angular/core';
import { CasService } from '../service/cas.service';
import { Observable } from 'rxjs';
import { Cas } from '../interface/cas';
import { ResultsPage } from '../interface/results-page';
import { TemoignageService } from '../service/temoignage.service';

@Component({
  selector: 'app-list-cas',
  templateUrl: './list-cas.component.html',
  styleUrls: ['./list-cas.component.scss']
})
export class ListCasComponent implements OnInit {

  constructor(private casService: CasService, private temService: TemoignageService) { }
  public requestCas: (page, pageSize) => Observable<ResultsPage>;
  public requestTem: (page, pageSize) => Observable<ResultsPage>;


  ngOnInit(): void {
    this.requestCas = (page, pageSize) => this.casService.getAllByPage(page, pageSize);
    this.requestTem = (page, pageSize) => this.temService.getAllByPage(page, pageSize);
  }
  

}
