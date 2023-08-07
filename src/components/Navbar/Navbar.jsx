import React from "react";
import { HomeContainerStyled, LinkContainerStyled, LinksContainerStyled, MenuContainerStyled, NavbarContainerStyled, ProductsContainerStyled } from "./NavbarStyle";
import {motion} from "framer-motion"
import {BiHomeHeart} from "react-icons/bi"
import {BsFillBagHeartFill} from "react-icons/bs"
import {HiOutlineMenuAlt3} from "react-icons/hi"


const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <div>
                <a href="#">
                <img src="https://res.cloudinary.com/dvj7ctojo/image/upload/c_scale,w_118/v1690864147/logo-dogChow_ixeecn.png" alt="logo" />
                </a>
            </div>
            <LinksContainerStyled>
            <HomeContainerStyled>

                <motion.div whileTap={{scale: 0.95}} >
                <a href="#">
                    <LinkContainerStyled>
                        <BiHomeHeart/>
                    </LinkContainerStyled>
                    HOME
                </a>
                </motion.div>

            </HomeContainerStyled>

            <ProductsContainerStyled>
                <a href="#">
                    <LinkContainerStyled>
                    <BsFillBagHeartFill/>
                    </LinkContainerStyled>
                    PRODUCTOS
                </a>
            </ProductsContainerStyled>

            <motion.div whileTap={{scale: 0.95}}>
                <MenuContainerStyled>
                    <HiOutlineMenuAlt3/>
                </MenuContainerStyled>

            </motion.div>
            </LinksContainerStyled>

        </NavbarContainerStyled>
    )
};

export default Navbar