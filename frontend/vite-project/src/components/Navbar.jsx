import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

  const [open,setOpen] = useState(false);


  return (

    <>


    <style>{`

.navbar {

 position:sticky;
 top:0;
 z-index:50;
height:75px;
 background:rgba(255,255,255,.85);

 backdrop-filter:blur(15px);

 box-shadow:
 0 8px 25px rgba(0,0,0,.15);

 animation:navSlide .7s ease;

}



.nav-container {


 max-width:1200px;

 margin:auto;

 padding:18px 25px;

 display:flex;

 justify-content:space-between;

 align-items:center;


}




.logo {

 font-size:30px;

 font-weight:800;

 color:#ec4899;

 text-decoration:none;

 animation:logoGlow 2s infinite alternate;

}




.menu {

 display:flex;

 gap:30px;

 align-items:center;

}





.menu a {

 text-decoration:none;

 color:#333;

 font-weight:600;

 transition:.3s;

 position:relative;

}





.menu a:hover {

 color:#ec4899;

 transform:translateY(-3px);

}





.menu a::after {


 content:"";

 position:absolute;

 bottom:-8px;

 left:0;

 width:0;

 height:3px;

 background:#ec4899;

 border-radius:20px;

 transition:.3s;

}



.menu a:hover::after {

 width:100%;

}






.login-btn {

 background:

 linear-gradient(
 45deg,
 #ec4899,
 #a855f7
 );


 color:white !important;

 padding:10px 22px;

 border-radius:25px;

}







.hamburger {

 display:none;

 font-size:30px;

 cursor:pointer;

 color:#ec4899;

}





.mobile-menu {

 display:none;

}








@media(max-width:768px){


.hamburger{

 display:block;

}



.menu{


 display:none;

 position:absolute;

 top:75px;

 left:0;

 width:100%;


 background:
 rgba(255,255,255,.95);


 flex-direction:column;

 padding:25px;


 animation:menuDown .4s ease;


}




.menu.active{

 display:flex;

}





.menu a{

 margin:5px 0;

}




.login-btn{

 width:100%;

 text-align:center;

}



}







@keyframes navSlide {

from{

 opacity:0;

 transform:translateY(-30px);

}

to{

 opacity:1;

 transform:translateY(0);

}

}






@keyframes logoGlow {


from{

text-shadow:0 0 5px #ec4899;

}


to{

text-shadow:0 0 20px #a855f7;

}


}






@keyframes menuDown {


from{

opacity:0;

transform:translateY(-20px);

}


to{

opacity:1;

transform:translateY(0);

}


}
@media(max-width:1024px){
  .hamburger{
    display:block;
  }

  .menu{
    display:none;
  }

  .menu.active{
    display:flex;
  }
}



    `}</style>





<nav className="navbar">


<div className="nav-container">



<Link to="/" className="logo">
 LakshuTailaring

</Link>





<div
className={`menu ${open ? "active":""}`}
>



<Link to="/" onClick={()=>setOpen(false)}>
Home
</Link>


<Link to="/about" onClick={()=>setOpen(false)}>
About
</Link>


<Link to="/services" onClick={()=>setOpen(false)}>
Services
</Link>


<Link to="/gallery" onClick={()=>setOpen(false)}>
Gallery
</Link>


<Link to="/contact" onClick={()=>setOpen(false)}>
Contact
</Link>



<Link
to="/login"
className="login-btn"
onClick={()=>setOpen(false)}
>

Login

</Link>



</div>





<div
  className="hamburger"
  onClick={() => setOpen(!open)}
>
  {open ? "✕" : "☰"}
</div>





</div>


</nav>



</>

  );

};


export default Navbar;