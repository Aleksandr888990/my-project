import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
// import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Container } from '@mui/system'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import {omit} from 'lodash'
type Props = {}


type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {

    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 5,
    })


    const addProductToCart = (id:number, count:number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }        
    
// const removeProductFromCart = (id:number) => {
//     setProductsInCart((prevState) => {
//         let prevProductsInCart = {...prevState}
//         delete prevProductsInCart[id]
//         return prevProductsInCart        
//     })
// }

const removeProductFromCart = (id:number) => {
    setProductsInCart((prevState) => omit(prevState, [id]))
}

const changeProductQuantity = (id:number, count: number) => {
    setProductsInCart((prevState) => ({
        ...prevState,
        [id]: count,
        }))
    }    

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Container
                    sx={{
                        padding: '60px 0',
                    }}
                >
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home addProductToCart={addProductToCart} />
                            }
                        />
                        <Route
                            path="cart"
                            element={
                                <CartPage productsInCart={productsInCart} 
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}/>

                            }
                        />
                    </Routes>
                </Container>

                {/* // <Main addProductToCart={addProductToCart} /> */}
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
