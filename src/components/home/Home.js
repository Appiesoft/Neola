import React from "react";
import hero from "../../static/hero.png";
import "./Home.css";
import GridSection from "../gridSection/GridSection";
const Home = () => {
  return (
    <>

    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container py-2 mx-auto">
          <div class="lg:w-4/2 mx-auto flex flex-wrap ">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center "
              src={hero}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                PIETRA GOLD COCKTAIL RING CHRYSOPRASE{" "}
              </h1>
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                18CT GOLD VERMEIL WHITE TOPAZ
              </h2>
              <span class="title-font font-medium text-2xl text-gray-900 ">
                $58.00
              </span>
              <hr />

              <div class="row">
                <div class="col">
                  <div class="row">
                    <div class="col-4 d-flex">
                      <span class="mr-5">FINISH :</span>{" "}
                    </div>
                    <div class="col-4">
                      <button class="border-2 border-gray-300 bg-yellow-200 rounded-full w-6 h-6 focus:outline-none "></button>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <h2 class="text-xs title-font text-gray-500 tracking-widest ms-5 text-end">
                    18CT GOLD VERMEIL WHITE TOPAZ
                  </h2>
                </div>
              </div>

              <div class="row my-2">
                <div class="col">
                  <div class="row">
                    <div class="col-4 d-flex">
                      <span class="mr-5">STONE :</span>
                    </div>
                    <div class="col-8">
                      <button class="border-2 border-gray-300 bg-blue-200 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button class="border-2 border-gray-300 bg-yellow-200 ml-3 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button class="border-2 border-red-300 bg-red-200 ml-3 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <h2 class="text-xs title-font text-gray-500 tracking-widest ms-5 text-end">
                    Kyantia
                  </h2>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="row">
                    <div class="col-4 d-flex">
                      <span>OPTIONS :</span>{" "}
                    </div>
                    <div class="col-8">
                      <button class="border-2 border-gray-300  rounded-full w-6 h-6 focus:outline-none text-xs">
                        I
                      </button>
                      <button class="border-2 border-gray-300  ml-3 rounded-full w-6 h-6 focus:outline-none text-xs">
                        K
                      </button>
                      <button class="border-2 border-gray-300 0 ml-3 rounded-full w-6 h-6 focus:outline-none text-xs">
                        M
                      </button>
                      <button class="border-2 border-gray-300 0 ml-3 rounded-full w-6 h-6 focus:outline-none text-xs">
                        P
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <h2 class="text-xs title-font text-gray-500 tracking-widest ms-5 text-end">
                    SIZE GUIDE
                  </h2>
                </div>
              </div>
              <div className="text-center py-2 bg-zinc-200 my-3 rounded">
                ADD TO BAG
              </div>
              <div className="text-center py-2 bg-zinc-200 my-3 rounded">
                ADD TO WHISHLIST
              </div>
              <div class="text-sm title-font text-black-500 tracking-widest mt-3 bordessr">
                ABOUT THIS ITEM
              </div>

              <div class="text-sm title-font text-black-500 tracking-widest mt-3 borderBox">
                <div class="row justify-content-between py-2">
                  <div class="col-4 ">
                    <span>Description :</span>{" "}
                  </div>
                  <div class="col-4 text-end">
                    <span>
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div class="text-sm title-font text-black-500 tracking-widest mt-3 borderBox">
                <div class="row justify-content-between py-2">
                  <div class="col-6 ">
                    <span>Handmade By Skilled Jewellers</span>{" "}
                  </div>
                  <div class="col-4 text-end">
                    <span>
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div class="text-sm title-font text-black-500 tracking-widest mt-3 borderBox">
                <div class="row justify-content-between py-2">
                  <div class="col-6 ">
                    <span>Sustainable & Ethical</span>{" "}
                  </div>
                  <div class="col-4 text-end">
                    <span>
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div class="text-sm title-font text-black-500 tracking-widest mt-3 borderBox">
                <div class="row justify-content-between py-2">
                  <div class="col-6 ">
                    <span>Free UK Deleivers</span>{" "}
                  </div>
                  <div class="col-4 text-end">
                    <span>
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-100 mt-5 pt-3">
        <div class="flex justify-center py-5">
          <div class="flex flex-col lg:flex-row items-center max-w-7xl w-[90%] m-4">
            <div class="bg-no-repeat bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[35%] h-96 brightness-110 hover:brightness-90 mt-3">
              <div class="absolute inset-0 bg-white-900 bg-opacity-50">
                <div class="flex flex-col items-start justify-center p-5 text-black-300 bg-white">
                  <div class="font-bold text-lg m-2 mt-[30%]">
                    RESPONSIBLE JWELLERY
                  </div>
                  <div class=" m-2 text-sm text-stone-500">
                    There is no one definition of beauty. Beauty standards vary
                    from culture to culture and change over time. In Western
                    cultures, beauty standards have traditionally been based on
                    ideals of youth and femininity.
                  </div>
                  <div class=" m-2 text-sm text-stone-500">
                    There is no one definition of beauty. Beauty standards vary
                    from culture to culture and change over time. In Western
                    cultures, beauty standards have traditionally been based on
                    ideals of youth and femininity.
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-no-repeat bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-96 brightness-110 hover:brightness-90  bgimg"></div>
            <div class="bg-no-repeat bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[35%] h-96 brightness-110 hover:brightness-90 mt-3">
              <div class="absolute inset-0 bg-white-900  bg-opacity-50 ">
                <div
                  class="flex flex-col items-start
             justify-center p-5 text-black-300 bg-white"
                >
                  <div class="font-bold text-lg m-2 mt-[30%]">
                    PREMIUM PRECIUOS METALS
                  </div>
                  <div class=" m-2 text-sm  text-stone-500">
                    There is something magical about the universe. It is so vast
                    and mysterious, and it is always expanding. Every day, we
                    are learning more about it and discovering new things There
                    is something magical about the universe. It is so vast and
                    mysterious, and it is always expanding. Every day, we are
                    learning more about it and discovering new thing and
                    mysterious, and it is always expanding. Every day, we are
                    learning more about it and discovering new thin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </section>
     
    </div>
    <GridSection/>    
    </>
    
  );
};

export default Home;
