import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Component, ReactNode } from 'react'

import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
    color: string
}

class ProductsListItem extends Component<Props, State> {
    // constructor(props: Props) {
    //     super(props)
    //     this.state = {
    //         count: 1,
    //     }
    //     this.onIncrementClick = this.onIncrementClick.bind(this)
    //     this.onDecrementClick = this.onDecrementClick.bind(this)
    // }
    state = {
        count: 1,
        color: 'green',
    }

    onIncrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
        }))
    }
    onDecrementClick = (num: number) => {
        this.setState((prevState: State) => ({
            count: prevState.count - num,
        }))
    }

    changeColor = () => {
        // this.setState((prevState: State) => {
        //     if(prevState.color === 'green'){
        //         return {
        //             color:'red',
        //         }
        //     } else {
        //         return{
        //             color: 'green',
        //         }
        //     }
        // })
        this.setState((prevState: State) => ({
        color: prevState.color === 'green' ? 'red' : 'green',     
        })) 
    }

    render() {
        const { title, description, type, capacity, price, image } = this.props
        return (
            <Card variant="outlined" className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="product-desc">{description}</div>
                    <div className="product-features">{type}</div>
                    <div className="product-features">{capacity} Gb</div>
                    <p>
                        Color: <span className={this.state.color}>{this.state.color}</span>
                        
                    </p>
                    <button onClick={this.changeColor}>Change color</button>
                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={() => this.onDecrementClick(2)}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="product-btn-wrap">
                    <Button>Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductsListItem
