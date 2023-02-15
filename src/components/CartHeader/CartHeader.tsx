

type Props = {
    cartData: {
        totalCount: number
        totalPrise: number
    }
}

const CartHeader = ({ cartData }: Props) => {
    return (
        <div>
            <div>{cartData.totalCount}</div>
            <div>$ {cartData.totalPrise}</div>
        </div>
    )
}

export default CartHeader