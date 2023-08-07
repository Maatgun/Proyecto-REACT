import React from 'react'
import { CardPrice, ContainerPrice, ProductosCard } from './CardsProductosStyle'
import Button from '../UI/Button/Button'

const CardsProducto = ({img, name,precio}) => {
    return (
        <ProductosCard>
            <img src={img} alt={name} />
            <h2>{name}</h2>

        <ContainerPrice>
        <CardPrice>${precio}</CardPrice>
            <Button>
                Agregar
            </Button>
        </ContainerPrice>
        </ProductosCard>
    )
}

export default  CardsProducto