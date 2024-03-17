import { useState, useEffect } from 'react'
import { FaRegEnvelope, FaRegPaperPlane } from 'react-icons/fa'

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    setShowPopup(true)
  }, [])

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <div>
      {showPopup && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white text-left overflow-hidden transform transition-all sm:align-middle w-[340px] h-[350px] sm:w-[851px] sm:h-[510px]">
              <div className="bg-white">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/2 hidden lg:block relative">
                    <img
                      className="object-cover w-full "
                      src="https://raw.githubusercontent.com/IgorZibetti/Maeztra-Teste/main/src/assets/popup.png"
                      alt="Imagem"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 flex flex-col items-center justify-center p-8 sm:text-center">
                    <div className="mb-6">
                      <FaRegEnvelope size={28} />
                    </div>
                    <h3
                      className="text-lg font-medium text-[12px] text-[#464B54]"
                      id="modal-title"
                    >
                      Bem Vindo à MAEZTRA
                    </h3>
                    <p className="text-[16px] sm:text-[20px] font-semibold text-[#464B54]">
                      Receba em Primeira mão
                    </p>
                    <p className="text-bold text-[16px] mb-12 sm:mb-0 sm:text-[20px] font-bold text-[#464B54]">
                      Desconto e ofertas exclusivas
                    </p>
                    <div className="mt-2">
                      <input
                        className="border border-gray-300 p-2 px-[50px] sm:px-24 rounded-md w-full place-content-start"
                        type="email"
                        placeholder="Digite seu e-mail"
                      />
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={handleClosePopup}
                        className="justify-center flex items-center gap-3 rounded-md p-2 px-[105px] sm:px-36  bg-[#FAA500] text-base font-medium text-white "
                      >
                        Enviar
                        <FaRegPaperPlane />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showPopup && (
        <button
          type="button"
          onClick={handleClosePopup}
          className="fixed top-24 right-12  lg:top-32 lg:right-[430px] z-50 text-white"
        >
          Fechar
        </button>
      )}
    </div>
  )
}

export default Popup
