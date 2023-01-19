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
        'head-1': 'It has given us an exponential advantage',
        'para-1': 'The way we work has changed. In real time we can collaborate via teams, design new applications and attend (virtual) events worldwide.',
        'para-1a': 'We show you how useful, cost effective and fast remote employees can be. We experienced this ourselves years ago and hired remote developers out of necessity. We liked this so much that we developed a system so that it can be of great benefit to everyone.',
        'btn-1': 'See More',
        'head-2': 'Yourcodingteam was created because we ran into a problem ourselves.',
        'para-2': 'There is a major shortage of highly trained technical staff in the Netherlands. Our founder Levi Hendrickx discovered this while running his first startup. As a result, he set up development teams in India and Pakistan. In hindsight, this was one of the best choices he and the company could have made. This left them with more cash to focus on their core business and accelerated development.',
        'btn-2': 'Get In Touch',
        'head-3': 'Communication is key.',
        'para-3': 'Levi has been working with his partners and developers from India and Pakistan for 4 years now. In this, the most important thing is that the people in the offshore countries understand the Western culture. We attach importance to communication, agreements and deadlines. In recent years, we have invested time and energy in this in particular and created a system that makes it possible to profit from remote employees.',
        'head-4': 'Build a system that works',
        'para-4': 'Hiring remote workers is a great way to grow your business but only if it is done right otherwise it can present many challenges. Functional management is needed in the offshore country to face these challenges and achieve the maximum result.',
        'list-4a': '•  Technically top Find talent and interview locally.',
        'list-4b': '•  Hire within all local laws.',
        'list-4c': '•  Creating a pleasant working environment.',
        'list-4d': '•  Local management.',
        'para-4a': 'So far, our developers have done an excellent job. Naturally, the developer receives the correct reward and payment for this.',
        'head-5': 'Through our system we help your company, but we also support the developers with better employment conditions. A win-win situation for everyone!',

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
        'head-1': 'Het heeft ons een exponentieel voordeel opgeleverd.',
        'para-1': 'De manier waarop we werken is veranderd. In realtime kunnen we samenwerken via teams, nieuwe applicaties ontwerpen en wereldwijd (virtuele) evenementen bijwonen.',
        'para-1a': 'Wij laten u zien hoe nuttig, kostenbesparend en snel remote medewerkers kunnen zijn. Wij hebben dit namelijk zelf jaren terug ook ondervonden en hebben uit nood destijds remote developers aangenomen. Dit is ons zo bevallen dat wij een systeem hebben ontwikkeld zodat het voor iedereen van groot voordeel kan zijn.',
        'btn-1': 'Lees meer',
        'head-2': 'Yourcodingteam is ontstaan omdat we zelf tegen een probleem aanliepen.',
        'para-2': 'Er is een groot tekort aan hoogopgeleid technisch personeel in Nederland. Onze oprichter Levi Hendrickx ontdekte dit tijdens het runnen van zijn eerste startup. Hierdoor zette hij ontwikkelingsteams op in India en Pakistan. Achteraf gezien was dit een van de beste keuzes die hij en het bedrijf hadden kunnen maken. Hierdoor hielden ze meer liquide middelen over om zich te concentreren op hun kernactiviteiten en ging de ontwikkeling veel sneller.',
        'btn-2': 'Neem contact op',
        'head-3': 'Communicatie is de sleutel',
        'para-3': 'Levi werkt nu 4 jaar samen met zijn partners en developers uit India en Pakistan. Hierin is het belangrijkste dat de mensen in de offshore landen de westerse cultuur begrijpen. Zo hechten wij belang aan communicatie, afspraken en deadliness. De afgelopen jaren hebben wij met name hier tijd en energie in geïnvesteerd en een systeem gecreëerd wat het mogelijk maakt om winst te halen uit remote medewerkers.',
        'head-4': 'Een systeem bouwen dat werkt ',
        'para-4': 'Het inhuren van externe medewerkers is een geweldige manier om uw bedrijf te laten groeien, maar alleen als het goed wordt gedaan, anders kan het voor veel uitdagingen zorgen. Er is een functioneel management nodig in het offshore land om deze uitdagingen het hoofd te bieden en het maximale resultaat te behalen. ',
        'list-4a': '• Technisch top Talent zoeken en plaatselijk interviewen. ',
        'list-4b': '• In dienst nemen binnen alle lokale wetgevingen',
        'list-4c': '• Creëren van een prettige werkomgeving. ',
        'list-4d': '• Lokaal management  ',
        'para-4a': 'Tot op heden hebben onze developers uitstekend werk verricht. Uiteraard krijgt de developer hier de juiste beloning en uitbetaling voor.',
        'head-5': 'Door ons systeem helpen we uw bedrijf, maar ondersteunen we de developers ook met betere arbeidsvoorwaarden. Een win-win situatie voor iedereen!',

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


