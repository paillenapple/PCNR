import React from 'react';
import styled from 'styled-components';

import carteRenard from './../images/renard.svg';
import carteCoq from './../images/coq.svg';
import cartePoule from './../images/poule.svg';
import carteNid from './../images/nid.svg';
import carteFaceCachee from './../images/carte_face_cachée.svg';


const StyledLi = styled.li`

`

const StyledCarte = styled.img`
  display: block;
  margin: 5px;
`

class Carte extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estRetournee: false
    }
  }

  render() {
    const estRetournee = this.state.estRetournee;
    const valeurCarte = this.props.valeurCarte;
    let urlCarte;
    if (valeurCarte === 'poule') {
      urlCarte = cartePoule;
    } else if (valeurCarte === 'coq') {
      urlCarte = carteCoq;
    } else if (valeurCarte === 'nid') {
      urlCarte = carteNid;
    } else if (valeurCarte === 'renard') {
      urlCarte = carteRenard;
    }
    return (
      <StyledLi
        index={this.props.index}
      >
        {
          estRetournee || this.props.carteMan
          ? <StyledCarte
            src={urlCarte}
            alt='carte poule'
          />
          : <StyledCarte
              src={carteFaceCachee}
              alt='carte face cachée'
            />
        }
      </StyledLi>
    )
  }
}

export default Carte;