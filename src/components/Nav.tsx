import { ReactElement } from "react"

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({viewCart, setViewCart}: PropsType): ReactElement => {
    const button = viewCart ? (
        <button onClick={() => setViewCart(false)}>View Products</button>
    ): (
        <button onClick={() => setViewCart(true)}>View Cart</button>
    )

    const content: ReactElement = (
        <nav className="nav">
            {button}
        </nav>
    )
    return content
}

export default Nav