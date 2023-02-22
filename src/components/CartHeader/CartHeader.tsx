import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
type Props = {
    productsInCart: {
        [id: number]: number
    }
   
}

const CartHeader = ({
    productsInCart
    
}: Props) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartHeader