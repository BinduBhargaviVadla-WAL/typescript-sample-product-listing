import { ReactElement } from "react"
import useCart from "../hooks/useCart"

type PropsType = {
    viewCart: boolean
}

const Footer = ({viewCart}: PropsType): ReactElement => {
    const {totalItems, totalPrice} = useCart()

    const year: number = new Date().getFullYear()
    const pageContent: ReactElement = viewCart ? <p>Shopping Cart &copy; {year}</p>
    : <>
    <p>Total Items: {totalItems}</p>
    <p>Total Price: {totalPrice}</p>
    <p>Shopping Cart &copy; {year}</p>
    </>

    const content: ReactElement = (
        <footer className="footer">
            {pageContent}
        </footer>
    )

    return content
}
 export default Footer