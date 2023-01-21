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
        'head-1': 'Being transparent',
        'para-1': 'We understand better than anyone that there is currently considerable competition in terms of employment. Rates are lower in offshore countries, but here, too, we see companies being competitive with each other with regard to terms of employment. We therefore think it is important to be transparent. Together with the developer, you determine the gross monthly salary. A happy employee and developer is essential for a successful company.',
        'btn-1': 'See More',
        'para-2': 'The salary for software developers in our offshore locations ranges on average between €1200 and €2200 gross per month, depending on expertise and experience. The employee receives the agreed amount per month from Yourcodingteam. In case of illness or absence, the developer will be paid according to their contract conditions. This is not passed on to you as a company, which minimizes your risk. With Yourcodingteam, the client only pays for the hours worked.',
        'btn-2': 'Get In Touch',
        'para-3': 'The illustration shows which services we offer to you and the developer. You pay us the gross salary multiplied by a conversion factor and Yourcodingteam takes care of everything.',
        'para-4': 'In every order confirmation it is stated that the client will become the owner of all intellectual property that arises during the job. Also, signing a NDA (Nondisclosure Agreement) is part of the standard procedure.',
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
        'head-1': 'Transparantie',
        'para-1': 'Wij begrijpen als geen ander dat er momenteel behoorlijk geconcurreerd wordt in arbeidsvoorwaarden. In offshore landen liggen de tarieven lager, maar ook hier zien wij in zekere zin bedrijven onderling competitief omgaan met arbeidsvoorwaarden. Wij vinden het daarom belangrijk om transparant te zijn. U bepaald samen met de developer het bruto maandloon. Een gelukkige werknemer en developer is essentieel voor een succesvol bedrijf.',
        'btn-1': 'Lees meer',
        'para-2': 'Het salaris in onze offshore landen voor software developers ligt gemiddeld tussen de €1200 en €2200 bruto per maand, afhankelijk van expertise en ervaring. De werknemer ontvangt van Yourcodingteam het bedrag per maand dat u heeft afgesproken. Bij ziekte of afwezigheid wordt de ontwikkelaar doorbetaald volgens zijn contractvoorwaarden. Dit wordt niet doorberekend aan u als bedrijf, waardoor u het minste risico loopt. Bij Yourcodingteam betaalt de opdrachtgever alleen voor de gewerkte uren.',
        'btn-2': 'Neem contact op',
        'para-3': 'De illustratie geeft aan welke diensten wij u en de ontwikkelaar aanbieden. U betaalt aan ons het brutoloon vermenigvuldigd met een omrekeningfactor en Yourcodingteam regelt alles.',
        'para-4': 'In elke opdrachtbevestiging wordt vastgelegd dat de opdrachtgever eigenaar wordt van alle intellectuele eigendommen die ontstaan tijdens de opdracht. Ook het ondertekenen van een NDA (Nondisclosure Agreement) is onderdeel van de standaardprocedure.',
        'foot-para': 'Yourcodingteam is een bedrijf dat gespecialiseerd is in het vinden en begeleiden van talent in offshore landen. Binnen het team ligt de nadruk vooral op het  communiceren van de talenten met de opdrachtgever. Daarnaast moet onder aan de streep onze service koste verminderd zijn en meer marge opleveren voor de klant. U zult merken dat u van ons een service krijgt die u niet zou verwachten van het gemiddelde outsourcingsbedrijf.',
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

// Add an event listener to the language dropdown to listen for changes
languageDropdown.addEventListener('change', function (event) {
    // Translate the website when a new language is selected
    translate(event.target.value);
    localStorage.setItem("language", event.target.value);
});

let selectedLanguage = localStorage.getItem("language");
if (selectedLanguage && translations[selectedLanguage]) {
    translate(selectedLanguage);
    languageDropdown.value = selectedLanguage;
} else if (navigator.language.includes("nl")) {
    translate("nl");
    localStorage.setItem("language", "nl");
} else {
    translate("en");
    localStorage.setItem("language", "en");
}