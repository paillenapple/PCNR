import React from 'react';
import styled from 'styled-components';

import CardSetWrapper from './../components/CardSetWrapper';

const StyledCardSetsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`

const CardSetsWrapper = ({setJoueur1, setJoueur2}) => (
  <StyledCardSetsWrapper>
    <CardSetWrapper 
      setDuJoueur={setJoueur1} 
      carteMan={true} 
      numeroDuJoueur={1} 
    />
    <CardSetWrapper 
      setDuJoueur={setJoueur2} 
      carteMan={false} 
      numeroDuJoueur={2}
    />
  </StyledCardSetsWrapper>
)

export default CardSetsWrapper;