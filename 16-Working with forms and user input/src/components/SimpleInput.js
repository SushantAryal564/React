import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
  const {value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangedHandler, 
    reset: resetNameInput,
    inputBlurHandler: nameBlurHandler } = useInput(value=>value.trim() != '');
  const {value: enteredEmail,isValid: enteredEmailIsValid,hasError: emailInputHasError,valueChangeHandler:emailChangedHandler,reset:resetEmailInput,inputBlurHandler: emailBlurHandler} = useInput(value=>value.includes('@'));
  // const nameInputRef = useRef();

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  const formSubmissionHandler = event =>{
    event.preventDefault();
    if (!enteredNameIsValid){
      return
    }
    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    // nameInputRef.current.value =''; Not IDEAl , don't manipulate the dom
    resetNameInput();
    resetEmailInput();
  }


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
