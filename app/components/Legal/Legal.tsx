import { useTranslation } from '../../hooks/useTranslation';
import Link from '../Link';

const dateDe = '18. April 2025';
const dateEn = 'April 18th 2025';

const Legal: React.FC = () => {
    useTranslation();
    
    return (
        <div className='relative pointer-events-none'>
            <div className='relative flex flex-col bg-white-500 p-4 pt-16 md:p-8 lg:p-16 gap-8 text-black-500 pointer-events-auto'>
                <header className='flex flex-col gap-4'>
                    <h1 className="text-9xl circula-black break-normal" data-en="Legal" data-de="Rechtliches" />
                    <p data-en={`Last Updated: ${dateEn}`} data-de={`Zuletzt aktualisiert: ${dateDe}`} />
                </header>
                <div className='flex flex-col text-lg'>
                    <h2 className='text-2xl' data-en="Imprint" data-de="Impressum" />
                    <p>BM Bros GmbH</p>
                    <p>Metzgergasse 15</p>
                    <p>CH-9000 St.Gallen</p>
                    <p>hello [at] banh-mi-bros.ch</p>
                    <p>078 480 92 23</p>
                </div>
                <div className='flex flex-col text-lg'>
                    <h2 data-en="Concept, Design, Development" data-de="Konzept, Design, Entwicklung"></h2>
                    <p>ZNGR DYNAMICS, St.Gallen</p>
                    <Link href='https://zngr-dynamics.ch'>zngr-dynamics.ch</Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 data-en="Disclaimers" data-de="Hinweise"/>
                    <p 
                        data-en="In these disclaimers, the terms 'we', 'us', 'our', or 'author' refer to the operator of this website, BM Bros GmbH. The term 'you' or 'user' refers to any person visiting or using this website." 
                        data-de='In diesen Hinweisen beziehen sich die Begriffe "wir", "uns", "unser" oder "Autor" auf den Betreiber dieser Website, BM Bros GmbH. Der Begriff "Sie" oder "Nutzer" bezieht sich auf jede Person, die diese Website besucht oder nutzt.' />
                    <h3 data-en="Liability Limitations" data-de="Haftungsausschluss"/>
                    <p
                        data-en="The author assumes no liability whatsoever for the correctness, accuracy, timeliness, reliability, and completeness of the information provided. Liability claims against the author for material or immaterial damage resulting from access to, use or non-use of the published information, misuse of the connection, or technical faults are excluded. All offers are non-binding. The author expressly reserves the right to change, supplement, or delete parts of the pages or the entire offer without separate announcement, or to cease publication temporarily or permanently."
                        data-de="Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen."
                    />
                    <h3 data-en="Disclaimer for Links" data-de="Hinweise für Links"/>
                    <p
                        data-en="References and links to third-party websites are outside our area of responsibility. Any responsibility for such websites is declined. Access and use of such websites are at the user's own risk. This applies in particular to links to ordering platforms such as JustEat.ch and UberEats. Their respective privacy policies and terms of use apply."
                        data-de="Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin. Dies gilt insbesondere für Links zu Bestellplattformen wie JustEat.ch und UberEats. Es gelten deren jeweilige Datenschutzbestimmungen und Nutzungsbedingungen."
                    />
                    <h3 data-en="Copyright" data-de="Urheberrecht"/>
                    <p
                        data-en="The copyright and all other rights to content, images, photos, or other files on this website belong exclusively to BM Bros GmbH or the specifically named rights holders. For the reproduction of any elements, the written consent of the copyright holders must be obtained in advance."
                        data-de="Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschliesslich BM Bros GmbH oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen."
                    />
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 data-en="Privacy Policy" data-de="Datenschutz"/>
                    <h3 data-en="1. General Information" data-de="1. Allgemeines" />
                    <p
                        data-en="Based on Article 13 of the Swiss Federal Constitution and the data protection provisions of the Swiss Confederation (Data Protection Act, DSG), every person has the right to protection of their privacy and protection against misuse of their personal data. We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy. This privacy policy applies to the website banh-mi-bros.ch."
                        data-de="Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Diese Datenschutzerklärung gilt für die Website banh-mi-bros.ch."
                    />
                    <h3 data-en="2. Data Controller" data-de="2. Verantwortliche Stelle"/>
                    <p
                        data-en="The controller responsible for data processing on this website is:"
                        data-de="Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:"
                    />
                    <div className='flex flex-col'>
                        <p>BM Bros GmbH</p>
                        <p>Metzgergasse 15</p>
                        <p>CH-9000 St.Gallen</p>
                        <p>hello [at] banh-mi-bros.ch</p>
                    </div>
                    <h3 data-en="3. Data Collection" data-de="3. Datenerfassung"/>
                    <p data-en="a) Server Log Files" data-de="a) Server-Log-Dateien" />
                    <p
                        data-en="The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are typically: browser type and version, operating system used, referrer URL, hostname of the accessing computer, time of the server request, and IP address. This data is not merged with other data sources. The basis for data processing is our legitimate interest in the technically error-free presentation and optimization of our website."
                        data-de="Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind typischerweise: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist unser berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung unserer Website."
                    />
                    <p data-en="b) Website Analytics with Umami" data-de="b) Webanalyse mit Umami" />
                    <div className='flex flex-col'>
                        <p
                            data-en="This website uses Umami, an open-source web analytics service, to analyze website usage. Umami is designed to be privacy-friendly and typically collects anonymized or pseudonymized data, such as the pages visited, time spent on pages, device type, operating system, browser, general geographic location (e.g., country or city), and referring websites. IP addresses may be processed but are generally anonymized or truncated. Umami helps us understand how visitors interact with our website to improve user experience. The data collected by Umami is processed on servers controlled by us or our service provider and is not shared with third parties for advertising purposes. The use of Umami is based on our legitimate interest in analyzing user behavior to optimize our website. You can find more information about Umami at:"
                            data-de="Diese Website benutzt Umami, einen Open-Source-Webanalysedienst, zur Analyse der Websitenutzung. Umami ist datenschutzfreundlich konzipiert und sammelt in der Regel anonymisierte oder pseudonymisierte Daten wie besuchte Seiten, Verweildauer auf Seiten, Gerätetyp, Betriebssystem, Browser, allgemeiner geografischer Standort (z.B. Land oder Stadt) und verweisende Websites. IP-Adressen können verarbeitet werden, werden aber üblicherweise anonymisiert oder gekürzt. Umami hilft uns zu verstehen, wie Besucher mit unserer Website interagieren, um das Nutzererlebnis zu verbessern. Die von Umami erfassten Daten werden auf von uns oder unserem Dienstleister kontrollierten Servern verarbeitet und nicht zu Werbezwecken an Dritte weitergegeben. Die Nutzung von Umami erfolgt auf Grundlage unseres berechtigten Interesses an der Analyse des Nutzerverhaltens zur Optimierung unserer Website. Weitere Informationen zu Umami finden Sie unter:"
                        />
                        <a className='hover:text-bmb-orange transition-colors duration-300' href="https://umami.is" target='_blank' rel='noopener noreferrer'>https://umami.is</a>
                    </div>
                    <p data-en="c) Contact" data-de="c) Kontakt" />
                    <p
                        data-en="If you contact us via email or other means, the information you provide will be stored for the purpose of processing the request and for possible follow-up questions."
                        data-de="Wenn Sie uns per E-Mail oder auf anderem Wege kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert."
                    />
                    <h3 data-en="4. Cookies" data-de="4. Cookies"/>
                    <p
                        data-en="Our website does not use cookies by default. Cookies are only set if you explicitly consent to their use on our contact page, specifically to enable the display of an interactive map provided by OpenStreetMap."
                        data-de="Unsere Website verwendet standardmässig keine Cookies. Cookies werden nur dann gesetzt, wenn Sie auf unserer Kontaktseite ausdrücklich deren Verwendung zustimmen, insbesondere um die Anzeige einer interaktiven Karte von OpenStreetMap zu ermöglichen."
                    />
                    <p
                        data-en="These cookies are necessary to provide the map functionality after you have given your consent. OpenStreetMap is a service provided by the OpenStreetMap Foundation (OSMF). When the map is activated and displayed based on your consent, technical data (such as your IP address, browser information, and potentially location data if you allow it in your browser/device) may be transmitted to OSMF servers to render the map and ensure its functionality. We have no control over this data transmission or further processing by OSMF."
                        data-de="Diese Cookies sind notwendig, um die Kartenfunktion nach Ihrer Einwilligung bereitzustellen. OpenStreetMap ist ein Dienst der OpenStreetMap Foundation (OSMF). Wenn die Karte aufgrund Ihrer Einwilligung aktiviert und angezeigt wird, können technische Daten (wie Ihre IP-Adresse, Browserinformationen und potenziell Standortdaten, falls Sie dies in Ihrem Browser/Gerät zulassen) an Server der OSMF übertragen werden, um die Karte darzustellen und deren Funktionalität sicherzustellen. Wir haben keinen Einfluss auf diese Datenübertragung oder die weitere Verarbeitung durch die OSMF."
                    />
                    <h3 data-en="5. Third-Party Services" data-de="5. Dienste Dritter"/>
                    <p
                        data-en="This website contains links to external ordering platforms such as JustEat.ch and UberEats. When you click on these links, you leave our website. Data processing on these external platforms is governed exclusively by the privacy policies and terms of use of the respective providers. We have no influence on their data processing practices. We recommend that you inform yourself about data protection on these external sites."
                        data-de="Diese Website enthält Links zu externen Bestellplattformen wie JustEat.ch und UberEats. Wenn Sie auf diese Links klicken, verlassen Sie unsere Website. Die Datenverarbeitung auf diesen externen Plattformen unterliegt ausschliesslich den Datenschutzbestimmungen und Nutzungsbedingungen der jeweiligen Anbieter. Wir haben keinen Einfluss auf deren Datenverarbeitung. Wir empfehlen Ihnen, sich über den Datenschutz auf diesen externen Seiten zu informieren."
                    />
                    <div className='flex flex-col'>
                        <a className='hover:text-bmb-orange transition-colors duration-300' href="https://www.just-eat.ch/privacy-policy" target="_blank" rel="noopener noreferrer" data-en="Privacy Policy JustEat.ch" data-de="Datenschutzerklärung JustEat.ch"></a>
                        <a className='hover:text-bmb-orange transition-colors duration-300' href="https://www.uber.com/legal/en/document/?name=privacy-notice" target="_blank" rel="noopener noreferrer" data-en="Privacy Policy UberEats" data-de="Datenschutzerklärung UberEats">https://www.uber.com/legal/en/document/?name=privacy-notice</a>
                    </div>
                    <h3 data-en="6. Your Rights" data-de="6. Ihre Rechte"/>
                    <p
                        data-en="Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipients, and the purpose of data processing, and, if applicable, a right to correction or deletion of this data. For this purpose, as well as for further questions on the subject of personal data, you can contact us at any time at the address given in section 2."
                        data-de="Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der in Abschnitt 2 angegebenen Adresse an uns wenden."
                    />
                    <h3 data-en="7. Changes to this Privacy Policy" data-de="7. Änderungen dieser Datenschutzerklärung"/>
                    <p
                        data-en="We may adapt this privacy policy at any time without prior notice. The current version published on our website applies. We recommend checking this privacy policy regularly."
                        data-de="Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung. Wir empfehlen, diese Datenschutzerklärung regelmässig zu prüfen."
                    />
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-500"></div> {/*Line*/}
            </div>
        </div>
    )
}

export default Legal;