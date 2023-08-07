import React from 'react'
import { CategoriasContainer, CategoriasWrapper } from './CategoriasStyles'
import { categories } from '../../data/Categories'
import Categoria from './Categoria'

const Categorias = () => {
    return (
        <CategoriasWrapper>
            <h2>C A T E G O R I A</h2>
            <CategoriasContainer>
                {
                categories.map((category) => {
                        return <Categoria key={category.id} {...category} />
                    })
                }
            </CategoriasContainer>
        </CategoriasWrapper>
    )
}

export default Categorias