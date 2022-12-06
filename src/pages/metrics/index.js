import { useEffect, useState } from "react";
import { createConsumer } from "@rails/actioncable";
import MetricsService from "../../services/metrics";
import LineChart from "../../components/LineChart";
import TimeSeries from "../../components/TimeSeries";
import MetricForm from "./form";

function MetricsIndex() {
  const [data, setData] = useState({by_day: {}, by_minute: {}, by_hour: {}, metrics: []});
  const cable = createConsumer('ws://localhost:3000/cable')

  cable.subscriptions.create(
    { channel: 'MetricsChannel' },
    { received: metric => loadData() }
  )

  useEffect(() => {loadData()}, [])

  const loadData = () => {
    let service = new MetricsService();
    service.list()
    .then(list => {setData(list.data)})
    .catch(error => {console.log(error.response.data)});
  }

  return(
    <div className="container my-3 g-3">
      <div className="row g-3 mb-3">
        <TimeSeries serie={data.metrics} title={"Metrics Time Series"} />
        <LineChart serie={data.by_minute} title={"Average By Minute"} />
        <LineChart serie={data.by_hour} title={"Average By Hour"} />
        <LineChart serie={data.by_day} title={"Average By Day"} />

        <div className="card px-0">
          <div className="card-header d-flex">
            <h3 className="mb-0">Metrics</h3>
          </div>
          <div className="card-body">
            <MetricForm />
            <div style={{maxHeight: "300px", overflowY: "scroll"}}>
              <table className="table table-hover table-sm align-middle">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Value</th>
                    <th scope="col">Timestamp</th>
                  </tr>
                </thead>
                <tbody>{
                  data.metrics && data.metrics.map((metric, i) => {
                    return(
                      <tr key={metric.id}>
                        <th>{metric.id}</th>
                        <td>{metric.name}</td>
                        <td>{metric.value}</td>
                        <td>{metric.created_at}</td>
                      </tr>
                    );
                  })
                }</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetricsIndex;
