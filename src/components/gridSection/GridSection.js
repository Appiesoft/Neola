import React from "react";
import "./GridSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../static/image1.png";
import image2 from "../../static/imag2.png";
import imagegirl from "../../static/imagegirl.png";
import brand from "../../static/brand.png";
import brands from "../../static/brands.png";
const GridSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const images = [
    { url: image2, altText: " SILVER RING" , details:" 18CT GOLD VERMEIL WHITE TOPAZ", rate: " $58.00" },
    { url: image1, altText: "GOLD  RING" , details:" 20CT GOLD VERMEIL WHITE TOPAZ", rate: " $428.00" },
    { url: image2, altText: " SILVER RING" , details:" 24CT GOLD VERMEIL WHITE TOPAZ", rate: " $538.00" },
    { url: image1, altText: "GOLD SILVER RING" , details:" 12CT GOLD VERMEIL WHITE TOPAZ", rate: " $38.00" },
    { url: image2, altText: "GOLD SILVER RING" , details:" 12CT GOLD VERMEIL WHITE TOPAZ", rate: " $38.00" },
    { url: image1, altText: "GOLD SILVER RING" , details:" 12CT GOLD VERMEIL WHITE TOPAZ", rate: " $38.00" },
  ];
  return (
    <>
      <section>
        <div>
          <div class="flex flex-col lg:flex-row items-center w-full ">
            <div class="bg-no-repeat bg-cover bg-center lg:bg-left flex bg-opacity-50 flex-col w-full h-96 brightness-110  bgimggs ">
              <div class="flex flex-col items-center justify-center p-2 text-black-300 bgheight">
                <div class="flex items-center justify-center  ">
                  <div class="container my-5 py-5">
                    <div class="row">
                      <div class="col">
                        <div class="flex flex-col items-center justify-center p-5 text-black-300 bg-white ">
                          <div class="font-bold text-lg m-2 mt-[30%] tex-dark">
                            CRAFTMAN SHIP
                          </div>
                          <div class=" m-2 text-sm text-stone-500 text-center ">
                            There is no one definition of beauty. Beauty
                            standards vary from culture to culture and change
                            over time. In Western cultures, beauty standards
                            have traditionally been based on ideals of youth and
                            femininity.
                          </div>
                          <div class=" m-2 text-sm text-stone-500 text-center">
                            There is no one definition of beauty. Beauty
                            standards vary from culture to culture and change
                            over time. In Western cultures, beauty standards
                            have traditionally been based on ideals of youth and
                            femininity.
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="flex flex-col items-center justify-center p-5 text-black-300 bg-white">
                          <div class="font-bold text-lg m-2 mt-[30%]">
                            OUR BRAND STORY
                          </div>
                          <div class=" m-2 text-sm text-stone-500 text-center">
                            There is no one definition of beauty. Beauty
                            standards vary from culture to culture and change
                            over time. In Western cultures, beauty standards
                            have traditionally been based on ideals of youth and
                            femininity.
                          </div>
                          <div class=" m-2 text-sm text-stone-500 text-center">
                            There is no one definition of beauty. Beauty
                            standards vary from culture to culture and change
                            over time. In Western cultures, beauty standards
                            have traditionally been based on ideals of youth and
                            femininity.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Carousel
          className="pt-3 pt-md-0"
          infinite={true}
          responsive={responsive}
        >
          {images.map((importImg, index) => {
            return (
              <div className="row py-5  mx-auto">
                <div class="col-12 mx-auto d-flex justify-content-evenly flex-wrap items-center">
                  <img
                    key={index}
                    src={importImg.url}
                    className="img_bg_hover  object-cover object-center"
                    alt={`Image ${index}`}
                  />
                </div>
                <div className="col-12 mx-auto text-black  mb-md-0 mb-lg-0 bottom_text  text-center ">
                  {importImg.altText}
                </div>
                <h2 class="text-xs title-font text-gray-500 tracking-widest text-center m-0">
                {importImg.details}
              </h2>
              <span class="title-font text-sm text-2xl text-gray-900  text-center">
              {importImg.rate}
              </span>
              </div>
            );
          })}
        </Carousel>
      </section>
      <section class="text-gray-600 body-font bg-zinc-100">
  <div class="container mx-auto flex  py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="fontstyle">
       JWELLERY WITHOUT COMPROMISE
      </h1>
      <p class="mb-8 leading-relaxed text-start">'My Mission try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <span class="text-stone-500">
           Andreu hauer, Founder & Owner
              </span>
      <div class="flex justify-center mt-3">
        <button class="inline-flex text-black bg-zinc-200 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600  text-lg">More</button>
      
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={imagegirl} />
    </div>
  </div>
</section>
<section>
    <img src={brand}   className='mx-auto'  alt=" "/>
</section>
<section>
    <img src={brands}  className='mx-auto' alt=" "/>
</section>
    </>
  );
};

export default GridSection;
