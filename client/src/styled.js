import styled from 'styled-components'

export const Logo = styled.img`
  width:50px
`;

export const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, Verdana, sans-serif;
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: repeat(3, 100px);
  grid-gap: 1em;
`;

export const DropdownMenu = styled.ul`
  list-style: none;
`;

export const MenuContainer = styled.nav`
  text-align: left;
  grid-row: 1;
  grid-column: 1;
`;

export const Header = styled.header`
  grid-row: 1;
  grid-column: 2;
`;

export const Section = styled.section`
  grid-row: 2;
  grid-column: 2;
`;
