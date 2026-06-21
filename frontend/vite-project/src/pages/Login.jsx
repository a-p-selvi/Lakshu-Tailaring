import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

const [otp,setOtp] = useState("");
const [enterOtp,setEnterOtp] = useState("");
const [email,setEmail] = useState("");
const navigate = useNavigate();
const [otpSent,setOtpSent] = useState(false);



const generateOTP = () => {


 if(!email){
  alert("Enter Email First");
  return;
 }


 const newOTP = Math.floor(
 100000 + Math.random()*900000
 );


 setOtp(newOTP);



 emailjs.send(

 "service_lnprune",

 "template_8clfq9p",

 {
   otp:newOTP,
   email:email
 },

 "_sGEMTP56kfyRVZbe"

 )

 .then(()=>{

  setOtpSent(true);

  alert("OTP Sent 📩");

 })

 .catch(()=>{

  alert("OTP Sending Failed");

 });


};






const verifyOTP = (e) => {

 e.preventDefault();


 if(enterOtp == otp){

   alert("OTP Verified Successfully 🎉");


   navigate("/");   // Home page


 }

 else{

   alert("Wrong OTP ❌");

 }

};






return (

<>


<style>{`

.login-page {

min-height:85vh;

display:flex;

justify-content:center;

align-items:center;

animation:fadeIn .8s ease;

}



.login-card {

width:380px;

padding:35px;

background:rgba(255,255,255,.12);

backdrop-filter:blur(18px);

border-radius:25px;

box-shadow:
0 20px 50px rgba(0,0,0,.35);

}



.login-title {

text-align:center;

font-size:36px;

font-weight:800;

color:#ec4899;

margin-bottom:25px;

}



.login-input {


width:100%;

padding:14px;

margin-bottom:18px;

border-radius:14px;

border:none;

outline:none;

}



.login-button {


width:100%;

padding:14px;

border:none;

border-radius:25px;

cursor:pointer;

color:white;

font-weight:bold;

background:

linear-gradient(
45deg,
#ec4899,
#a855f7
);


}



.login-button:hover{

transform:scale(1.05);

box-shadow:
0 0 25px #ec4899;

}



@keyframes fadeIn{

from{

opacity:0;

}

to{

opacity:1;

}

}




@media(max-width:500px){

.login-card{

width:90%;

}

}



`}</style>






<div className="login-page">


<div className="login-card">



<h1 className="login-title">
Login
</h1>





<form onSubmit={verifyOTP}>


<input

type="email"

placeholder="Enter Email"

className="login-input"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>





{
!otpSent && (

<button

type="button"

onClick={generateOTP}

className="login-button"

>

Send OTP 📩

</button>

)

}







{
otpSent && (


<>


<input

type="text"

placeholder="Enter OTP"

className="login-input"

value={enterOtp}

onChange={(e)=>setEnterOtp(e.target.value)}

/>





<button

type="submit"

className="login-button"

>

Verify OTP 🔐

</button>



</>


)

}





</form>





</div>


</div>



</>

);

};


export default Login;