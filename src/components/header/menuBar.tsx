import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { CiUser, CiHeart } from 'react-icons/ci'
import { IoMdSearch } from 'react-icons/io'
import { PiDressThin } from 'react-icons/pi'

const categories = [
  'Novidade',
  'Vestidos',
  'Roupas',
  'Sapatos',
  'Lingerie',
  'Acessórios',
  'OUTLET',
]

const MenuBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="hidden md:flex items-center md:w-screen mb-3">
        <div className="bg-white flex justify-around items-center h-[88px] mt-[12px] shadow-lg w-screen ">
          <div>
            <img src="https://i.ibb.co/StZVfCx/logo-maeztra-novo.png" alt="" />
          </div>
          <div className="flex justify-around items-center">
            <div className="relative">
              <input
                type="text"
                className="bg-[#EFEFEF] 2xl:w-[791px] 2xl:h-[48px] min-w-[400px] min-h-[48px] rounded-xl pl-12 pr-20 text-black placeholder:text-black placeholder-opacity-50"
                placeholder="O Que Você Busca?"
              />
              <button className="absolute inset-y-0 right-0 bg-[#FAA500] text-white rounded-l-xl rounded-r-xl px-4 py-2 w-36">
                Buscar
              </button>
            </div>
          </div>

          <div className="flex justify-around items-center gap-5">
            <div className="flex justify-around items-center gap-2">
              <CiUser size={20} />
              <p className="text-[14px]">Minha Conta</p>
            </div>
            <div className="flex justify-around items-center gap-2">
              <CiHeart size={20} />
              <p className="text-[14px]">Minha Conta</p>
            </div>
            <div className="flex justify-around items-center gap-2 border border-[#FAA500] rounded-xl p-3">
              <HiOutlineShoppingBag size={20} />{' '}
              <p className="text-[14px]">Meu Carrinho</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white">
        <div className="flex md:hidden items-center md:w-screen">
          <div className="bg-white flex justify-between items-center h-[88px] mt-[12px] shadow-lg w-screen ">
            <div className="-mr-2 -my-2 md:hidden flex justify-center items-center gap-3">
              <div className="flex justify-around items-center gap-2">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-white rounded-md  ml-4 p-2 inline-flex items-center justify-around text-black  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <img
                    src="https://www.svgrepo.com/show/509382/menu.svg"
                    alt="Menu"
                    height={24}
                    width={24}
                    className="cursor-pointer"
                  />
                </button>
              </div>
              <div className="">
                <img
                  height="auto"
                  width="110"
                  src="https://i.ibb.co/StZVfCx/logo-maeztra-novo.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-around items-center gap-7 mr-6 ">
              <IoMdSearch size={32} className="cursor-pointer" />
              <HiOutlineShoppingBag size={32} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:flex justify-start md:justify-start items-center hidden">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1"></div>
            <nav className="hidden md:flex justify-between items-center space-x-28">
              <div className="absolute ml-20">
                <PiDressThin size={24} />
              </div>
              {categories.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-base font-medium  text-black flex gap-5 hover:font-bold hover:text-[#FAA500]"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <Transition show={isOpen} enter="transition ease-out z-10 duration-200">
          {(ref) => (
            <div className="absolute top-0 z-10  inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div
                ref={ref}
                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-700"
              >
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        height="auto"
                        width="110"
                        src="https://i.ibb.co/StZVfCx/logo-maeztra-novo.png"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      >
                        <span className="sr-only">Close main menu</span>
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/ios/50/close-window--v1.png"
                          alt="close-window--v1"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {categories.map((category, index) => (
                        <a
                          key={index}
                          href="#"
                          className="-m-3 p-3 flex items-center rounded-md border hover:border-b-black "
                        >
                          <span className="ml-3 text-base font-medium text-black">
                            {category}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </>
  )
}

export default MenuBar
