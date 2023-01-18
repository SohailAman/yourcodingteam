// Get the language dropdown and language-switcher class
const languageDropdown = document.querySelector('.language-dropdown');
const elements = document.querySelectorAll('.translatable');
const paragraphs = document.querySelectorAll('.translatable-paragraph');
const aLinks = document.querySelectorAll('.translatable-aLink');

//Create an object with translations
const translations = {
    'en': {
        'Hire': 'Hire',
        'Services': 'Services',
        'How It Works?': 'How It Works',
        'Get Started': 'Get Started',
        'About Us': 'About Us',
        'Prices': 'Prices',
        'Contact': 'Contact',
        'head-1': 'We find the perfect match!',
        'para-1': 'An enthusiastic developer who does what is promised and who likes to delve into your corporate culture.',
        'btn-1': 'See More',
        'head-2': 'The process',
        'para-2': 'Every assignment is different and every developer has his own specialty. The application process is therefore always personal. We are happy to visit you on location to experience your company culture and to listen to your wishes. Together we take a look how we can use external employees to increase quality and reduce costs. Once you and the developer are happy, he will be hired by our local offshore office.',
        'btn-2': '',
        'head-3': 'The developer',
        'para-3': 'Our developers are specialized in solving complex problems. They therefore like to take on any challenge and do so with all the dedication and motivation. There is also a focus on sharing knowledge with the customer and building good relationships. At the request of the customer, progress is reported every day. The developer takes full responsibility for the delivered work and results.',
        'head-4': 'We only hire the best.',
        'para-4a': '- Passionate about his/her profession',
        'para-4b': '- Excellent technical communication',
        'para-4c': '- Showing their core skills by our internal developer test.',
        'para-4d': '- Has an excellent rating from its previous employers or contractors',
        'para-4e': '- Completed university study related to the job',
        'para-4f': '- Related working experience (depends on clients wishes)',

        'foot-para': 'Yourcodingteam is a company that specializes in finding and guiding talent in offshore countries.Within the team, the emphasis is mainly on having the talents communicate well with the clients. You will therefore receive a service that you would not expect from the average outsourcing company.',
        'foot-link1': './assets/Privacy Statement EN.pdf',
        'foot-link2': './assets/Disclaimer EN.pdf',
    },
    'nl': {
        'Hire': 'Remote',
        'Services': 'Voordelen',
        'How It Works?': 'Hoe werkt het?',
        'Get Started': 'Get started',
        'About Us': 'Over ons',
        'Prices': 'Prijzen',
        'Contact': 'Contact',
        'head-1': 'Wij vinden de perfecte match!',
        'para-1': 'Een enthousiaste developer die doet wat wordt beloofd en zich graag verdiept in uw bedrijfscultuur.',
        'btn-1': 'Lees meer',
        'head-2': 'Het proces',
        'para-2': 'Elke opdracht is anders en elke developer heeft zijn eigen specialisme. Het sollicitatieproces is daarom altijd persoonlijk. Wij komen graag bij u op locatie langs om uw bedrijfscultuur te ervaren en te luisteren naar uw wensen. Samen bekijken we hoe we externe medewerkers kunnen inzetten om kwaliteit te verhogen en kosten te verlagen. Zodra u en de developer tevreden zijn, wordt deze aangenomen door ons lokale offshore kantoor.',
        'btn-2': 'Neem contact op',
        'head-3': 'De developer',
        'para-3': 'Onze developers zijn gespecialiseerd in het oplossen van complexe problemen. Zij gaan daarom graag elke uitdaging aan en doen dit met alle toewijding en motivatie. Er wordt daarbij ook gefocust op het delen van kennis met de klant en het opbouwen van goede relaties. Op verzoek van de klant wordt de voortgang elke dag gerapporteerd. De developer neemt volledige verantwoordelijkheid over het aangeleverde werk en resultaten.',
        'head-4': 'Wij nemen alleen de beste aan!',
        'para-4a': '- Gepassioneerd voor zijn/haar vak',
        'para-4b': '- Uitstekende technische communicatie',
        'para-4c': '- Kan zijn/haar kernvaardigheden aantonen in onze development test',
        'para-4d': '- Heeft een uitstekende beoordeling van vorige werkgevers of opdrachtgevers',
        'para-4e': '- Afgeronde universitaire studie gerelateerd aan de functie',
        'para-4f': '- Minimaal 2 jaar+ Relevante werkervaring (afhankelijk van de wensen van de klant)',
        'foot-para': 'Yourcodingteam is een bedrijf dat gespecialiseerd is in het vinden en begeleiden van talent in offshore landen. Binnen het team ligt de nadruk vooral op het  communiceren van de talenten met de opdrachtgever. Daarnaast moet onder aan de streep onze service koste verminderd zijn en meer marge opleveren voor de klant. Dit peilen we dan ook continue. U zult merken dat u van ons een service krijgt die u niet zou verwachten van het gemiddelde outsourcingsbedrijf.',
        'foot-link1': './assets/Privacy Statement NL.pdf',
        'foot-link2': './assets/Disclaimer NL.pdf',
    }
};

// Function to translate the website when language changes
function translate(language) {
    elements.forEach(function (element) {
        element.textContent = translations[language][element.getAttribute('data-translate')];
    });
    paragraphs.forEach(function (paragraph) {
        paragraph.textContent = translations[language][paragraph.getAttribute('data-translate')];
    });
    aLinks.forEach(function (aLink) {
        aLink.href = translations[language][aLink.getAttribute('data-translate')];
    });
}

// Add an event listener to the language dropdown to listen for changes
languageDropdown.addEventListener('change', function (event) {
    // Translate the website when a new language is selected
    translate(event.target.value);
});
let browserLang = navigator.language;
if (browserLang.includes("nl")) {
    translate("nl");
    console.log(browserLang)
} else {
    translate("en");
}


