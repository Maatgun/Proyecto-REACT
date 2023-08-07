import styled from "styled-components";

export const ProductoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width:100%;
  text-align:center;
  max-width: 1300px;
  margin: 40px 15px;
  @media (max-width: 768px) {
    text-align:center;
  }

`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 40px 0;;
    margin: 50px;
    max-width: 1200px;


`;

export const ProductosCard = styled.div`

width:300px;
padding: 1rem;
background-color: #f5f5f5;
border: 1px solid #ddd;
border-radius: 4px;
padding: 10px;
text-align: center;

img{
    width:100%;
    margin-bottom: 1rem;
}

h2{
    font-size:16px;
    font-weight: 600;
    margin: 0;
}

p{
    color:black;
    font-size: 1rem;
}
@media (max-width: 768px) {
    width:250px;
    text-align: left;
}
`;

export const ContainerPrice = styled.div`

display:flex;
justify-content: space-between;
margin:25px;
align-items:center;
`;

export const CardPrice = styled.span`

font-weight:700;
font-size: 1.7rem;
`;

export const ButtonContainerStyled = styled.div`

display:flex;
justify-content: center;
gap:20px;
margin-top: 3rem;
`;