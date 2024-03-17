const CardBrands = () => {
  // Array de objetos representando os cartões
  const cardsData = [
    { imageUrl: 'https://i.imgur.com/Qoc0YF7.png' },
    { imageUrl: 'https://i.imgur.com/cHLLxR4.png' },
    { imageUrl: 'https://i.imgur.com/JOTNQgl.png' },
    { imageUrl: 'https://i.imgur.com/PN0nOAY.png' },
    { imageUrl: 'https://i.imgur.com/qZ1WvYA.png' },
  ]

  return (
    <>
      <div className="flex items-center justify-center sm:m-3 mt-2 text-[32px] font-bold">
        <h3>Marcas Parceiras</h3>
      </div>
      <div className="overflow-x-auto">
        <div>
          <div className="flex w-screen justify-start sm:justify-center items-center gap-5 max-lg:m-5">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="min-w-[296px] h-[64px] bg-[#EFEFEF] flex justify-center items-center rounded"
              >
                <img
                  src={card.imageUrl}
                  alt=""
                  className="min-w-[306px] h-[64px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CardBrands
