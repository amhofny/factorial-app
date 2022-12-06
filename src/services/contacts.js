import request from './request';

class ContactsService {
  list = () => {
    return request.get("/contacts.json")
  }

  create = (contact) => {
    return request.post("/contacts", contact)
  }

  show = (id) => {
    return request.get(`/contacts/${id}`);
  }

  update = (contact) => {
    return request.put(`/contacts/${contact.id}`, contact)
  }

  destroy = (id) => {
    return request.delete(`contacts/${id}`)
  }
}

export default ContactsService;
