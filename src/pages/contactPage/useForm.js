import { useState, useEffect, useContext, useCallback } from "react";
import emailjs from "@emailjs/browser";

import { DataContext } from "../../context/DataProvider";

const useForm = (validateForm) => {
  const { t } = useContext(DataContext);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventTarget, setEventTarget] = useState({});
  const [messageSend, setMessageSend] = useState(false);
  const [messageNotSend, setMessageNotSend] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(values));
    setEventTarget(event.target);
    setIsSubmitting(true);
  };

  const submit = useCallback(() => {
    emailjs
      .sendForm(
        "service_y4km763",
        "template_hggx4gk",
        eventTarget,
        "2Jb2a_GxGik7-1Ecw"
      )
      .then(
        (result) => {
          setValues({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setMessageSend(true);
          setIsSubmitting(false);
          setMessageNotSend(false);
          setTimeout(() => {
            setMessageSend(false);
          }, 3000);
        },
        (error) => {
          setMessageNotSend(true);
          setTimeout(() => {
            setMessageNotSend(false);
          }, 100);
        }
      );
  }, [eventTarget]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit();
    }
  }, [errors, isSubmitting, submit]);

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    t,
    messageSend,
    messageNotSend,
  };
};

export default useForm;
