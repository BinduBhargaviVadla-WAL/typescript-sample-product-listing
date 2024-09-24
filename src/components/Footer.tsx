import { ReactElement } from "react";
import useCart from "../hooks/useCart";

// Class to handle footer-related logic
class FooterLogic {
    viewCart: boolean;
    totalItems: number;
    totalPrice: string;

    constructor(viewCart: boolean, totalItems: number, totalPrice: string) {
        this.viewCart = viewCart;
        this.totalItems = totalItems;
        this.totalPrice = totalPrice;
    }

    // Method to get the current year
    getCurrentYear(): number {
        return new Date().getFullYear();
    }

    // Method to return the footer content based on the viewCart state
    getFooterContent(): ReactElement {
        const year: number = this.getCurrentYear();

        if (this.viewCart) {
            return <p>Shopping Cart &copy; {year}</p>;
        } else {
            return (
                <>
                    <p>Total Items: {this.totalItems}</p>
                    <p>Total Price: {this.totalPrice}</p>
                    <p>Shopping Cart &copy; {year}</p>
                </>
            );
        }
    }
}

type PropsType = {
    viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType): ReactElement => {
    const { totalItems, totalPrice } = useCart();

    // Create an instance of the FooterLogic class
    const footerLogic = new FooterLogic(viewCart, totalItems, totalPrice);

    const pageContent: ReactElement = footerLogic.getFooterContent();

    return (
        <footer className="footer">
            {pageContent}
        </footer>
    );
};

export default Footer;
