import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
// import { promises } from 'stream'

type Props = {}
type cartDataProps = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {

    const [cartData, setCartData] = useState<cartDataProps>({
        totalCount: 10,
        totalPrice: 100,
    })

    const addProductToCart = (count:number, price:number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cartData={cartData} />
                <Main addProductToCart={addProductToCart} />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
