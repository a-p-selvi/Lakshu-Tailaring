const Home = () => {
  return (
    <>

    <style>{`

      .home {

        min-height:100vh;
        animation:pageEnter .8s ease;

      }



      .hero {

        padding:100px 20px;

        text-align:center;

        background:
        linear-gradient(
        135deg,
        #0f172a,
        #1e293b
        );

        border-radius:0 0 60px 60px;

        position:relative;

        overflow:hidden;

      }




      .hero::before {

        content:"";

        position:absolute;

        width:300px;
        height:300px;

        background:
        linear-gradient(
        45deg,
        #38bdf8,
        #a855f7
        );

        filter:blur(100px);

        top:-100px;
        left:-100px;

        animation:float 5s infinite alternate;

      }





      .hero-title {

        position:relative;

        font-size:50px;

        font-weight:900;

        color:white;

        animation:titleAnimation 1s ease;

      }





      .hero-text {

        position:relative;

        margin-top:20px;

        font-size:20px;

        color:#cbd5e1;

        animation:fade 1.5s ease;

      }





      .hero-btn {

        margin-top:35px;

        padding:15px 40px;

        border:none;

        border-radius:30px;

        color:white;

        font-size:18px;

        font-weight:bold;

        cursor:pointer;

        background:

        linear-gradient(
        45deg,
        #38bdf8,
        #a855f7
        );


        transition:.3s;

        animation:pulse 2s infinite;

      }





      .hero-btn:hover {

        transform:scale(1.1);

        box-shadow:
        0 0 30px #38bdf8;

      }






      .why {

        padding:80px 20px;

      }




      .why-title {

        text-align:center;

        font-size:40px;

        font-weight:800;

        color:white;

        margin-bottom:50px;

      }





      .cards {

        display:grid;

        grid-template-columns:repeat(
        3,1fr);

        gap:30px;

      }





      .card {

        padding:30px;

        border-radius:25px;


        background:

        rgba(255,255,255,.08);


        backdrop-filter:blur(15px);


        border:1px solid rgba(255,255,255,.15);


        box-shadow:
        0 15px 40px rgba(0,0,0,.3);


        transition:.4s;

        animation:cardShow .8s ease;

      }





      .card:hover {

        transform:
        translateY(-15px)
        scale(1.03);


        box-shadow:
        0 20px 50px #38bdf855;

      }





      .card h3 {

        color:#38bdf8;

        font-size:25px;

      }





      .card p {

        color:#cbd5e1;

        margin-top:15px;

      }





      @keyframes pageEnter {

        from{
          opacity:0;
          transform:scale(.97);
        }

        to{
          opacity:1;
          transform:scale(1);
        }

      }





      @keyframes titleAnimation {

        from{
          opacity:0;
          transform:translateY(-50px);
        }

        to{
          opacity:1;
          transform:translateY(0);
        }

      }





      @keyframes fade {

        from{
          opacity:0;
        }

        to{
          opacity:1;
        }

      }





      @keyframes cardShow {

        from{
          opacity:0;
          transform:translateY(50px);
        }

        to{
          opacity:1;
          transform:translateY(0);
        }

      }





      @keyframes float {

        from{
          transform:translateY(0);
        }

        to{
          transform:translateY(50px);
        }

      }





      @keyframes pulse {

        50%{
          box-shadow:0 0 25px #a855f7;
        }

      }





      @media(max-width:768px){

        .cards{

          grid-template-columns:1fr;

        }


        .hero-title{

          font-size:35px;

        }

      }


    `}</style>



    <div className="home">


      <section className="hero">


        <h1 className="hero-title">
          Premium Tailoring Services
        </h1>


        <p className="hero-text">
          Custom stitching for Men and Women with perfect fitting and quality.
        </p>


        <button className="hero-btn">
          Order Now
        </button>


      </section>





      <section className="why">


        <h2 className="why-title">
          Why Choose Lakshu Tailaring
        </h2>



        <div className="cards">


          <div className="card">

            <h3>
              Premium Stitching
            </h3>

            <p>
              High quality custom stitching.
            </p>

          </div>



          <div className="card">

            <h3>
              Free Delivery
            </h3>

            <p>
              Fast doorstep delivery service.
            </p>

          </div>



          <div className="card">

            <h3>
              Perfect Fitting
            </h3>

            <p>
              Professional and accurate measurements.
            </p>

          </div>



        </div>


      </section>


    </div>


    </>
  );
};


export default Home;