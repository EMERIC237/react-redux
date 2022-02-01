import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import "./Form.css";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    // const newForm = {
    //   name: form.name,
    //   email: form.email,
    //   message: form.message,
    // };

    dispatch({
      type: "ADDFORM",
      payload: form,
    });

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const addName = (e) => {
    const newObjstate = { ...form, name: e.target.value };
    setForm(newObjstate);
  };

  const addEmail = (e) => {
    const newObjstate = { ...form, email: e.target.value };
    setForm(newObjstate);
  };

  const addMessage = (e) => {
    const newObjstate = { ...form, message: e.target.value };
    setForm(newObjstate);
  };

  return (
    <div>
      <div>
        <p> {form.name} </p>
        <p> {form.email} </p>
        <p> {form.message} </p>
      </div>

      <form onSubmit={handleForm}>
        <div className="formContent">
          <div className="formItem">
            <label> name </label>
            <input
              type="text"
              className="formItem"
              onChange={addName}
              value={form.name}
            />
          </div>

          <div className="formItem">
            <label> email </label>
            <input
              type="email"
              className="formItem"
              onChange={addEmail}
              value={form.email}
            />
          </div>

          <div className="formItem">
            <label> message </label>
            <textarea onChange={addMessage} value={form.message}></textarea>
          </div>

          <div className="formItem">
            <button> Send </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
