import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { fadeInOut, dimmerFadeInOut } from '../animations';

import { ComponentToggleService } from '../component-toggle.service';
import { DataProviderService } from '../data-provider.service';

import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-factor-icearea',
  templateUrl: './factor-icearea.component.html',
  styleUrls: ['./factor-icearea.component.css'],
  animations: [
    fadeInOut,
    dimmerFadeInOut
  ]
})

export class FactorIceareaComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  stateSubscription: Subscription; //Responsible for updating the state variable
  dataSubscription: Subscription; //Responsible for updating the data array variable
  state: any;
  
  // LineChart DataSet
  public lineChartData: Array<any> = [
    { data: [12.41, 11.94, 11.91, 12.19, 12.01, 11.68, 11.69, 11.88, 11.9, 12.54, 13.18, 12.8, 12.57, 12.61, 12.93, 12.88, 12.79, 12.15, 12.39, 12.81, 12.6, 12.3, 12.35, 12.26, 12.29, 12.26, 11.92, 11.65, 11.86, 12.3, 12.32, 12.04, 11.83, 12.21, 12.02, 12.1, 12.17, 11.8, 11.37, 11.64], label: 'Arctic Region' },
    { data: [3.47, 3.08, 2.84, 3.25, 3.21, 2.93, 2.87, 3.43, 3.31, 3.24, 3.17, 3.39, 3.52, 3.24, 2.55, 3.37, 3.73, 3.55, 2.77, 3.04, 3.11, 2.92, 3.64, 2.95, 4.11, 3.8, 3.18, 2.81, 3, 4.07, 3.5, 3.33, 3.05, 3.71, 3.94, 4.38, 4.34, 3.03, 2.56, 2.64], label: 'Antarctic Region' }
  ];
  public lineChartLabels: Array<any> = [1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];

  serverData = [];
  chartData: Array<any> = [{"data":[], "label":null}];
  chartAxis: Array<any> = [];
  
  chartinfoarray = ["January: We can see that there is much more ice in the Arctic Circle than in the Antarctic Circle",
                    "February: We can see that there is much more ice in the Arctic Circle than in the Antarctic Circle",
                    "March: We can see that there is much more ice in the Arctic Circle than in the Antarctic Circle",
                    "April: We can see that there is much more ice in the Arctic Circle than in the Antarctic Circle",
                    "May: We suddenly notice a spike in the amount of ice in the south, and drop at the north",
                    "June: The ice amount in the north becomes lesser than the south, owing to the seasonal reversal in the polar day/night cycle",
                    "July: The ice amount in the north becomes lesser than the south, owing to the seasonal reversal in the polar day/night cycle",
                    "August: The ice amount in the north becomes lesser than the south, owing to the seasonal reversal in the polar day/night cycle",
                    "September: The ice amount in the north becomes lesser than the south, owing to the seasonal reversal in the polar day/night cycle",
                    "October: The ice amount in the north becomes lesser than the south, owing to the seasonal reversal in the polar day/night cycle",
                    "November: However, for every month, we can see that the current value (2018) is much lesser than what it was in the 20th century ",
                    "December: This is an indication that polar ice caps are melting and this is resulting in an increased sea level"
                  ];
  chartinfo = this.chartinfoarray[0];

  constructor(private componentToggleService: ComponentToggleService, private dataProviderService: DataProviderService) { }

  ngOnInit() {
    this.stateSubscription = this.componentToggleService.getIceAreaState().subscribe(state => this.state = state);
    this.drawChart();
  }

  drawChart() {
    this.serverData = [];
    this.chartData = [{"data":[], "label":null}];
    this.chartAxis = [];

    this.dataSubscription = this.dataProviderService.getIceArea().subscribe(data => { this.serverData = data;
      this.chartData.length = 0;
      for(let i in this.serverData)
      {
        let tempData = this.serverData[i]["Area"];
        let tempLabelData = this.serverData[i]["region"];
        let entry = {
          "data": tempData,
          "label": tempLabelData
        }
        this.chartData.push(entry);
      }
      this.chartAxis.length = 0;
      for(let i of this.serverData[0]["Year"])
      {
        this.chartAxis.push(i);
      }
      console.log(this.chartData);
      console.log(this.chartAxis);

      this.lineChartData = this.chartData;
      this.lineChartLabels.length = 0;
      for(let j = 0; j < this.chartAxis.length; j++)
        this.lineChartLabels.push(this.chartAxis[j]);
      
      this.chart.chart.update();
    });
  }

  toggleIceArea() {
    this.componentToggleService.setIceAreaState('out');
  }

  onSliderChange(event: any) {
    this.dataProviderService.setIceAreaURL(event.value);
    this.chartinfo = this.chartinfoarray[event.value - 1];
    this.drawChart();
  }

  //LineChart Properties
  public lineChartOptions: any = { responsive: true, maintainAspectRatio: false };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

}
