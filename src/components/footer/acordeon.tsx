import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

const FooterUp = () => {
  const [accordion1, setAccordion1] = useState(false)
  const [accordion2, setAccordion2] = useState(false)
  const [accordion3, setAccordion3] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div className="text-black py-8 mt-24">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-around gap-3">
          {/* Informações */}
          <div className="footer-column ">
            <button
              className={
                isMobile ? 'footer-heading md:hidden' : 'footer-heading'
              }
              onClick={() => setAccordion1(!accordion1)}
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-[16px] mb-2">Informações</p>
                <div className=" lg:hidden right-0 absolute mb-3 mr-3">
                  {accordion1 ? <IoMdRemove /> : <IoMdAdd />}
                </div>
              </div>
            </button>
            {!isMobile && (
              <ul className="footer-list ">
                <li className="mt-7 mb-7 cursor-pointer">Quem Somos</li>

                <li className="mb-7 cursor-pointer">Prazo de Envio</li>

                <li className="mb-7 cursor-pointer">Trocas e Devoluções</li>

                <li className="mb-7 cursor-pointer">Promoções e Cupons</li>
              </ul>
            )}

            {accordion1 && isMobile && (
              <ul className="footer-list  border border-b-black">
                <li className="mb-7 cursor-pointer">Quem Somos</li>

                <li className="mb-7 cursor-pointer">Prazo de Envio</li>

                <li className="mb-7 cursor-pointer">Trocas e Devoluções</li>

                <li className="mb-7 cursor-pointer">Promoções e Cupons</li>
              </ul>
            )}
          </div>

          {/* Minha Conta */}

          <div className="footer-column">
            <button
              className={
                isMobile ? 'footer-heading md:hidden' : 'footer-heading'
              }
              onClick={() => setAccordion2(!accordion2)}
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-[16px] mb-2"> Minha Conta</p>
                <div className=" lg:hidden right-0 absolute mb-3 mr-3">
                  {accordion2 ? <IoMdRemove /> : <IoMdAdd />}
                </div>
              </div>
            </button>

            {!isMobile && (
              <ul className="footer-list">
                <li className="mt-7 mb-7  cursor-pointer">Minha Conta</li>

                <li className="mb-7 cursor-pointer">Meus Pedidos</li>

                <li className="mb-7 cursor-pointer">Cadastre-se</li>
              </ul>
            )}

            {accordion2 && isMobile && (
              <ul className="footer-list border border-b-black">
                <li className="mb-7 cursor-pointer">Minha Conta</li>

                <li className="mb-7 cursor-pointer">Meus Pedidos</li>

                <li className="mb-7 cursor-pointer">Cadastre-se</li>
              </ul>
            )}
          </div>

          {/* Onde nos Encontrar */}

          <div className="footer-column">
            <button
              className={
                isMobile ? 'footer-heading md:hidden' : 'footer-heading'
              }
              onClick={() => setAccordion3(!accordion3)}
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-[16px] mb-2">Onde nos Encontrar</p>
                <div className=" lg:hidden right-0 absolute mb-3 mr-3">
                  {accordion3 ? <IoMdRemove /> : <IoMdAdd />}
                </div>
              </div>
            </button>

            {!isMobile && (
              <ul className="footer-list">
                <li className="mt-7 mb-7  cursor-pointer">Lojas</li>

                <li className="mb-7 cursor-pointer">Endereço</li>
              </ul>
            )}

            {accordion3 && isMobile && (
              <ul className="footer-list  border border-b-black">
                <li className="mb-7 cursor-pointer">Lojas</li>

                <li className="mb-7 cursor-pointer">Endereço</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterUp
