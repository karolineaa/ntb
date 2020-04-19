import React from 'react';
import './App.css';
import nav from './nav.png';
import ChartSample from './ChartSample';
import {Collapse} from 'react-collapse';
import Chart2 from './Chart2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={nav} className="Nav" alt="nav illustrasjon" />
        <h1>
        11.000 nye søknader om dagpenger
        </h1>
        </header>

        <article>
        <h2>
        I påskens siste del fikk Nav 11.000 nye søknader om dagpenger. Hittil i år er tallet på søknader 416.600.
        </h2>

        <section className="Brodtekst"> <p>De nye søknadene fordeler seg på 2.050 ordinære søknader og 8.950 søknader på grunn av permittering, opplyser Nav.
          Siden torsdag 12. mars – dagen mange av de mest omfattende koronatiltakene ble innført – har det kommet inn totalt 377.700 
          søknader om dagpenger, hvorav 337.300 gjelder dagpenger ved permittering.

          <br></br> <br></br>

        </p>
      </section>

      <section className="Chart">
        <ChartSample />

      <p className="Bildetekst">Denne grafen viser antall søknader om dagpenger per uke, fra uke 1 til og med uke 20.
      Den sammenligner tall fra 2020 med tall fra 2019. Blå er tall fra 2019, rød er tall fra 2020, og gul viser antall 
      søknader som har kommet inn den siste uken. Hold over grafen for eksakt tall for valgt uke. </p>
      </section>

      </article>
      <footer>
         <br></br><br></br>
         <hr className="Style"></hr> 
         <p>© Karoline Ådnanes 2020 </p>
         <br></br><br></br>
      </footer>
    </div>
  );
}

export default App;
