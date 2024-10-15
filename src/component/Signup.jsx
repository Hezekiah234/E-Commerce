import React from 'react'
// import background1 from '../assets/image/cool.jpg'
import eye from '../assets/image/eye.png'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
const navigate = useNavigate()
const  Register =() => {
 let UserDetails = []
 if (localStorage.userfulldetails) {
  let getback = JSON.parse(localStorage.userfulldetails)
  UserDetails=getback
 }
 let firstname = document.getElementById("input1")
 let lastname = document.getElementById("input2")
 let age = document.getElementById("input3")
 let email = document.getElementById("input4")
 let password = document.getElementById("input5")

 if (firstname.value == "" || lastname.value == "" || age.value == "" || email.value == "" || password.value == "") {
  alert("Please Fill In All Fields")
 } else {
   alert("credentials Submitted")
   let user = {
    firstname: firstname.value,
    lastname: lastname.value,
    email:email.value,
    age:age.value,
    password:password.value
   }

   UserDetails.push(user)
   console.log(UserDetails);
   localStorage.setItem('userfulldetails', JSON.stringify(UserDetails))
   navigate('/Login')
 }
}

  return (
    <> 
{/* <img  id="background" src={background1} alt=""/> */}
<div id="center-page">
 <h3 id="h3">Sign Up To</h3><h4 id='h4'>Hezzy Sphere Hub</h4>
<input id="input1" type="text" placeholder="First name" class="form-control"/>
<input id="input2" type="text" placeholder="Last name" class="form-control"/>
<input id="input3" type="text" placeholder="Your age" class="form-control"/>
<input id="input4" type="text" placeholder="Email address" class="form-control"/>
<div class="">
<input id="input5" type="text" placeholder="password" class="form-control"/> <img id="eye" src={eye} alt=""/></div>
<button id="blue-background" onClick={Register}>Sign up</button>
<div id="middle">By signing up, you agree with Hezzy Sphere Hub<Link id='tag' to="/Login" >Terms of Services and Privacy Policy.</Link></div>
<hr class=" border border-2 border-black position-relative top-0"/>
<div id="mean">Already have account? <Link id='tag' to="/Login">Log in here.</Link></div>
</div>

 <div id="lastly">
 <select  name="" id="select">
  <option value="English">English</option>
  <option value="Espanol">Espanol</option>
  <option value="Francais">Francais</option>
  <option value="Deutsch">Deutsch</option>
 </select>
 <div id="last-last">
 <p><Link id="inside-lastly" to='' >Help</Link></p>
 <p><Link id="inside-lastly" to='' >Privacy</Link></p>
  <p><Link id="inside-lastly" to='' >Terms</Link></p>
 </div>
</div>
    </>
  )
}

export default Signup