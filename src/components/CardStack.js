import React from 'react';
import styled from 'styled-components';

import Carte from './../components/Carte';

const StyledCardStack = styled.ul`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`

class CardStack extends React.Component {
  render() {
    return (
      <StyledCardStack>
        {this.props.pioche.map((valeur, index) => (
          <Carte
            key={`${valeur}-${index}`}
            valeurCarte={valeur}
            index={index}
          />
        ))}
      </StyledCardStack>
    )
  }
}

export default CardStack;