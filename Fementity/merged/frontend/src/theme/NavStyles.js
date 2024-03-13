


import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from "@emotion/styled";


export const Nav = styled.nav`
background: #FDF8F1;
height: 145px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
border-bottom: 2px solid;
border-bottom-color: #b97375;

`;

export const NavLink = styled(Link)`
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;


`;

export const Bars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px) {
	display: none;
}
`;








