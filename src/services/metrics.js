import request from './request';

class MetricsService {
  list = () => {
    return request.get("/metrics.json")
  }

  create = (metric) => {
    return request.post("/metrics", metric)
  }
}

export default MetricsService;
