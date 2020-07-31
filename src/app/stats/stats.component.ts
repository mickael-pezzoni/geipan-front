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
      console.log('pas chargé');
      this.casService.getAllByGroup().subscribe(
        _res => {
          console.log(_res);
          this.casService.allCas = _res;
          this.casService.setCasByYear();
          this.setchartOption();
        }
      );
    } else {
      console.log('chargé')
      this.setchartOption();
    }
  }

  setchartOption(): void {
    console.log(this.casService.allcasByYear);
    this.options = {
      title: {
        text: 'Cas',
        //textAlign: 'center',
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
      label: {
        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        backgroundColor: '#eee',
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: '#999',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#aaa',
            width: '100%',
            borderWidth: 0.5,
            height: 0
          },
          b: {
            fontSize: 16,
            lineHeight: 33
          },
          per: {
            color: '#eee',
            backgroundColor: '#334455',
            padding: [2, 4],
            borderRadius: 2
          }
        }
      },
      series: [
        {
          name: 'classification',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: this.casService.getCasByClassification(),
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
    this.optionBar = {
      title: {
        text: 'Répartie par année',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        data: this.casService.allcasByYear.sort((a, b) => a.year - b.year).map(_elt => _elt.year)
      },
      yAxis: {
        type: 'value'
      },
      dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100
      }],
      series: [{
        name: 'Cas',
        data: this.casService.allcasByYear.sort((a, b) => a.year - b.year).map(_elt => _elt.element.length),
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.8)'
        }
      }]
    };
    console.log(this.optionBar);

  }

}
