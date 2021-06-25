import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Chart = require("chart.js");

@Component({
  selector: 'app-profile-chart',
  templateUrl: './profile-chart.component.html',
  styleUrls: ['./profile-chart.component.css']
})
export class ProfileChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let chart = new Chart("chart-per-app", {
      type: 'bar',
      data: {
        labels: ['app1', 'app2', 'app3', 'app4', 'app5', 'app6'],
        datasets: [{
          label: 'number of ticket per app',
          data: [12, 19, 3, 5, 3, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
        }
      }
    });

    let chart2 = new Chart("chart-per-month", {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'app1',
            data: [33, 27, 55, 67, 21, 45, 46, 34, 56, 67, 78, 80],
            borderColor: ['rgba(255, 99, 132, 1)'],
            backgroundColor: ['transparent'],
          },
          {
            label: 'app2',
            data: [46, 34, 56, 67, 78, 80, 33, 27, 55, 67, 21, 45],
            borderColor: ['rgba(255, 206, 86, 1)'],
            backgroundColor: ['transparent'],
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        },
        hover: {
          mode: 'index'
        },
      },
    });
    }
  }

