import emailjs from "@emailjs/browser";
import { useRef } from "react";


const Contact = () => {


const form = useRef();



const sendEmail = (e)=>{


 e.preventDefault();



 emailjs.sendForm(


 "service_11ahmzf",


 "template_bmflljg",


 form.current,


 "_sGEMTP56kfyRVZbe"


 )

 .then(()=>{


 alert("Message Sent Successfully");


 form.current.reset();


 })

 .catch(()=>{


 alert("Failed to send");


 });


};





return (

<>


<style>{`

.contact-page {

min-height:85vh;
padding:70px 20px;
animation:contactShow .8s ease;

}




.contact-title {

text-align:center;
font-size:48px;
font-weight:900;
color:white;
margin-bottom:50px;

}




.contact-title span {

color:#38bdf8;

text-shadow:
0 0 25px #38bdf8;

}





.contact-container {

max-width:1000px;
margin:auto;

display:grid;

grid-template-columns:1fr 1fr;

gap:30px;

}




.contact-card {


padding:35px;

border-radius:25px;


background:
rgba(255,255,255,.08);


backdrop-filter:blur(15px);


border:1px solid rgba(255,255,255,.15);


box-shadow:
0 15px 40px rgba(0,0,0,.35);


}



.contact-card:hover {

transform:translateY(-10px);

box-shadow:
0 20px 50px #38bdf855;

}




.contact-card h2 {

color:#a855f7;

font-size:28px;

}





.contact-card p {

color:#cbd5e1;

margin-top:15px;

}





.contact-form input,
.contact-form textarea {


width:100%;

padding:14px;

margin-top:15px;

border:none;

outline:none;

border-radius:12px;

background:white;

}





.contact-form textarea {

height:120px;

resize:none;

}




.send-btn {


margin-top:20px;

width:100%;

padding:14px;

border:none;

border-radius:25px;


color:white;

font-weight:bold;


cursor:pointer;


background:

linear-gradient(
45deg,
#38bdf8,
#a855f7
);


transition:.3s;


}



.send-btn:hover {


transform:scale(1.05);

box-shadow:
0 0 30px #a855f7;


}




@keyframes contactShow {


from{

opacity:0;

transform:scale(.96);

}


to{

opacity:1;

transform:scale(1);

}

}





@media(max-width:768px){


.contact-container{

grid-template-columns:1fr;

}


.contact-title{

font-size:35px;

}


}



`}</style>





<div className="contact-page">



<h1 className="contact-title">

Contact <span>Tailaring</span>

</h1>





<div className="contact-container">





<div className="contact-card">


<h2>

Get In Touch

</h2>



<p>

Have a custom design idea?
Contact us and we will create
the perfect outfit for you.

</p>



<p>

📍 Location: Lakshu Tailoring,lakshumipuram,surandai

</p>



<p>

📞 Phone: +91 9345218136

</p>



<p>

✉ Email: lakshutailoring@gmail.com

</p>


</div>









<div className="contact-card">



<h2>

Send Message

</h2>





<form

ref={form}

onSubmit={sendEmail}

className="contact-form"

>



<input

name="user_name"

placeholder="Your Name"

/>





<input

type="email"

name="user_email"

placeholder="Email"

/>





<textarea

name="message"

placeholder="Message"

/>






<button

type="submit"

className="send-btn"

>

Send Message

</button>





</form>




</div>





</div>





</div>





</>

);

};


export default Contact;