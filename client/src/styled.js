import styled from 'styled-components'

const COLOURS = {
  ORANGE: `rgb(238, 111, 45)`,
  PALE_ORANGE: `rgb(238, 111, 45, 0.5)`,
  DARK_GREY: `#484848`
}

export const AddNewForm = styled.div`
  color: ${COLOURS.DARK_GREY};
  background: ${COLOURS.PALE_ORANGE};
  padding: 10px;
`;

export const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, Verdana, sans-serif;
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: repeat(3, 100px);
  grid-gap: 1em;
`;

export const Button = styled.button`
  margin: 10px;
  border: none;
  padding: 10px
`;

export const CardContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border-style: none none dashed none;
`;

export const DropdownMenu = styled.ul`
  list-style: none;
`;

export const FormInput = styled.input`
  border: none;
  margin: 10px;
  padding: 10px;

  &:focus {
    outline: 0;
  }
`;

export const Header = styled.header`
  grid-row: 1;
  grid-column: 2;
`;

export const Logo = styled.img`
  width:50px
`;

export const MenuContainer = styled.nav`
  text-align: left;
  grid-row: 1;
  grid-column: 1;
`;

export const Section = styled.section`
  grid-row: 2;
  grid-column: 2;
`;

export const TopicContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border-style: dashed none;
`;