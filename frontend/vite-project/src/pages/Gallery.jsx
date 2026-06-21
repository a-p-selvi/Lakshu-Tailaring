const Gallery = () => {

const images = [
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
 "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b",
   "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=80",
];


  return (

    <>

    <style>{`

      .gallery-page {

        min-height:85vh;

        padding:70px 20px;

        animation:galleryShow .8s ease;

      }





      .gallery-title {

        text-align:center;

        font-size:48px;

        font-weight:900;

        color:white;

        margin-bottom:50px;

        animation:titleMove 1s ease;

      }





      .gallery-title span {

        color:#38bdf8;

        text-shadow:
        0 0 25px #38bdf8;

      }







      .gallery-grid {


        max-width:1100px;

        margin:auto;

        display:grid;

        grid-template-columns:
        repeat(3,1fr);

        gap:25px;


      }








      .gallery-card {


        height:300px;


        overflow:hidden;


        border-radius:25px;


        background:
        rgba(255,255,255,.08);


        backdrop-filter:blur(15px);


        border:1px solid rgba(255,255,255,.15);


        box-shadow:
        0 15px 40px rgba(0,0,0,.4);


        animation:cardShow .8s ease;


        transition:.4s;


      }






      .gallery-card:hover {


        transform:
        translateY(-15px)
        scale(1.03);


        box-shadow:
        0 20px 50px #a855f755;


      }







      .gallery-card img {


        width:100%;

        height:100%;


        object-fit:cover;


        transition:.6s;


      }







      .gallery-card:hover img {


        transform:scale(1.15);


      }







      @keyframes galleryShow {


        from{

          opacity:0;

          transform:scale(.95);

        }


        to{

          opacity:1;

          transform:scale(1);

        }


      }







      @keyframes titleMove {


        from{

          opacity:0;

          transform:translateY(-40px);

        }


        to{

          opacity:1;

          transform:translateY(0);

        }


      }







      @keyframes cardShow {


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


        .gallery-grid{

          grid-template-columns:1fr;

        }


        .gallery-title{

          font-size:35px;

        }


      }



    `}</style>





    <div className="gallery-page">



      <h1 className="gallery-title">

        Our <span>Gallery</span>

      </h1>





      <div className="gallery-grid">


        {
          images.map((image,index)=>(


          <div 
            className="gallery-card"
            key={index}
          >


            <img 
              src={image}
              alt="gallery"
            />


          </div>


          ))
        }



      </div>


    </div>



    </>

  );
};


export default Gallery;