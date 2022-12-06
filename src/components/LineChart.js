import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from 'react';

function LineChart({serie, title}) {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    let options = {
      xAxis: { type: 'category', data: serie.labels },
      yAxis: { type: 'value' },
      series: [{ data: serie.data, type: 'line' }]
    };

    setChartData(options);
  }, [serie])

  return(
    <div className="card px-0">
      <div className="card-header">{title}</div>
      <div className="card-body" data-testid="chart">
        <ReactECharts option={chartData} />
      </div>
    </div>
  );
}

export default LineChart;
