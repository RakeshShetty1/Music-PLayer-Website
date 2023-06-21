import React, { useRef, useState } from "react";
import { isEmail } from "validator";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  let formRef = useRef();
  let dateRef = useRef(); 
  let maleRef = useRef();
  let femaleRef = useRef();
  let othersRef = useRef();

  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  

  const validateEmailFormat = (email) => {
    return isEmail(email);
  };
  let changeFirst = (e) => {
    let newUser = { ...user, firstname: e.target.value };
    setUser(newUser);
  };
  let changeLast = (e) => {
    let newUser = { ...user, lastname: e.target.value };
    setUser(newUser);
  };

  let changeEmail = (e) => {
    let newUser = { ...user, email: e.target.value };
    setUser(newUser);
    setIsError(false); 
  };

  let changePassword = (e) => {
    let newUser = { ...user, password: e.target.value };
    setUser(newUser);
  };

  let addRegister = async () => {
    try {
      formRef.current.classList.add("was-validated");
      if (!validateEmailFormat(user.email)||user.password=="") {
        setIsError(true);
        return;
      }

      let dateVal = dateRef.current.value; 
      let genderVal = maleRef.current.checked
        ? maleRef.current.value
        : femaleRef.current.checked
        ? femaleRef.current.value
        : othersRef.current.value;

      let uri = `http://localhost:4000/addRegister?firstname=${user.firstname}&lastname=${user.lastname}&email=${user.email}&password=${user.password}&dob=${dateVal}&gender=${genderVal}`;
      let res = await fetch(uri);

      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newUser = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      };
      setUser(newUser);

      formRef.current.classList.remove("was-validated");
      setIsSuccess(true);
      toast.success('Registered Successfully'); 
      setTimeout(() => {
        setIsSuccess(false); window.location.href = "http://localhost:3000/login";
      }, 2000);
    } catch (err) {
      setIsError(true);
      toast.error('Account is already registered');
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <>
      <div >
        <div className="row mymain d-flex flex-coloumn " style={{height:"100%"}} >
          <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="mybrand">
              <i className="fa-solid fa-music" /> | SoundPulse
            </div>
            <div className="myregister">
              <div className="myacct">
                <h4>Create a new account</h4>
              </div>
              <div style={{ textAlign: "center" }}>It's quick and easy.</div>
              <hr />
              <form ref={formRef} className="needs-validation">
                <div className="row p-2">
                  <input
                    className="form-control col inputs"
                    style={{ margin: "0 4px" }}
                    type="text"
                    id="firstId"
                    placeholder="First name"
                    minLength={4}
                    value={user.firstname}
                    onChange={changeFirst}
                    required
                  />
                 
                  <input
                    className="form-control col inputs"
                    style={{ margin: "0 4px" }}
                    type="text"
                    id="lastId"
                    placeholder="Surname"
                    minLength={4}
                    value={user.lastname}
                    onChange={changeLast}
                    required
                  />
                  
                </div>
                <input  
                  className="form-control mb-2 inputs"
                  type="email"
                  id="emailId"
                  placeholder="Email address"
                  value={user.email}
                  minLength={10}
                  onChange={changeEmail}
                  required
                />
                <div className="invalid-feedback">
                  Please enter valid email
                </div>
                <input
                  className="form-control inputs"
                  type="password"
                  id="passwordId"
                  placeholder="New password"
                  value={user.password}
                  minLength={8}
                  onChange={changePassword}
                  required
                />
                <div className="invalid-feedback">
                  Password is required
                </div>
              </form>

              <div className="mytags">
                Date of birth <i className="fa fa-question-circle" />
              </div>
              <div className="row d-flex m-1 mydates not-validated">
                <input
                  type="date"
                  className="dates form-control"
                  style={{ color: "#606770" }}
                  ref={dateRef}
                />
              </div>
              <div className="mytags">
                Gender <i className="fa fa-question-circle" />
              </div>
              <div
                className="row p-2"
                style={{ justifyContent: "space-between", paddingTop: 8 }}
              >
                <input
                  className="gender"
                  type="radio"
                  name="gender"
                  id="male"
                  defaultValue="Male"
                  ref={maleRef}
                />
                <label
                  className="form-control form-control-md col mygender"
                  style={{ margin: "0 4px" }}
                  htmlFor="male"
                >
                  Male
                </label>
                <input
                  className="gender"
                  type="radio"
                  name="gender"
                  id="female"
                  defaultValue="Female"
                  ref={femaleRef}
                />
                <label
                  className="form-control form-control-md col mygender"
                  style={{ margin: "0 2px" }}
                  htmlFor="female"
                >
                  Female
                </label>
                <input
                  className="gender "
                  type="radio"
                  name="gender"
                  id="others"
                  defaultValue="Others"
                  ref={othersRef}
                />
                <label
                  className="form-control form-control-md col mygender"
                  style={{ margin: "0 4px" }}
                  htmlFor="others"
                >
                  Others
                </label>
              </div>
              <div className="row justify-content-center m-3">
                <input
                  className="btn col-sm-6 text-white"
                  style={{ backgroundColor: "#be29ec", fontWeight: "bold" }}
                  type="button"
                  onClick={addRegister}
                  defaultValue="Register"
                />
              </div>
              <div
                className="myhaveacct text-center"
                style={{ color: "#800080" }}
              >
                <a
                  href="http://localhost:3000/login"
                  style={{ color: "#800080", textDecoration: "none" }}
                >
                  Already have an account?
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <footer
              className="row align-items-center"
              style={{ justifyContent: "center"}}
            >
              © www.soundpulse.com. All rights reserved.
            </footer>
          </div>
        </div>
      </div>

      <ToastContainer />

    </>
  );
}

export default Register;






