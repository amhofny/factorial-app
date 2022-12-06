import { useFormik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import ContactsService from '../../services/contacts';
import Changeset from './changeset';

function ContactForm() {
  const [serverError, setServerError] = useState("");
  const [contact, setContact] = useState({});
  const service = useMemo(() => new ContactsService(), []);
  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    if (params.contactId !== "new")
      service.show(params.contactId).then((data) => {
        setContact(data.data);
        formik.setValues(data.data);
      });
    // eslint-disable-next-line
  }, [])

  const validate = values => {
    const errors = {};
    if (!values.first_name)
      errors.first_name = 'Required';
    if (!values.last_name)
      errors.last_name = 'Required';
    if (!values.phone_number)
      errors.phone_number = 'Required';

    if (!values.email)
      errors.email = 'Required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      errors.email = 'Invalid email address';

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      first_name: '',
      last_name: '',
      phone_number: ''
    },
    validate,
    onSubmit: values => {
      let promise = contact.id ? service.update(values) : service.create(values)

      promise
      .then((data) => navigate("/contacts"))
      .catch((error) => {
        if(error.response.status === 422){
          Object.entries(error.response.data).forEach((value) => {
            formik.setFieldError(value[0], value[1].join(","));
          });
        }
        else
          setServerError(error.response.data)
      })
    },
  });

  return(
    <div>
      <div className="my-3 col-6 m-auto card">
        <div className="card-body">
          { (serverError !== "") &&
            <div className="alert alert-danger" role="alert">
              {serverError.toString()}
            </div>
          }
          <form onSubmit={formik.handleSubmit}>
            <div className="g-3">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <Input name="email" formik={formik} placeholder="Email" type="email" />
              </div>

              <div className="mb-3">
                <label htmlFor="first_name" className="form-label">First Name</label>
                <Input name="first_name" formik={formik} placeholder="First Name" />
              </div>

              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">Last Name</label>
                <Input name="last_name" formik={formik} placeholder="Last Name" />
              </div>

              <div className="mb-3">
                <label htmlFor="phone_number" className="form-label">Phone Number</label>
                <Input name="phone_number" formik={formik} placeholder="Phone Number" />
              </div>

              <div className="col-sm">
                <button data-testid="submit" type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {contact.versions && <Changeset versions={contact.versions} />}
    </div>
  );
}

export default ContactForm;
