import { Carousel } from 'react-responsive-carousel'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const Carrosel = () => {
  return (
    <>
      <div className="hidden md:flex">
        <div className="carousel-container relative">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            autoPlay
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: 'absolute',
                    zIndex: 2,
                    top: '50%',
                    left: '50px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                  }}
                >
                  <IoIosArrowBack size={30} />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: 'absolute',
                    zIndex: 2,
                    top: '50%',
                    right: '50px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                  }}
                >
                  <IoIosArrowForward size={30} />
                </button>
              )
            }
          >
            <div className="image-container relative">
              <img alt="" src="https://i.imgur.com/ftECh3G.png" />
              <div className="overlay-text absolute top-1/2 left-0 transform flex flex-col ml-60 justify-start items-start -translate-y-1/2 text-white text-lg">
                <h3 className="font-bold text-[40px] mb-12 ">
                  Promoções de Outono
                </h3>
                <p className="mb-4 font-normal text-[20px] w-[467px] text-justify leading-[24px] ">
                  Confiras os melhores looks para combinar com você nesse Outono
                </p>
                <button className="p-2 m-2 rounded-lg bg-[#FAA500] mb-4  w-[128px] h-[48px] font-semibold ">
                  Conferir
                </button>
              </div>
            </div>
            <div className="image-container relative">
              <img alt="" src="https://i.imgur.com/ftECh3G.png" />
              <div className="overlay-text absolute top-1/2 left-0 transform flex flex-col ml-60 justify-start items-start -translate-y-1/2 text-white text-lg">
                <h3 className="font-bold text-[40px] mb-12 ">
                  Promoções de Outono
                </h3>
                <p className="mb-4 font-normal  text-[20px] w-[467px] text-justify leading-[24px]">
                  Confiras os melhores looks para combinar com você nesse Outono
                </p>
                <button className="p-2 m-2 rounded-lg bg-[#FAA500] mb-4 w-[128px] h-[48px] font-semibold">
                  Conferir
                </button>
              </div>
            </div>
            <div className="image-container relative">
              <img alt="" src="https://i.imgur.com/ftECh3G.png" />
              <div className="overlay-text absolute top-1/2 left-0 transform flex flex-col ml-60 justify-start items-start -translate-y-1/2 text-white text-lg">
                <h3 className="font-bold text-[40px] mb-12 ">
                  Promoções de Outono
                </h3>
                <p className="mb-4 font-normal text-[20px] w-[467px] text-justify leading-[24px]">
                  Confiras os melhores looks para combinar com você nesse Outono
                </p>
                <button className="p-2 m-2 rounded-lg bg-[#FAA500] mb-4  w-[128px] h-[48px] font-semibold ">
                  Conferir
                </button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="carousel-container relative">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            autoPlay
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: 'absolute',
                    zIndex: 2,
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                  }}
                >
                  <IoIosArrowBack size={30} />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: 'absolute',
                    zIndex: 2,
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                  }}
                >
                  <IoIosArrowForward size={30} />
                </button>
              )
            }
          >
            <div className="image-container relative">
              <img
                alt=""
                src="https://raw.githubusercontent.com/IgorZibetti/Maeztra-Teste/main/src/assets/carrosel-mob.jpg"
              />
              <div className="overlay-text absolute top-1/2 left-0 transform flex flex-col justify-start items-start -translate-y-1/2 text-white text-lg">
                <h3 className="font-bold text-[30px] mb-4 w-[240px] text-start m-12 ">
                  Promoções <br></br> de Outono
                </h3>
                <p className="mb-4 text-bold w-[240px] text-[14px] ml-12 text-start">
                  Confiras os melhores looks para combinar com você nesse Outono
                </p>
                <button className=" w-[76px] p-1 m-1 rounded-md ml-12 bg-[#FAA500] mb-4 text-[14px]   ">
                  Conferir
                </button>
              </div>
            </div>
            <div className="image-container relative">
              <img
                alt=""
                src="https://raw.githubusercontent.com/IgorZibetti/Maeztra-Teste/main/src/assets/carrosel-mob.jpg"
              />
              <div className="overlay-text absolute top-1/2 left-0 transform flex flex-col justify-start items-start -translate-y-1/2 text-white text-lg">
                <h3 className="font-bold text-[30px] mb-4 w-[240px] text-start m-12 ">
                  Promoções <br></br>de Outono
                </h3>
                <p className="mb-4 text-bold w-[240px] text-[14px] ml-12 text-start">
                  Confiras os melhores looks para combinar com você nesse Outono
                </p>
                <button className=" w-[76px] p-1 m-1 rounded-md ml-12 bg-[#FAA500] mb-4 text-[14px] ">
                  Conferir
                </button>
              </div>
            </div>
            <div className="image-container relative">
              <img
                alt=""
                src="https://raw.githubusercontent.com/IgorZibetti/Maeztra-Teste/main/src/assets/carrosel-mob.jpg"
              />
              <div className="overlay-text absolute top-1/2 left-0 transform flex flex-col  justify-start items-start -translate-y-1/2 text-white text-lg">
                <h3 className="font-bold text-[30px] mb-4 w-[240px] text-start m-12">
                  Promoções <br></br> de Outono
                </h3>
                <p className="mb-4 text-bold w-[240px] text-[14px] ml-12 text-start">
                  Confiras os melhores looks para combinar com você nesse Outono
                </p>
                <button className=" w-[76px] p-1 m-1 rounded-md ml-12 bg-[#FAA500] mb-4 text-[14px] ">
                  Conferir
                </button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Carrosel
