import React from 'react';
import { Line } from 'react-chartjs-2';

const dataChart = {
  data: {
    labels: ['0 days', '5 days', '10 days', '15 days', '20 days', '25 days', '30 days'],
    datasets: [
      {
          label: 'Resolved',
          backgroundColor: 'rgba(55, 187, 251, 0.60)',
          data: [4, 2, 4, 1, 3, 2, 3],
          showLine:true
      },
      {
          label: 'Failed',
          backgroundColor: 'rgba(215, 60, 42, 0.60)',
          data: [1, 1, 1, 1, 0, 2, 0],
          showLine:true
        },
    ]
  }
}

const Chart = () => {

  const [chartData] = React.useState(dataChart);

  const getChartData = () => {
    const data = chartData.data;
    return data;
  }
  
  return (
    <div style={{ position: "relative", height: "350px", width: "90%", margin: '0 auto' }}>
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                min: 0,
                max: 5
              }
            }]
          }
        }}
        data={getChartData}
      />
    </div>
  );
}

export default Chart;
