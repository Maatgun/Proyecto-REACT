import React from 'react'
import { LayoutWrapped } from "./LayoutStyle"

const Layout = ({children}) => {
    return(

        <LayoutWrapped>
            {children}
        </LayoutWrapped>
    )
}

export default Layout