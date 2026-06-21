import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {

  return (

    <>

    <style>{`

.footer {

  margin-top:40px;

  background:
  linear-gradient(
    135deg,
    #0f172a,
    #1e293b
  );

  color:white;

  animation:footerShow .8s ease;

}



.footer-container {

  max-width:1200px;

  margin:auto;

  padding:50px 30px;


  display:grid;

  grid-template-columns:repeat(3,1fr);

  gap:50px;

}





.footer-box {

 animation:boxUp .8s ease;

}





.footer h2 {

 color:#38bdf8;

 text-shadow:
 0 0 15px #38bdf8;

}





.footer p,
.footer li {

 color:#cbd5e1;

 line-height:1.8;

}





.footer ul {

 list-style:none;

 padding:0;

}





.footer li {

 margin:8px 0;

 transition:.3s;

}





.footer a {

 text-decoration:none;

 color:#cbd5e1;

}





.footer a:hover {

 color:#a855f7;

 transform:translateX(8px);

}





.social-icons {

 display:flex;

 gap:20px;

 font-size:30px;

}





.social-icons svg {

 cursor:pointer;

 transition:.3s;

}





.social-icons svg:hover {


 transform:

 translateY(-8px)

 scale(1.2);


 filter:

 drop-shadow(
 0 0 15px #38bdf8
 );


}





.footer-bottom {


 text-align:center;


 padding:18px;


 border-top:

 1px solid rgba(255,255,255,.2);


 color:#94a3b8;


}





@keyframes footerShow {


from{

 opacity:0;

 transform:translateY(40px);

}


to{

 opacity:1;

 transform:translateY(0);

}


}







@keyframes boxUp {


from{

 opacity:0;

 transform:translateY(30px);

}


to{

 opacity:1;

 transform:translateY(0);

}


}






@media(max-width:768px){


.footer-container{

 grid-template-columns:1fr;

 text-align:center;

}



.social-icons{

 justify-content:center;

}



}



    `}</style>





    <footer className="footer">


      <div className="footer-container">



        {/* Brand */}


        <div className="footer-box">


          <h2>
            Lakshu Tailaring
          </h2>


          <p>

            Premium tailoring services for men and women.
            Custom stitching with quality and elegance.

          </p>


        </div>






        {/* Links */}


        <div className="footer-box">


          <h2>
            Quick Links
          </h2>



          <ul>


            <li>
              <Link to="/">
                Home
              </Link>
            </li>



            <li>
              <Link to="/about">
                About
              </Link>
            </li>



            <li>
              <Link to="/services">
                Services
              </Link>
            </li>



            <li>
              <Link to="/gallery">
                Gallery
              </Link>
            </li>



            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>



          </ul>


        </div>








        {/* Social */}


        <div className="footer-box">


          <h2>
            Follow Us
          </h2>


<div className="social-icons">


<a 
 href="https://www.instagram.com/lakshu_tailoring?igsh=d2V0OGt4ZGZvZ2ty"
 target="_blank"
 rel="noreferrer"
>

<FaInstagram />

</a>



<a 
 href="https://wa.me/919345218136"
 target="_blank"
 rel="noreferrer"
>

<FaWhatsapp />

</a>



</div>





          <p>
            Email : lakshutailaring@gmail.com
          </p>



          <p>
            Phone : +91 9345218136
          </p>




        </div>





      </div>





      <div className="footer-bottom">


        © 2026 Lakshu Tailaring. All Rights Reserved.


      </div>





    </footer>


    </>

  );

};


export default Footer;