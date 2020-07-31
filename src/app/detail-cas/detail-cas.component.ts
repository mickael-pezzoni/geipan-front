import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Cas } from '../interface/cas';
import { Router, ActivatedRoute } from '@angular/router';
import { CasService } from '../service/cas.service';
import { Location } from '@angular/common';
import { TemoignageService } from '../service/temoignage.service';
import { Temoignage } from '../interface/temoignage';
import { StorageService } from '../service/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-cas',
  templateUrl: './detail-cas.component.html',
  styleUrls: ['./detail-cas.component.scss']
})
export class DetailCasComponent implements OnInit, OnDestroy {

  public casSelect: Cas;
  public isVisible: boolean;
  public temByCas: Temoignage[];
  public editForm: FormGroup;

  constructor(private route: ActivatedRoute, 
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private temService: TemoignageService,
    private casService: CasService,
    private location: Location) {
    this.isVisible = false;
    this.temByCas = [];
    const _id = this.route.snapshot.params['idCas'];
    if (this.storageService.getCurrentCas()) {
      this.casSelect = this.storageService.getCurrentCas();
    } else {
      this.casSelect = this.casService.getCasByIdCurrentPage(_id);
      this.storageService.setCurrentCas(this.casSelect);
    }
    this.temService.getTemoignageByCas(this.casSelect.id_cas).subscribe(
      _res => {
        console.log(_res);
        this.temByCas = _res;
      }
    );
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      codeZone: [0, Validators.required],
      codeZoneLabel: ['', Validators.required],
      resume: ['', Validators.required]
    });
    
  }

  ngOnInit(): void {
    console.log(this.route.parent.url);
  }

  backPage(): void {
    this.location.back();
  }

  editModal() {
    this.isVisible = true;
    this.editForm.setValue({
      title: this.casSelect.cas_nom_dossier,
      codeZone: this.casSelect.cas_zone_code,
      codeZoneLabel: this.casSelect.cas_zone_nom,
      resume: this.casSelect.cas_resume
    });
  }

  handleOk() {}

  ngOnDestroy() {
    this.storageService.cleanCurrentCas();
  }


}
