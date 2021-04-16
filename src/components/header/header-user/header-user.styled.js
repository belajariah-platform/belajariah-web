import styled from 'styled-components'

export const Navbar = styled.nav`
    top: 0;
    z-index: 3;
    width: 100%;
    margin: 0 auto;
    position: fixed;`
export const ContainerNavbar = styled.div`
    margin: 0 auto;
    padding: 0 2em;
    max-width: 60em;
    min-width: 45em;`
export const IconNavbar = styled.div`
    font-size: 2em;
    font-weight: 700;
    padding-top: .7em;
    display: inline-block;
    text-transform: uppercase;`
export const UlNavbar = styled.ul`
    margin: 0;
    padding: 0;
    float: right;
    list-style-type: none;`
export const LiNavbar = styled.li `
    padding: 2em;
    text-align: center;
    transition: all .2s;
    display: inline-block;`
