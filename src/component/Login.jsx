import React from "react";
import google from "../assets/image/google-icon.png";
import { Link, useNavigate } from "react-router-dom";
import moses1 from "../assets/image/moses 1.jpg";
import moses2 from "../assets/image/moses 2.jpg";
import moses3 from "../assets/image/moses 3.jpg";
import moses4 from "../assets/image/moses 4.jpg";
import master from "../assets/image/master 1.jpg";

const Login = () => {
  let navigate = useNavigate()

  let retrievedUser = JSON.parse(localStorage.getItem('userfulldetails'))
  console.log(retrievedUser)
const Signin = () => {
  let email = document.getElementById("email")
  let password = document.getElementById("password")

  let userFound = false;
  for (let index = 0; index < retrievedUser.length; index++) {
    if (retrievedUser[index].email === email.value && retrievedUser[index].password === password.value) {
      userFound = true;
    }
    
  }


  if (userFound) {
    alert("User Found")
    navigate('/')
  } else {
    alert("User Not Found Or Invalid Credentials")
  }
} 



  return (
      <section className="d-flex">
        <div className="bg-dark col-6 p-5 " style={{ height: "100vh" }}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              fontFamily: "sans-serif",
              marginTop: "50px", color: "white",
              textAlign: "center",
            }}
          >
            Home of Fashion
          </p>
          
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel"  >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={moses1} className="d-block w-75" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={moses2} className="d-block w-50" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={moses3} className="d-block w-75" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={moses4} className="d-block w-75" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={master} className="d-block w-50" alt="..." />
              </div>
            </div>
            
          </div>

          <p
            style={{
              fontSize: "15px",
              fontFamily: "serif",
              marginTop: "10px",
              textAlign: "center",
              color: "white",
            }}
          >
            Get the best and most fitting clothes for yourself at{" "}
            <Link to="/" style={{ color: "gold" }}>
              Hezzy Sphere Hub
            </Link>
          </p>
        </div>

        <div className="col-6">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              fontFamily: "sans-serif",
              marginTop: "110px",
              textAlign: "center",
            }}
          >
            Log In To <br /> Hezzy Sphere Hub
          </p>
          <div className="col-6 mx-auto mt-5" >
            <label htmlFor="user">Email</label>
            <input id="email" className="form-control" type="text" />
            <br />
            <label htmlFor="password">Password</label>
            <input id="password" className="form-control" type="password" />
            <button onClick={Signin} className="bg-dark col-6 text-light mx-auto mt-3 d-block">
              Log In
            </button>
            <br />
            <button className="google-button mt-3 mx-auto d-block">
              <img src={google} className="google-icon" alt="Google icon" />
              <span>Sign in with Google</span>
            </button>
            <p className="mx-5 mt-3">
              Don't have an account?{" "}
              <Link style={{ color: "gold" }} to="/Signup"  target="_blank" >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </section>
  );
};

export default Login;