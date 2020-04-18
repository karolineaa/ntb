import React from 'react';
import './App.css';
import nav from './nav.png';

import ChartSample from './ChartSample';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        11.000 nye søknader om dagpenger
        </h1>
        <h2>
        I påskens siste del fikk Nav 11.000 nye søknader om dagpenger. Hittil i år er tallet på søknader 416.600.
        <hr></hr></h2>

        <img src={nav} className="Nav" alt="nav illustrasjon" />

        <div className="BrodTekst"> <p>De nye søknadene fordeler seg på 2.050 ordinære søknader og 8.950 søknader på grunn av permittering, opplyser Nav.
          Siden torsdag 12. mars – dagen mange av de mest omfattende koronatiltakene ble innført – har det kommet inn totalt 377.700 
          søknader om dagpenger, hvorav 337.300 gjelder dagpenger ved permittering.

          <br></br>
          (©NTB)
        </p>
      </div>

        <ChartSample />
      </header>
    </div>
  );
}

export default App;
