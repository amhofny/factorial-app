function Input({name, type = "text", placeholder="", formik}) {
  return(
    <>
      <input type={type} placeholder={placeholder} name={name}
             {...formik.getFieldProps(name)}
             className={"form-control " + (formik.errors[name]? "is-invalid" : "")}
             data-testid={name}
      />
      {formik.errors[name] && <div className="invalid-feedback">{formik.errors[name]}</div>}
    </>
  );
}

export default Input;
