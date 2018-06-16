import React, { Component } from 'react';
import {injectGlobal} from 'styled-components';
import shuffle from 'lodash.shuffle';

import Title from './components/AppTitle';
import CardStack from './components/CardStack';
import CardSetsWrapper from './components/CardSetsWrapper';

import {setDeDepart} from './objects/startingStack';

// ---

injectGlobal`
  html {
    font: 400 10px Ubuntu;
    box-sizing: border-box;
  }
  
  body {
    font-size: 1.8rem;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`

// ---

const ensembleCartes = [];
setDeDepart.forEach(animal => {
  for (let index = 0; index < animal.nombreDeCartes; index++) {
    ensembleCartes.push(animal.valeur);
  }
})
const cartesMelangees = shuffle(ensembleCartes);
const setJoueur1 = cartesMelangees.splice(0, 4);
const setJoueur2 = cartesMelangees.splice(0, 4);

// ---

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pioche: cartesMelangees,
      setJoueur1: setJoueur1,
      setJoueur2: setJoueur2,
    }
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <CardStack pioche={this.state.pioche} />
        <CardSetsWrapper setJoueur1={this.state.setJoueur1} setJoueur2={this.state.setJoueur2} />
      </React.Fragment>
    );
  }
}

// ---

export default App;