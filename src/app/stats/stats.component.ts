import { Component, OnInit } from '@angular/core';
import { CasService } from '../service/cas.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  public options: any;
  public optionBar: any;
  constructor(private casService: CasService) {
  }

  ngOnInit(): void {
    if (this.casService.allCas.length < 1) {
      this.casService.getAllByGroup().subscribe(
        _res => {
          console.log(_res);
          this.casService.allCas = _res;
          this.setchartOption();
        }
      );
    } else {
      this.setchartOption();
    }
  }

  setchartOption(): void {
    this.options = {
      title: {
        text: 'Cas',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: this.casService.allCas.map(_elt => _elt._id)
      },
      series: [
        {
          name: 'classification',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: this.casService.allCas.map(_elt => {
            return { value: _elt.values.length, name: _elt._id }
          }),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    //console.log(this.casService.allCas.map(_elt => _elt.values).flat());
/*     this.optionBar = {
      xAxis: {
          type: 'category',
          data: this.casService.allCas.map(_elt => {
            _elt.values.flat().map
          })
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
          }
      }]
  }; */
  
  }

}
