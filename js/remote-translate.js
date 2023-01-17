// Get the language dropdown and language-switcher class
const languageDropdown = document.querySelector('.language-dropdown');
const elements = document.querySelectorAll('.translatable');
const paragraphs = document.querySelectorAll('.translatable-paragraph');

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
        'head-1': 'Qualified and experienced software developers.',
        'para-1': 'We provide the best experience and a pleasant cooperation.',
        'btn-1': 'See More',
        'head-2': 'India and Pakistan have become the fastest growing startup ecosystems in the world.All major tech companies are moving their offices.The Indian government recognized more than 14, 000 new startups in 2021 - 2022. Of these, a record 44 startups were granted unicorn status.These countries invest heavily in universities. It is in the culture of the young generation to work and study hard to make a career in international technology companies.',
        'head-3': 'We are here to help you to join this force and get the best experience.',
        'head-3a': 'Why remote employees',
        'head-3b': '- Choose from a large pool of talent',
        'head-3c': '- Competitive prices',
        'head-4': 'Advantages Yourcodingteam',
        'head-4a': '- You get our full attention 24/7',
        'head-4b': '- We find the best experienced talent.',
        'head-4c': '- Easy to scale up and down',
        'head-4d': '- Great communication',
        'head-4e': '- No overheadcost',
        'head-4f': '- No time difference',
        'head-4g': '- Only pay for for workable hours',
        'head-4h': '- Transparent. Client and employee discuss their own salary',
        'head-4i': '* We are also in contact with local universities for internships',
        'foot-para': 'Yourcodingteam is a company that specializes in finding and guiding talent in offshore countries.Within the team, the emphasis is mainly on having the talents communicate well with the clients. You will therefore receive a service that you would not expect from the average outsourcing company.',
    },
    'nl': {
        'Hire': 'Remote',
        'Services': 'Voordelen',
        'How It Works?': 'Hoe werkt het?',
        'Get Started': 'Get started',
        'About Us': 'Over ons',
        'Prices': 'Prijzen',
        'Contact': 'Contact',
        'head-1': 'Gekwalificeerde en ervaren software developers.',
        'para-1': 'Wij zorgen dat het u aan niks ontbreekt. Het moet u onderaan aan de streep kwaliteitsverbetering en kosten vermindering opbrengen.',
        'btn-1': 'Lees meer',
        'head-2': 'India en Pakistan zijn de snelst groeiende startup-ecosystemen ter wereld geworden. Alle grote techbedrijven verhuizen hun kantoren. De Indiase overheid erkende meer dan 14.000 nieuwe startups in 2021-2022. Hiervan kregen een recordaantal van 44 startups de status van unicorn. Deze landen investeren veel in universiteiten. Het zit in de cultuur van de jonge generatie om hard te werken en te studeren om carrière te maken bij internationale technologiebedrijven.',
        'head-3': 'We are here to help you to join this force and get the best experience.',
        'head-3a': 'Waarom externe medewerkers',
        'head-3b': '- Kies uit een grote pool van talent',
        'head-3c': '- Concurrerende prijzen',
        'head-4': 'Voordelen Yourcodingteam',
        'head-4a': '- Je krijgt 24/7 onze volledige aandacht',
        'head-4b': '- Wij vinden het best ervaren talent.',
        'head-4c': '- Makkelijk op en afschalen',
        'head-4d': '- Geweldige communicatie',
        'head-4e': '- Lage tarieven',
        'head-4f': '- Geen overheadkosten',
        'head-4g': '- Betaal alleen voor werkbare uren',
        'head-4h': '- Transparant. Opdrachtgever en medewerker bespreken samen het salaris',
        'head-4i': '* We hebben ook contact met lokale universiteiten voor stages',
        'foot-para': 'Yourcodingteam is een bedrijf dat gespecialiseerd is in het vinden en begeleiden van talent in offshore landen. Binnen het team ligt de nadruk vooral op het  communiceren van de talenten met de opdrachtgever. Daarnaast moet onder aan de streep onze service koste verminderd zijn en meer marge opleveren voor de klant. Dit peilen we dan ook continue. U zult merken dat u van ons een service krijgt die u niet zou verwachten van het gemiddelde outsourcingsbedrijf.',
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


