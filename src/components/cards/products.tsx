interface ProductProps {
  url: string
  id: number
  price: string
  name: string
  description: string
  colors: string[]
}

export default function Product(props: ProductProps) {
  return (
    <>
      <div className="card flex flex-col justify-around items-start m-6">
        <img
          className="w-full h-[410px] object-cover z-0"
          src={props.url}
          alt="product image"
        />
        <div className="flex gap-2 mt-2 ml-4 cursor-pointer ">
          {props.colors.map((color, index) => (
            <div
              key={index}
              className="w-7 h-7 rounded-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div>
          <p className="price text-[22px] ml-4 w-[254px] font-semibold ">
            {props.price}
          </p>
          <h2 className="text-[18px] font-medium ml-4 w-[254px]">
            {props.name}
          </h2>
          <p className="text-[12px] ml-4 w-[254px] text-zinc-400">
            {props.description}
          </p>
          <p>
            <button className="text-center flex justify-center items-center text-white rounded p-2 m-2 bg-[#FAA500] w-[254px] h-[35px]">
              Adicionar
            </button>
          </p>
        </div>
      </div>
    </>
  )
}
