import { Component, OnInit, Input } from '@angular/core';
import { Cas } from '../interface/cas';
import { Temoignage } from '../interface/temoignage';
import { isUndefined } from 'util';
import { Observable } from 'rxjs';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ResultsPage } from '../interface/results-page';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public data: Array<Cas | Temoignage>;

  @Input() public dataType: string;

  @Input() public request: (page, pageSize) => Observable<ResultsPage>;

  public total = 1;
  public loading = false;
  public pageSize = 20;
  public pageIndex = 1;
  public headers: Array<{label: string, key: string}>;
  constructor() { }

  ngOnInit(): void {
    if (this.dataType === "tem") {
      this.headers =  [
        { label: "idCas", key: "id_cas"}, 
        { label: "Nom du dossier", key: "tem_nom_dossier" }, 
        { label: "Département", key: "obs_1_adr_dpt" }, 
        { label: "Date", key: "obs_date_heure" }
      ]; 
    } else {
      this.headers = [
        { label: "idCas", key: "id_cas" },
        { label: "Dépatement", key: "cas_zone_code" },
        { label: "Classification", key: "cas_classification"},
        { label: "Nom du dossier", key: "cas_nom_dossier"}, 
        { label: "Année", key: "cas_AAAA"}
      ];
    }
    this.request(this.pageIndex, this.pageSize).subscribe(
      _res => {
        console.log(_res);
        this.data = _res.results;
        this.total = _res.totalData;
        this.loading = false;
      }
    );
  }

  onQueryParamsChange(event: NzTableQueryParams) {
    this.loading = true;
    this.pageSize = event.pageSize;
    this.request(event.pageIndex, this.pageSize).subscribe(
      _res => {
        this.data = _res.results;
        this.total = _res.totalData;
        this.loading = false;
      }
    );
  }


  
  
}
