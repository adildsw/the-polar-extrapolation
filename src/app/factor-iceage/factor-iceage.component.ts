import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { fadeInOut, dimmerFadeInOut } from '../animations';

import { ComponentToggleService } from '../component-toggle.service';
import { DataProviderService } from '../data-provider.service';

import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-factor-iceage',
  templateUrl: './factor-iceage.component.html',
  styleUrls: ['./factor-iceage.component.css'],
  animations: [
    fadeInOut,
    dimmerFadeInOut
  ]
})
export class FactorIceageComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  stateSubscription: Subscription; //Responsible for updating the state variable
  dataSubscription: Subscription; //Responsible for updating the data array variable
  state: any;

  // LineChart DataSet
  public lineChartData: Array<any> = [{ data: [41.54, 40.3, 40.88, 41.91, 45.42, 47.34, 47.1, 49.4, 49.17, 49.58, 50.3, 48.54, 50.34, 46.5, 47.92, 47.87, 51.58, 50.02, 48.25, 49.25, 50.17, 50.27, 52.42, 55.69, 66.22, 63.99, 60.54, 59.91, 65.05, 66.73, 61.97, 63.15, 64.85], label: '1 Year Ice' }];
  public lineChartLabels: Array<any> = [1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];

  serverData = [{"Year": [1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], "Avg percentage": [41.54, 40.3, 40.88, 41.91, 45.42, 47.34, 47.1, 49.4, 49.17, 49.58, 50.3, 48.54, 50.34, 46.5, 47.92, 47.87, 51.58, 50.02, 48.25, 49.25, 50.17, 50.27, 52.42, 55.69, 66.22, 63.99, 60.54, 59.91, 65.05, 66.73, 61.97, 63.15, 64.85], "ice age": 1}, {"Year": [1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], "Avg percentage": [13.58, 13.45, 12.7, 13.13, 12.71, 15.43, 15.39, 13.92, 16.88, 16.19, 15.49, 16.23, 16.23, 19.65, 15.49, 14.67, 14.18, 18.32, 16.93, 13.81, 15.42, 14.47, 14.8, 15.84, 14.84, 19.23, 21.17, 19.42, 17.32, 17.92, 20.51, 18.0, 19.04], "ice age": 2}, {"Year": [1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], "Avg percentage": [9.88, 9.96, 9.23, 8.35, 7.6, 7.13, 10.02, 10.07, 8.71, 9.98, 9.64, 8.96, 8.28, 8.85, 11.18, 9.2, 7.41, 7.65, 10.6, 9.72, 8.27, 10.08, 9.4, 7.96, 5.47, 5.42, 8.51, 11.89, 8.87, 8.12, 9.06, 9.94, 7.78], "ice age": 3}, {"Year": [1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], "Avg percentage": [7.98, 7.65, 7.77, 7.06, 5.65, 5.03, 5.34, 7.0, 6.81, 5.78, 6.99, 7.39, 5.92, 6.09, 6.34, 8.18, 5.96, 4.74, 5.28, 7.31, 6.47, 5.2, 6.13, 5.47, 3.16, 2.31, 2.46, 4.18, 5.17, 3.9, 4.73, 4.56, 4.8], "ice age": 4}, {"Year": [1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], "Avg percentage": [27.02, 28.63, 29.41, 29.54, 28.63, 25.07, 22.15, 19.61, 18.43, 18.46, 17.58, 18.88, 19.23, 18.91, 19.07, 20.07, 20.88, 19.26, 18.95, 19.91, 19.68, 19.98, 17.25, 15.04, 10.31, 9.05, 7.32, 4.6, 3.59, 3.33, 3.73, 4.35, 3.54], "ice age": 5}];
  chartData: Array<any> = [{ "data": [], "label": null }];
  chartAxis: Array<any> = [];

  chartinfoarray = ["We can see a gradual increase in the average ice percentage for the 1 Year Old Ice", 
                    "Average Percentage increase isn't as pronounced as for the 1 Year Old Ice",
                    "The data is mostly uniform for 3 Year Old Ice, with respect to time",
                    "4 Year Old Ice shows a decreasing trend, indicating thinner ice, more vulnerable to melt-cycles",
                    "We see an even drastic decrease in the average ice percentage for the 5+ year old ice"
                  ];
  chartinfo = this.chartinfoarray[0];

  constructor(private componentToggleService: ComponentToggleService, private dataProviderService: DataProviderService) { }

  ngOnInit() {
    this.stateSubscription = this.componentToggleService.getIceAgeState().subscribe(state => this.state = state);
    //this.dataSubscription = this.dataProviderService.getIceAge().subscribe(data => this.serverData = data);
    console.log(this.serverData);
  }

  drawChart(iceyear: number) {
    this.chartData = [{ "data": [], "label": null }];

    console.log(this.serverData);

    this.chartData.length = 0;
    let tempData = this.serverData[iceyear-1]["Avg percentage"];
    let tempLabelData = iceyear + " Year Ice";
    if(iceyear == 5)
      tempLabelData = "5+ Year Ice";
    let entry = {
      "data": tempData,
      "label": tempLabelData
    }
    this.chartData.push(entry);

    this.lineChartData = this.chartData;

    this.chart.chart.update();
  }

  toggleIceAge() {
    this.componentToggleService.setIceAgeState('out');
  }

  onSliderChange(event: any) {
    this.drawChart(event.value);
    this.chartinfo = this.chartinfoarray[event.value - 1];
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
  public barChartType: string = 'bar';
}
