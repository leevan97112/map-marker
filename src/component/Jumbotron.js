import React, { Component } from 'react';

import '../css/jumbotron.css';


class Jumbotron extends Component {
  render() {
    return (
      <div className="Jumbotroncontainer">
          <div className="Jumbotron">
            <p>Votre repas <br/> en<br/> <b>un clique</b></p>
          </div>
      </div>
    );
  }
}

export default Jumbotron;
