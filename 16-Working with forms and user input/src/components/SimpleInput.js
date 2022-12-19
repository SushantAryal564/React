import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    reset: resetNameInput,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() != "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    reset: resetEmailInput,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));
  // const nameInputRef = useRef();

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    // nameInputRef.current.value =''; Not IDEAl , don't manipulate the dom
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError;
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email is not valid must contain @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
// import { useState } from "react";

// const SimpleInput = (props) => {
//   // const nameInputRef = useRef();
//   const [enteredName, setEnteredName] = useState("");
//   const [enteredNameTouch, setEnteredNameTouch] = useState(false);
//   const enteredNameIsValid = enteredName.trim() !== "";
//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;
//   let formIsValid = false;
//   if (enteredNameIsValid) {
//     formIsValid = true;
//   }
//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//   };
//   const nameInputBlureHandler = (event) => {
//     setEnteredNameTouch(true);
//   };
//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     setEnteredNameTouch(true);
//     if (!enteredNameIsValid) {
//       return;
//     }
//     console.log(enteredName);
//     // const enteredValue = nameInputRef.current.value;
//     // console.log(enteredValue);
//     setEnteredName("");
//     setEnteredNameTouch(false);
//   };
//   const nameInputClasses = nameInputIsInvalid
//     ? "form-control invalid"
//     : "form-control";
//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           // ref={nameInputRef}
//           type="text"
//           id="name"
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlureHandler}
//           value={enteredName}
//         />
//       </div>
//       {nameInputIsInvalid && (
//         <p className="error-text">Name must not be empty</p>
//       )}
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };
// export default SimpleInput;
