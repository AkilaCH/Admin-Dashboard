$(function () {
  'use strict';

  if ($("#chartjs-doughnut-chart").length) {
    var DoughnutData = {
      datasets: [{
        data: [25, 20, 30, 10, 15],
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: chartColors
      }],
      labels: [
        'Internal',
        'Junior',
        'Senior',
        'HR',
        'Directory',
      ]
    };
    var DoughnutOptions = {
      responsive: true,
      animation: {
        animateScale: true,
        animateRotate: true
      }
    };
    var doughnutChartCanvas = $("#chartjs-doughnut-chart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: DoughnutData,
      options: DoughnutOptions
    });
  }

  if ($("#chartjs-pie-chart").length) {
    var PieData = {
      datasets: [{
        data: [300, 500,800],
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: chartColors
      }],

      labels: [
        'user by Daily',
        'User by Monthly',
        'Total Users',
      ]
    };
    var PieOptions = {
      responsive: true,
      animation: {
        animateScale: true,
        animateRotate: true
      }
    };
    var pieChartCanvas = $("#chartjs-pie-chart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: PieData,
      options: PieOptions
    });
  }
});