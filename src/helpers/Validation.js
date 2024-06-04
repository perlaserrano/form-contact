const Validation = (form) => {
  let errors = {};

  // Verifica que los campos de texto no estén vacíos
  errors.firstname = form.firstname ? "" : "This field is required";
  errors.lastname = form.lastname ? "" : "This field is required";
  errors.email = form.email ? "" : "This field is required";
  errors.message = form.message ? "" : "This field is required";

  // Verifica que se haya seleccionado una opción de query_type
  errors.query_type = form.query_type ? "" : "Please select a query type.";

  // Verifica que se haya consentido
  errors.consent = form.consent ? "" : "To submit this form, please consent to being contacted";

  return errors;
};

export default Validation;
