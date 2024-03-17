import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
})

type FormData = z.infer<typeof schema>

const NewSletter: React.FC<{ onSubmit: (data: FormData) => void }> = ({
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  return (
    <div className="lg:flex gap-5 justify-center items-center mt-20 ">
      <h3 className="text-[24px] mb-3 text-center font-bold ">
        Receba Nossa Newsletter
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-around items-center">
          <div className="lg:relative flex gap-1">
            <input
              type="text"
              {...register('email')}
              className="border border-black lg:w-[791px] lg:h-[48px] min-w-[160px] min-h-[36px] rounded pl-5 pr-5 lg:pl-12 lg:pr-20 text-black placeholder:text-black placeholder-opacity-50"
              placeholder="Digite seu e-mail"
            />
            {errors.email && (
              <p className="text-red-500">Digite um e-mail válido</p>
            )}
            <button
              type="submit"
              className="lg:absolute inset-y-0 right-0 bg-[#FAA500] text-white rounded px-4 py-2 w-[76px] lg:w-36"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

const Formulario = () => {
  const onSubmit = (data: FormData) => {
    if (!data.email) {
      alert('Digite um e-mail válido')
    } else {
      alert('Esse formulário é de mentira rs')
    }
  }
  return <NewSletter onSubmit={onSubmit} />
}

export default Formulario
