import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="first" className="main special">
            <header className="major">
              <h2>Informationen während der SARS CoV-2 Pandemie</h2>
            </header>
            <p>Liebe Patienten, Ihre Gesundheit ist uns wichtig! </p>
            <p>
              Die Arbeit in der Zahnarztpraxis unterliegt während der Pandemie
              des Coronavirus SARS CoV-2 außerordentlich strengen Hygiene- und
              Schutzvorkehrungen, die wir unter Berücksichtigung der verfügbaren
              Mittel umsetzen.
            </p>
            <p>
              Bitte halten Sie sich an den allgemein gültigen Corona -
              Verhaltenscodex.
            </p>
            <p>
              Die Information des{' '}
              <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV_node.html">
                Robert-Koch -Institutes
              </a>{' '}
              und der <a href="https://zkn.de/">Zahnärztevertretung</a> nutzen
              wir täglich um unser Verhalten anzupassen.
            </p>
            <p>
              Glücklicherweise haben wir keinen Engpass an Desinfektionsmitteln
              und Schutzausrüstung. Der Praxisbetrieb zur Versorgung unserer
              Patienten wird aufrecht erhalten.
            </p>
            <p>
              <b>Falls Sie</b> jedoch zu der{' '}
              <b>gefährdeten Bevölkerungsgruppe</b> gehören oder{' '}
              <b>Halsschmerzen, Temperatur, Husten</b> haben, bitten wir Sie
              Ihren Zahnarzttermin <b>abzusagen</b>.
            </p>
            <p>Vielen Dank für Ihr Verständnis!</p>
            <p>Ihr Praxisteam Zahnarztpraxis Bianca Weisz</p>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Kontakt</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style6 fa-hourglass-half"></span>
                <h3>Sprechzeiten</h3>
                <p>
                  <strong>Mo., Di. und Do.</strong> <br />
                  8.30 - 12.00 Uhr <br />
                  15.00 - 18.00 Uhr <br />
                  <strong>Mi. und Fr.</strong> <br />
                  8.30 - 12.00 Uhr <br />
                  sowie nach Vereinbarung
                </p>
              </li>
              <li>
                <span className="icon major style6 fa-map-marker"></span>
                <h3>Adresse</h3>
                <p>
                  Dornbusch 3 <br /> 31311 Uetze/Hänigsen <br /> Deutschland
                </p>
              </li>
              <li>
                <span className="icon major style6 fa-phone"></span>
                <h3>Kontakt</h3>
                <p>
                  <strong>Telefon</strong> <br />
                  <a href="tel:0514772255">05147 - 72255</a> <br />
                  <strong>Email</strong> <br />
                  <a href="mailto:info@biancaweisz.de">info@biancaweisz.de</a>
                </p>
              </li>
            </ul>
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>Hier finden Sie uns</h2>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.8733183310565!2d10.086591815235655!3d52.481429379806904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b01beee1241145%3A0xc5aeb07577a9b146!2sBianca+Weisz+%E2%80%93+Praxis+f%C3%BCr+Zahnmedizin!5e0!3m2!1ses-419!2sde!4v1549983788124"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  allowfullscreen
                />
              </div>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
