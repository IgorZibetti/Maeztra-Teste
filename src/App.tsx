import CardBrands from './components/cards/brands'
import CardSeguranca from './components/cards/cardSeguranca'
import Carrosel from './components/carrosel/carrosel'
import Header from './components/header/header'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Product from './components/cards/products'
import { productData, responsive } from '../src/components/cards/data'
import ButtonGroup from './components/carrosel/buttonGruop'
import NewCollect from './components/cards/newcollect'
import NewSletter from './components/newsletter/NewSletter'
import FooterUp from './components/footer/acordeon'
import Footer from './components/footer/footer'
import Popup from './components/popup/popup'

function App() {
  const product = productData.map((item) => (
    // eslint-disable-next-line react/jsx-key
    <Product
      name={item.name}
      url={item.imageUrl}
      price={item.price}
      description={item.description}
      id={0}
      colors={item.colors}
    />
  ))
  return (
    <>
      <div>
        <Header />
        <Carrosel />
        <CardSeguranca />
        <CardBrands />
        <div className="text-[32px] font-bold flex items-center justify-center m-4 mt-16 ">
          As Mais Pedidas
        </div>
        <Carousel
          infinite={true}
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          className="w-100vh"
          showDots={false}
          responsive={responsive}
        >
          {product}
        </Carousel>
      </div>
      <NewCollect />
      <NewSletter />
      <FooterUp />
      <Footer />
      <Popup />
    </>
  )
}

export default App
