import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { seriedData } from './seriesData.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chart',
  templateUrl: './graphView.component.html',
  providers: [seriedData]
})
export class graphViewComponent implements OnInit {
  public records: any;
  public chartName: string;
  public options: any = [];
  public id: string;

  constructor(private _seriedData: seriedData, private route: ActivatedRoute) { }
  ngOnInit() {
    // Get the parameter (Record Id) from route
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    //Service method to get the record of current selction
    this._seriedData.getExcelRecord(this.id).subscribe(
      data => {
        var lines = data.lines;
        var series = [];
        var seriesObj = {};
        for (let line of lines) {
          //sorting the line data on year
          line.sort(function (a, b) {
            return a.year - b.year
          });
          //Preparing the required object to insert into database
          var dataArr = [];
          for (let values of line) {
            let innerObj = [];
            innerObj.push(Number(values.year));
            innerObj.push(Number(values.score));
            dataArr.push(innerObj);
          }
          let obj = {
            animation: true,
            type: 'line',
            data: dataArr
          }
          series.push(obj);
        }
        // Setting options for graph generation

        this.options = {
          title: { text: data.name },
          yAxis: {
            title: {
                text: 'Score'
            }
          },
          xAxis: {
            title: {
                text: 'Year'
            }
          },
          series: series,
        };
      }
    )

  }

}
