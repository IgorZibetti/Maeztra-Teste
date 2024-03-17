import { IoEarthOutline } from 'react-icons/io5'

const CardSeguranca = () => {
  // Array de objetos representando os cartões
  const cardsData = [
    {
      icon: <IoEarthOutline size={32} />,
      title: 'Produtos importados',
      description: 'Produto de Alta Qualidade',
    },
    {
      icon: (
        <img
          src="https://i.imgur.com/QTFwPmU.png"
          width={32}
          height={32}
          alt=""
        />
      ),
      title: 'Estoque no Brasil',
      description: 'Produtos mais perto de você!',
    },
    {
      icon: (
        <img
          src="https://i.imgur.com/5GTW9ii.png"
          width={32}
          height={32}
          alt=""
        />
      ),
      title: 'Trocas Garantidas',
      description: 'Trocas em até 48 horas, vejas as regras',
    },
    {
      icon: (
        <img
          src="https://i.imgur.com/sxrqa57.png"
          width={32}
          height={32}
          alt=""
        />
      ),
      title: 'Ganhe 5% off',
      description: 'Pagando à vista no Cartão',
    },
    {
      icon: (
        <img
          src="https://i.imgur.com/pyNUUin.png"
          width={32}
          height={32}
          alt=""
        />
      ),
      title: 'Frete Grátis',
      description: 'Em compras acima de R$ 499,00',
    },
  ]
  return (
    <>
      <div className="flex items-center justify-center sm:m-3 mt-2 text-[16px] font-bold">
        <h3>Por que comprar na Maeztra?</h3>
      </div>
      <div className="overflow-x-auto">
        <div>
          <div className="flex w-screen justify-start sm:justify-center items-center gap-5 max-lg:m-5">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="min-w-[306px] min-h-[64px] bg-[#EFEFEF] flex justify-around items-center rounded"
              >
                {card.icon}
                <div className="mr-12">
                  <p className="text-[14px]">{card.title}</p>
                  <p className="text-[12px]">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CardSeguranca
