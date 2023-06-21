import React, { useRef, useState } from "react";
import { isEmail } from "validator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {
  let formRef = useRef(); 
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  const validateEmailFormat = (email) => {  
    return isEmail(email);
  };

  let changeEmail = (e) => {
    let newUser = { ...user, email: e.target.value };
    setUser(newUser);
    setIsError(false); // Reset the error state on input change
  };

  let changePassword = (e) => {
    let newUser = { ...user, password: e.target.value };
    setUser(newUser);
  };

  let addLogin = async () => {
    try {
      formRef.current.classList.add("was-validated");
      if (!validateEmailFormat(user.email)) {
        setIsError(true);
        return;
      }

  let url = `http://localhost:4000/loginPost`;
  let data = { email: user.email, password: user.password };
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status == 500) {
    let erroMessage = await res.text();
    throw new Error(erroMessage);
  }

  if(user.email=="rakesh123@gmail.com" && user.password=="Rakesh@123"){
    toast.success('Welcome Admin');
  setTimeout(() => {
    window.location.href = "http://localhost:3000/userList";
  }, 2000);
    return;
  }

  localStorage.setItem("loginStatus", "true");
  toast.success('Login Successful');
  setTimeout(() => {
    window.location.href = "http://localhost:3000/home";
  }, 2000);

} catch (err) {
  toast.error(err.message);
  setIsError(true);
} finally {
  setTimeout(() => {
    setIsError(false);
    setIsSuccess(false);
  }, 5000);
}

};

  return (
    <>
      <div
        className="row d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "#efbbff", height: "100vh" }}
      >
        <div className="col-sm-8 col-md-6 col-lg-4">
          <div className="mybrand">
            <i className="fa-solid fa-music" /> | SoundPulse
          </div>
          <div className="mylogin">
            <div
              style={{
                textAlign: "center",
                margin: "8px 0",
                marginBottom: 20,
                fontSize: 19,
              }}
            >
              <h4>Log in to SoundPulse</h4>
            </div>
            <form ref={formRef} className="needs-validation">
              <div>
                <input
                  type="text"
                  className={`inputs form-control mb-3 p-2 ${
                    isError ? "is-invalid" : isSuccess ? "is-valid" : ""
                  }`}
                  id="emailId"
                  placeholder="Email address"
                  value={user.email}
                  minLength={10}
                  onChange={changeEmail}
                  required
                />
                <div className="invalid-feedback">
                  Invalid email address or not registered
                </div>
                
              </div>

              <div>
                <input
                  type="password"
                  className="inputs form-control mb-3 p-2"
                  id="passwordId"
                  placeholder="Password"
                  value={user.password}
                  minLength={8}
                  onChange={changePassword}
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid password.
                </div>
              
              </div>

              <input
                type="button"
                className="btn w-100 text-white btn-lg mb-3 mylogins"
                onClick={addLogin}
                style={{ backgroundColor: "#be29ec", fontWeight: "bold" }}
                defaultValue="Log in"
              />
              <div
                style={{ textAlign: "center", color: "#800080", fontSize: 14 }}
              >
                <a
                  href="http://localhost:3000/register"
                  style={{ color: "#800080", textDecoration: "none" }}
                >
                  <span className="mytext">Register for SoundPulse</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <br />
        <div className="row">
          <footer
            className="row align-items-center"
            style={{ justifyContent: "center" }}
          >
            © www.soundpulse.com. All rights reserved.
          </footer>
        </div>
        {isSuccess && toast.success('Login Successful')}

      </div>
      <ToastContainer />
    </>
  );
}

export default Login;






