import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import { ReactElement, useState } from "react"

function App(): ReactElement  {

  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent: ReactElement = viewCart ? <Cart/> : <ProductList/>

  const content: ReactElement = (
    <>
    <Header viewCart={viewCart} setViewCart={setViewCart} />
    {pageContent}
    <Footer viewCart={viewCart}/>
    </>
  )

  return content
}

export default App
