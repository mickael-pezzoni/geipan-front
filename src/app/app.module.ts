import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { NgZorroAntdModule } from './nz-module';
import { ListCasComponent } from './list-cas/list-cas.component';
import { TableComponent } from './table/table.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { StatsComponent } from './stats/stats.component';
import { TemoignageService } from './service/temoignage.service';
import { CasService } from './service/cas.service';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts/lib/ngx-echarts.directive';
import * as echarts from 'echarts'; 

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    ListCasComponent,
    TableComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: echarts
    }),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR },
    CasService,
    TemoignageService
  ],
  exports: [
    NgxEchartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
