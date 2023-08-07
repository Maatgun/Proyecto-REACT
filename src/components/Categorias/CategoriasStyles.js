import styled from "styled-components";
import {motion} from "framer-motion";

export const CategoriasWrapper = styled.section`
display:flex;
flex-direction: column;
max-width: 1300px;
margin: 0 15px;
@media (max-width: 768px) {
    padding-top:30px;
    text-align: center;
}

h2{
    font-size:30px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}

`;

export const CategoriasContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: space-around;
align-items: center;
gap: 80px;
margin-top:20px;
user-select:none;
`;

export const CategoriaCard = styled(motion.div)`

display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.5rem;
padding: 0rem 0.8rem;
background-color:#fff;
border-radius: 15px;
cursor:pointer;

h2{
    font-size:14px;
    text.align:center;
    font-family: 'Montserrat', sans-serif;
}

`;

