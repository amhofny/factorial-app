import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactsService from "../../services/contacts";


function ContactsIndex() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    new ContactsService().list()
    .then(response => {setContacts(response.data)})
    .catch((error => {console.log(error.message)}))
  }, [])

  let handleDelete = (id) => {
    new ContactsService().destroy(id)
    .then((response) => setContacts(contacts.filter((cont) => cont.id !== id)))
    .catch((error => {console.log(error.message)}))
  }

  return(
    <div className="container mt-3">
      <div className="card">
        <div className="card-header d-flex">
          <h3 className="mb-0">Contacts</h3>
          <Link to={"new"} className="btn btn-primary ms-auto">Create Contact</Link>
        </div>
        <div className="card-body">
          <table className="table table-hover table-sm align-middle">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>{
              contacts.map((contact, i) => {
                return(
                  <tr key={contact.id}>
                    <th>{contact.id}</th>
                    <td>
                      <Link to={`/contacts/${contact.id}`}>{contact.email}</Link>
                    </td>
                    <td>{contact.first_name}</td>
                    <td>{contact.last_name}</td>
                    <td>{contact.phone_number}</td>
                    <td>
                      <button className="btn btn-danger"
                              onClick={ () => handleDelete(contact.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })
            }</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContactsIndex;
