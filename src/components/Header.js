import {MarkGithubIcon} from '@primer/octicons-react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderBlock = styled.header`
    z-index :auto;
    justify-content:space-between;
    width: 1553px;
    height: 117px;
`;

const Logo = styled.h1`
    font-size: 50px;
    color : #FF0A0E;

`;

const Nav = styled.nav`
    display: flex;
    gap:2px;
`;
export function Header(){
    return(
        <HeaderBlock>
            <Logo>NETFLIX</Logo>
            <Nav>
                <li>홈</li>
                <li>시리즈</li>
                <li>영화</li>
            </Nav>
            <a href="https://github.com/minkyungheo">
                <MarkGithubIcon size={24} />
            </a>

        </HeaderBlock>

    );



}
export default Header;