import { Component, OnInit, Input } from '@angular/core';
import { Cas } from '../interface/cas';
import { Temoignage } from '../interface/temoignage';
import { isUndefined } from 'util';
import { Observable } from 'rxjs';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ResultsPage } from '../interface/results-page';
import { CasService } from '../service/cas.service';
import { TemoignageService } from '../service/temoignage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public dataType: string;
  @Input() public headerAndKeyValue: Array<{label: string, key: string}>[];

  @Input() public request: (page, pageSize, sort?: {key: string, value: string}) => Observable<ResultsPage>;
  public data: any;
  public total = 1;
  public loading = false;
  public pageSize = 20;
  public pageIndex = 1;
  constructor(public casService: CasService, 
    public temService: TemoignageService,
    public router: Router) { }

  ngOnInit(): void {
    this.request(this.pageIndex, this.pageSize).subscribe(
      _res => {
        console.log(_res);
        this.casService.casCUrrentPage = _res.results;
        this.total = _res.totalData;
        this.loading = false;
      }
    );
  }

  onQueryParamsChange(event: NzTableQueryParams) {
    this.loading = true;
    this.pageSize = event.pageSize;
    let sort = event.sort.filter(_elt => _elt.value !== null)[0];
    console.log(sort);
    this.request(event.pageIndex, this.pageSize, sort).subscribe(
      _res => {
        if (this.dataType == "tem") {
          this.temService.temCUrrentPage = _res.results;
        } else {
          this.casService.casCUrrentPage = _res.results;
        }
        this.total = _res.totalData;
        this.data = _res.results;
        this.loading = false;
      }
    );
  }

  selectItem(item: any) {
    if (this.dataType == "tem") {
    } else {
      this.router.navigate(['cas-detail', item._id]);
    }
  }


  
  
}
