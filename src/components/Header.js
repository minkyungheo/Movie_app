import {MarkGithubIcon} from '@primer/octicons-react'
import styled from 'styled-components';

const HeaderBlock = styled.header`
    position: sticky;
    top: 0;
    display:flex;
    align-items: center;
    z-index :auto;
    width: auto;
    height: 117px;
    background-color:black;
`;

const Logo = styled.h1`
    margin-left: 20px;
    font-size: 50px;
    color : #FF0A0E;

`;

const Nav = styled.nav`
    display: flex;
    gap:2px;
    margin-left : 50px;
    margin-top : 20px;
`;
const NavTab = styled.li`
    list-style: none;
    margin-right: 60px;
    color: white;
`;
const GithubLink = styled.a`
    margin-left: auto;
    margin-right: 50px;
`;

export function Header(){
    return(
        <HeaderBlock>
            <Logo>NETFLIX</Logo>
            <Nav>
                <NavTab>홈</NavTab>
                <NavTab>시리즈</NavTab>
                <NavTab>영화</NavTab>
                <NavTab>추천</NavTab>
            </Nav>
            <GithubLink
             href="https://github.com/minkyungheo">
                <MarkGithubIcon size={24} color="white"/>
            </GithubLink>

        </HeaderBlock>

    );



}
export default Header;