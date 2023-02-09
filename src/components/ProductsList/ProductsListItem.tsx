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

class ProductsListItem extends Component<Props> {
    render() {
        const {
    title,
    description,
    type,
    capacity,
    price,
    image,
} = this.props
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
                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value="1" />
                        <Button variant="outlined">+</Button>
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