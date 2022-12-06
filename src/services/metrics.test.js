import MetricsService from './metrics';
import request from './request';

jest.mock('./request')

test('loads contacts data', () => {
  let metrics = [{ name: "aaa", value: 100 }];

  request.get.mockImplementationOnce(() => {return Promise.resolve(metrics)});

  const service = new MetricsService();
  return expect(service.list()).resolves.toStrictEqual(metrics);
});

test('should create contact', () => {
  let metric = { name: "aaa", value: 100 };
  request.post.mockImplementationOnce(() => {return Promise.resolve({status: 201})});

  const service = new MetricsService();
  return expect(service.create(metric)).resolves.toHaveProperty("status", 201);
});
