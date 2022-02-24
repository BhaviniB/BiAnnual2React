import React from 'react'
import Logo from '../../resources/logos/Logo'
import { Link } from "react-router-dom";
import {
    Wrapper,
    Header,
    HorizontalLine
} from './AppHeader.styles'
export const AppHeader = () => {
    return (
        <Wrapper>
            <Header>
                <Link to="/"> <Logo/> </Link>
                {/* </Logo> &nbsp;  &nbsp; */}
                Instagram
            </Header>
            <HorizontalLine />
        </Wrapper>
    )
}
export default AppHeader
