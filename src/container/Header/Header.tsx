import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import Menu from 'components/Menu/Menu'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import CartHeader from 'components/CartHeader/CartHeader'

type Props = {
    productsInCart: {
    [id: number]: number
    }
}
// 'xs' | 'sm' | 'md' | 'lg' | 'xl' - размеры maxWidth

const Header = ({ productsInCart }:  Props) => {
    return (
        <AppBar position="static" className="app-bar">
            <Container maxWidth="lg">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Menu />
                    <CartHeader productsInCart={productsInCart} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
