import React from 'react';
import styled from 'styled-components';

const StyledCardSetLabel = styled.p`
  text-align: center;
`

const CardSetLabel = ({numeroDuJoueur}) => (
  <StyledCardSetLabel>Cartes du joueur {numeroDuJoueur}</StyledCardSetLabel>
)

export default CardSetLabel;