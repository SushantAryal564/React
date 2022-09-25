import React, { useState, useRef } from "react";
import useInputBase from "../hooks/use-input-baseInput";
const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() != "";
  const isEmail = (value) => value.includes("@");
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputIsInValid,
    valueInputHandler: firstNameInputHandler,
    BlurHandler: firstInputBlurHandler,
    reset: resetFirstName,
  } = useInputBase(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputIsInValid,
    valueInputHandler: lastNameInputHandler,
    BlurHandler: lastInputBlurHandler,
    reset: resetLastName,
  } = useInputBase(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputIsInValid,
    valueInputHandler: emailInputHandler,
    BlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInputBase(isEmail);

  let formIsValid = false;

  if (
    enteredEmailIsValid &&
    enteredFirstNameIsValid &&
    enteredLastNameIsValid
  ) {
    formIsValid = true;
  }

  const formSubmmitHandler = (event) => {
    event.preventDefault();
    if (!enteredFirstNameIsValid) {
      return;
    }
    if (!enteredLastNameIsValid) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }

    console.log(enteredFirstName, enteredLastName, enteredEmail);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  function checkit(boolean_value) {
    return boolean_value ? "form-control invalid" : "form-control";
  }

  return (
    <form onSubmit={formSubmmitHandler}>
      <div className="control-group">
        <div className={checkit(firstNameInputIsInValid)}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInputHandler}
            value={enteredFirstName}
            onBlur={firstInputBlurHandler}
          />
          {firstNameInputIsInValid && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>
        <div className={checkit(lastNameInputIsInValid)}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameInputHandler}
            value={enteredLastName}
            onBlur={lastInputBlurHandler}
          />
          {lastNameInputIsInValid && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={checkit(emailInputIsInValid)}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailInputHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInValid && (
          <p className="error-text">Email must contain @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
