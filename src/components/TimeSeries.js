import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from 'react';

function TimeSeries({serie, title}) {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    let data = [];

    serie.forEach((item) => {
      data.push({
        name: item.name,
        value: [item.created_at, item.value]
      });
    })

    let options = {
      xAxis: { type: 'time', splitLine: {show: true} },
      yAxis: { type: 'value', boundaryGap: [0, '100%'], splitLine: {show: true} },
      series: [{ data: data, type: 'line', showSymbol: false }]
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

export default TimeSeries;
