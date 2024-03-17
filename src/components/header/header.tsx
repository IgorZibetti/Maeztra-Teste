import MenuBar from './menuBar'

const Header = () => {
  return (
    <>
      <div className="bg-[#353535] text-white flex justify-center items-center w-full h-[28px]">
        <div className="flex justify-center items-center w-full">
          <p className="w-full text-[10px] flex items-center justify-center md:text-base">
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </p>
        </div>
      </div>

      <MenuBar />
    </>
  )
}

export default Header
