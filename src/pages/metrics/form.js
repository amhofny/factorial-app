import { useFormik } from 'formik';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker'
import Input from '../../components/Input';
import MetricsService from '../../services/metrics';

function MetricForm() {
  const [serverError, setServerError] = useState("");

  const validate = values => {
    const errors = {};

    if (!values.name)
      errors.name = 'Required';
    if (!values.value)
      errors.value = 'Required';

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      value: 0,
      created_at: new Date()
    },
    validate,
    onSubmit: values => {
      let service = new MetricsService();

      service.create(values)
      .then((data) => {formik.resetForm()})
      .catch((error) => {setServerError(error.message)})
    },
  });

  return(
    <div className="my-3">
      { (serverError !== "") &&
        <div className="alert alert-danger" role="alert">{serverError.toString()}</div>}
      <form onSubmit={formik.handleSubmit}>
        <div className="row g-3">
          <div className="col-sm">
            <Input name="name" formik={formik} placeholder="Name" />
          </div>

          <div className="col-sm">
            <Input name="value" formik={formik} placeholder="Value" type="number" />
          </div>

          <div className="col-sm">
            <DateTimePicker value={formik.values.created_at}
                            onChange={(value) => formik.setFieldValue("created_at", value)}
                            className="form-control" clearIcon={null}/>
            {formik.errors.created_at &&
              <div className="invalid-feedback">{formik.errors.created_at}</div>}
          </div>

          <div className="col-sm">
            <button data-testid="submit" type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MetricForm;
