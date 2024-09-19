import useCart from "../hooks/useCart"
import useProducts from "../hooks/useProducts"
import { ReactElement } from "react"
import Product from "./Product"
import { ProductType } from "../context/ProductsProvider"

const ProductList = (): React.FC => {
    const { dispatch, REDUCER_ACTIONS, cart} = useCart()
    const {products} = useProducts()

    let pageContent: ReactElement | ReactElement[] = <p>Loading ...</p>

    if(products?.length) {
        pageContent = products.map((product: ProductType) => {
            const inCart: boolean = cart.some(item => item.sku === product.sku)
            return (
                <Product 
                    key={product.sku}
                    product={product}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart={inCart}
                />    
            )
        })
    }
    
    return (
        <main className="main main--products">
            {pageContent}
        </main>
    )
}

export default ProductList