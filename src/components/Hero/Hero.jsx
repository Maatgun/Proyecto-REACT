import React from 'react'
import { HeroContainerStyled, HeroImgContainerStyle, HeroTextContainerStyled } from './HeroStyle'
import Button from '../UI/Button/Button'

const Hero = () => {
    return (
    <HeroContainerStyled>
        <HeroTextContainerStyled>
            <h1>DOGCHOW</h1>
            <h2>Somos el mejor alimento para tus mascotas</h2>
            <p>Dale lo mejor a tu mascota y hacelo feliz !</p>
        <Button radius='15'>
            Pedido
        </Button>
        </HeroTextContainerStyled>

        <HeroImgContainerStyle>
            <img src="https://res.cloudinary.com/dvj7ctojo/image/upload/c_scale,w_2000/v1690859935/DogChow_yrgfu3.jpg" alt="" />
        </HeroImgContainerStyle>
    </HeroContainerStyled>
    )
};

export default Hero