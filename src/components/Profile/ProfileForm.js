import { useRef, useContext } from 'react';

import classes from './ProfileForm.module.css';
import Authcontext from '../../Store/AuthContext';

const ProfileForm = () => {

  const newPasswordref = useRef()
  const authCtx = useContext(Authcontext);

  const submitHandler = (event) =>{
    event.preventDefault();

    const enteredNewPassword = newPasswordref.current.value;


    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAIQDE7J6_QI892bQBsVUYdOHYn8v9rG7s',
    {
      method : 'POST',
      body : JSON.stringify({
        idToken : authCtx.token,
        password : enteredNewPassword,
        returnSecureToken : false
      }),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(res => {
      
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newPasswordref} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
