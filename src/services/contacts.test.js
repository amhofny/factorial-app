import ContactsService from './contacts';
import request from './request';

jest.mock('./request')

test('loads contacts data', () => {
  let contacts = [{ email: "email@email" }];

  request.get.mockImplementationOnce(() => {return Promise.resolve(contacts);});

  const service = new ContactsService();
  return expect(service.list()).resolves.toStrictEqual(contacts);
});

test('should show contact', () => {
  let contact = { id: 1, email: "email@email" };
  request.get.mockImplementationOnce(() => {return Promise.resolve(contact);});

  const service = new ContactsService();
  return expect(service.show(1)).resolves.toStrictEqual(contact);
});

test('should create contact', () => {
  let contact = { email: "email@email" };
  request.post.mockImplementationOnce(() => {return Promise.resolve({status: 201});});

  const service = new ContactsService();
  return expect(service.create(contact)).resolves.toHaveProperty("status", 201);
});

test('should update contact', () => {
  let contact = { id: 1, email: "email@email" };
  request.put.mockImplementationOnce(() => {return Promise.resolve({status: 200});});

  const service = new ContactsService();
  return expect(service.update(contact)).resolves.toHaveProperty("status", 200);
});

test('should delete contact', () => {
  request.delete.mockImplementationOnce(() => {return Promise.resolve({status: 204});});

  const service = new ContactsService();
  return expect(service.destroy(1)).resolves.toHaveProperty("status", 204);
});
