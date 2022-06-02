import { Link } from "react-router-dom";

const BuyButtons = () => {
    return (
        <>
        <div className="buy-buttons">
            <Link to="/"> 
            <button className="btn">Seguir comprando</button>
            </Link>
            <Link to="/cart"> 
            <button className="btn">Finalizar compra</button>
            </Link>
        </div>
        </>
    );
    }

    export default BuyButtons;
