const About = () => {
  return (
    <>

    <style>{`

      .about-page {

        min-height:85vh;
        padding:70px 20px;

        animation:aboutFade .8s ease;

      }



      .about-container {

        max-width:1000px;

        margin:auto;

        text-align:center;

      }




      .about-title {

        font-size:48px;

        font-weight:900;

        color:white;

        animation:titleMove 1s ease;

      }





      .about-title span {

        color:#38bdf8;

        text-shadow:
        0 0 20px #38bdf8;

      }






      .about-text {

        margin-top:25px;

        color:#cbd5e1;

        font-size:20px;

        line-height:1.8;

        animation:fadeText 1.5s ease;

      }






      .about-box {

        margin-top:50px;

        display:grid;

        grid-template-columns:repeat(3,1fr);

        gap:25px;

      }





      .about-card {


        padding:30px;


        background:
        rgba(255,255,255,.08);


        backdrop-filter:blur(15px);


        border-radius:25px;


        border:1px solid rgba(255,255,255,.15);


        box-shadow:
        0 15px 40px rgba(0,0,0,.3);


        transition:.4s;


        animation:cardUp .8s ease;


      }






      .about-card:hover {

        transform:
        translateY(-15px)
        scale(1.04);


        box-shadow:
        0 20px 50px #a855f755;

      }





      .about-card h2 {

        color:#a855f7;

        font-size:25px;

      }





      .about-card p {

        margin-top:15px;

        color:#cbd5e1;

      }







      @keyframes aboutFade {

        from{
          opacity:0;
        }

        to{
          opacity:1;
        }

      }





      @keyframes titleMove {

        from{

          opacity:0;
          transform:translateY(-50px);

        }

        to{

          opacity:1;
          transform:translateY(0);

        }

      }





      @keyframes fadeText {

        from{

          opacity:0;

        }

        to{

          opacity:1;

        }

      }






      @keyframes cardUp {

        from{

          opacity:0;
          transform:translateY(60px);

        }

        to{

          opacity:1;
          transform:translateY(0);

        }

      }






      @media(max-width:768px){

        .about-box{

          grid-template-columns:1fr;

        }


        .about-title{

          font-size:35px;

        }

      }


    `}</style>




    <div className="about-page">


      <div className="about-container">


        <h1 className="about-title">

          About <span>Lakshu Tailaring</span>

        </h1>



        <p className="about-text">

          TailorCraft is a premium tailoring service
          providing stylish and perfect fitting outfits
          for Men and Women. We combine traditional
          tailoring skills with modern designs to create
          unique fashion experiences.

        </p>




        <div className="about-box">


          <div className="about-card">

            <h2>
              ✂ Quality Work
            </h2>

            <p>
              We focus on perfect stitching and
              premium fabric finishing.
            </p>

          </div>





          <div className="about-card">

            <h2>
              👗 Modern Style
            </h2>

            <p>
              Latest designs with creative fashion ideas.
            </p>

          </div>





          <div className="about-card">

            <h2>
              ⭐ Customer First
            </h2>

            <p>
              Satisfaction and perfect fitting is our priority.
            </p>

          </div>



        </div>


      </div>


    </div>


    </>
  );
};


export default About;