import styled  from "styled-components"

export const NavbarContainerStyled = styled.header`
height:100px;
display:flex;
justify-content:space-between;
align-items:center;
padding: 1rem 4rem;


`;

export const LinksContainerStyled = styled.div`

color:black;
display:flex;
justify-content:center;
align-items: center;
gap: 40px;

a{
    padding: 1rem 1.5rem;
}

a:first-child {
    border-radius: 1rem;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
`;

export const LinkContainerStyled = styled.div`

font-size: 1.2rem;
display:flex;
align-item:center;

`;

export const ProductsContainerStyled = styled(LinkContainerStyled)`
@media (max-width: 768px) {
    display:none;
};
`;


export const HomeContainerStyled = styled(LinkContainerStyled)`

@media (max-width: 768px) {
    display:none;
};

`;


export const MenuContainerStyled = styled(LinkContainerStyled)`

display:none;
font-size: 2rem;
cursor:pointer;
@media (max-width: 768px) {
    display:flex;
}


`;



