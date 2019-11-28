import React from "react"
import { Helmet } from "react-helmet"
import Header from '../components/header'
import Footer from '../components/footer'

export default () => (
  <div className="application">
      <Helmet>
          <title>UX Design</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <script src="https://kit.fontawesome.com/37a2a9b871.js" crossorigin="anonymous"></script>
      </Helmet>
      <Header />
      <div className="has-xs-body-margin has-max-width is-centered">
        <div className="margin-lg">
          <a href="#index">
            <span className="icon"><i className="fas fa-arrow-left"></i></span> 
            Lena Demski - UX Design &amp; Consulting</a>
        </div>

        <h1 className="margin-lg">Impressum</h1>
        <div className="margin-md">
          <h2 className="margin-sm">Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>Max Mustermann<br />
          BMusterstraße 1<br />
          12345 Musterstadt</p>
        </div>
        <div className="margin-md">
          <h2 className="margin-sm">Kontakt</h2>
          <p>Telefon: +49 (0) 123 44 55 66<br />
          E-Mail: <a href="mailto:test@test.de">hello@lenademski.com</a></p>
        </div>
        <div className="margin-md">
          <h2 className="margin-sm">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect;27 a Umsatzsteuergesetz:<br />
        DE 999 999 999</p>
        </div>
        <div className="margin-lg">
          <h2 className="margin-sm">Streitschlichtung</h2>
          <p>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

          <p className="margin-sm">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

          <h3 className="margin-sm">Haftung f&uuml;r Inhalte</h3> 
          <p className="margin-sm">Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</p> 
          <p className="margin-sm">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p> 
          <h3 className="margin-sm">Haftung f&uuml;r Links</h3> 
          <p className="margin-sm">Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p> 
          <p className="margin-sm">Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p> 
          <h3 className="margin-sm">Urheberrecht</h3> 
          <p className="margin-sm">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p> 
          <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

          <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p> 
        </div> 
      </div>
      <Footer />
  </div>
  )