import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}
type cartDataProps = {
    totalCount: number
    totalPrise: number
}

const App = (props: Props) => {

    const [cartData, setCartData] = useState<cartDataProps>({
        totalCount: 10,
        totalPrise: 100,
    })

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cartData={cartData} />
                <Main />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
