const Services = () => {

  const services = [
    {
      name: "Blouse Stitching",
      price: "₹300 - ₹500",
    },
    {
      name: "Designer Blouse",
      price: "₹800 - ₹3000",
    },
    {
      name: "Churidar Stitching",
      price: "₹500 - ₹1500",
    },
    {
      name: "Shirt Stitching",
      price: "₹600 - ₹1200",
    },
    {
      name: "Pant Stitching",
      price: "₹700 - ₹1500",
    },
    {
      name: "Coat Stitching",
      price: "₹2000 - ₹5000",
    },
  ];


  return (
    <>

    <style>{`

      .services-page {

        min-height:85vh;

        padding:70px 20px;

        animation:pageShow .8s ease;

      }





      .service-title {

        text-align:center;

        font-size:45px;

        font-weight:900;

        color:white;

        margin-bottom:50px;

        animation:titleDown 1s ease;

      }




      .service-title span {

        color:#38bdf8;

        text-shadow:
        0 0 25px #38bdf8;

      }







      .service-grid {

        max-width:1100px;

        margin:auto;

        display:grid;

        grid-template-columns:
        repeat(3,1fr);

        gap:30px;

      }






      .service-card {


        padding:30px;


        border-radius:25px;


        background:
        rgba(255,255,255,.08);


        backdrop-filter:blur(15px);


        border:1px solid rgba(255,255,255,.15);


        box-shadow:
        0 15px 40px rgba(0,0,0,.35);


        transition:.4s;


        animation:cardSlide .8s ease;


      }






      .service-card:hover {


        transform:
        translateY(-15px)
        scale(1.04);


        box-shadow:
        0 20px 50px #38bdf855;


      }






      .service-card h2 {


        color:#a855f7;

        font-size:26px;


      }






      .service-card p {


        color:#cbd5e1;

        margin-top:15px;

        font-size:17px;


      }







      .order-btn {


        margin-top:25px;


        padding:12px 30px;


        border:none;


        border-radius:30px;


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






      .order-btn:hover {


        transform:scale(1.1);


        box-shadow:
        0 0 25px #a855f7;


      }







      @keyframes pageShow {


        from{

          opacity:0;
          transform:scale(.96);

        }


        to{

          opacity:1;
          transform:scale(1);

        }

      }







      @keyframes titleDown {


        from{

          opacity:0;
          transform:translateY(-50px);

        }


        to{

          opacity:1;
          transform:translateY(0);

        }

      }







      @keyframes cardSlide {


        from{

          opacity:0;
          transform:translateY(50px);

        }


        to{

          opacity:1;
          transform:translateY(0);

        }

      }







      @media(max-width:768px){


        .service-grid{

          grid-template-columns:1fr;

        }


        .service-title{

          font-size:35px;

        }

      }



    `}</style>





    <div className="services-page">



      <h1 className="service-title">

        Our <span>Services</span>

      </h1>




      <div className="service-grid">


        {
          services.map((service,index)=>(


            <div 
              className="service-card"
              key={index}
            >


              <h2>
                ✂ {service.name}
              </h2>


              <p>
                Price Range : {service.price}
              </p>



              <button className="order-btn">

                Order Now

              </button>



            </div>


          ))
        }



      </div>


    </div>


    </>
  );
};


export default Services;