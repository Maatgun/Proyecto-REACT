import React from 'react'
import { ButtonContainerStyled, ProductoWrapper, ProductsContainer } from './CardsProductosStyle'
import { products } from '../../data/Productos'
import CardsProducto from './CardProducto'
import Button from '../UI/Button/Button'

const CardsProductos = () => {
    return (
        <ProductoWrapper>
            <h2>P R O D U C T O S</h2>
            <ProductsContainer>
                {
                    products.map((alimentos) => {
                        return <CardsProducto key={alimentos.id} {...alimentos} />
                    })
                }
            </ProductsContainer>
            <ButtonContainerStyled>
                <Button>Ver Menos</Button>
                <Button disabled>Ver Más</Button>
            </ButtonContainerStyled>
        </ProductoWrapper>
    )
}

export default CardsProductos