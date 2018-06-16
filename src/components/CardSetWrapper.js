import React from 'react';
import styled from 'styled-components';

import Carte from './../components/Carte';
import CardSetLabel from './../components/CardSetLabel';

const StyledCardSetWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

class CardSetWrapper extends React.Component {
  render() {
    return (
      <StyledDiv>
        <StyledCardSetWrapper>
          {this.props.setDuJoueur.map((valeur, index) => (
            <Carte
              key={`${valeur}-${index}`}
              valeurCarte={valeur}
              index={index}
              carteMan={this.props.carteMan}
            />
          ))}
        </StyledCardSetWrapper>
        <CardSetLabel numeroDuJoueur={this.props.numeroDuJoueur} />
      </StyledDiv>
    )
  }
}

export default CardSetWrapper;