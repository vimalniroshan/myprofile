// var defaultChartStyle = {
//       type: 'bar',
//       options: {
//           legend: {
//             display: false
//           },
//           scales: {
//               yAxes: [{
//                 gridLines: {
//                   display: false,
//                   drawBorder: false
//                 },
//                 ticks: {
//                     beginAtZero:true,
//                     fixedStepSize: 1,
//                     maxTicksLimit: 4
//                 }
//               }],
//               xAxes: [{
//                 gridLines : {
//                   display: false
//                 }
//               }]
//           }
//       }
//   };

var yValueLabels = {
    1: "beginner",
    2: "intermediate",
    3: "advanced",
    4: "expert"
  };

var yAxisLabelCallback = function(value) {
  return yValueLabels[value];
};

var chartData =  {
      labels: ["Java", "Node", "SQL", "C,C++", "Python"],
      datasets: [{
          data: [4, 3, 3, 2, 1],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
          ]
      }]
  };

var tooltipBeforeLabelCallback = function(t, d) {
  t.yLabel = yValueLabels[t.yLabel];
};

var chartConfig = {
      type: 'bar',
      data: chartData,
      options: {
          legend: {
            display: false
          },
          tooltips: {
            callbacks: {
              beforeLabel: tooltipBeforeLabelCallback
            }
          },
          scales: {
              yAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                    beginAtZero:true,
                    fixedStepSize: 1,
                    maxTicksLimit: 4,
                    callback: yAxisLabelCallback
                }
              }],
              xAxes: [{
                gridLines : {
                  display: false
                }
              }]
          }
      }
  };

$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });

    return false;
});

$(document).ready(function() {
  var ctx = $("#skills-chart");
  var myChart = new Chart(ctx, chartConfig);
});
