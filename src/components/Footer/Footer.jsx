import React from 'react'
import { FooterContainerStyled, LinksFooterContainerStyled } from './FooterStyles'

const Footer = () => {
    return (
        <FooterContainerStyled>
            <LinksFooterContainerStyled>
            <a href="/#">Privacidad</a>
            <a href="/#">Trabaja Con Nosotros</a>
            <a href="/#">Atención al Cliente</a>
            </LinksFooterContainerStyled>
           <p>
            Hecho con ♥ by <span> Matias.</span>
           </p>
        </FooterContainerStyled>
    )
}

export default Footer