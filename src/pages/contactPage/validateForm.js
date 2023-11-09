export default function validateForm(values, t) {
  let errors = {};

  if (!values.name) {
    errors.name = "name";
  }
  if (!values.email) {
    errors.email = "email_required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "email_invalid";
  }
  if (values.message < 2) {
    errors.message = "message";
  }

  return errors;
}
