import React from 'react'
import { CategoriaCard } from './CategoriasStyles'

const Categoria = ({name}) => {
    return (
        <CategoriaCard>
            <h2>{name}</h2>
        </CategoriaCard>
    )
}

export default Categoria