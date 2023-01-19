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
        'para-2': 'The salary in our offshore countries is on average between €1000 and €2000 gross per month. This salary is calculated based on expertise and experience. The employee receives from yourcodingteam the amount per month that you have agreed. In the event of illness or absence, the developer will continue to be paid on his contract terms. This is not passed on to you as a company, so you run the least risk. At Yourcodingteam, the client only pays for the hours worked.',
        'btn-2': 'Get In Touch',
        'para-3': 'You pay the gross monthly salary multiplied by a conversion factor and yourcoding team arranges the employership. In the illustration you can see what we offer for this.',
        'para-4': ' In each order confirmation is recorded that all intellectual property is transferred to the client. Signing an NDA is also part of the normal procedure.',
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
        'para-2': 'Het salaris in onze offshore landen ligt gemiddeld tussen de €1000 en €2000 bruto per maand. Dit salaris wordt berekend op basis van expertise en ervaring. De werknemer ontvangt van yourcodingteam het bedrag per maand dat u heeft afgesproken. Bij ziekte of afwezigheid wordt de developer op zijn contractvoorwaarden doorbetaald. Dit wordt niet naar u als bedrijf doorberekend, waardoor u het minste risico loopt. Bij Yourcodingteam betaald de opdrachtgever alleen de gewerkte uren.',
        'btn-2': 'Neem contact op',
        'para-3': 'U betaald het bruto maandsalaris keer een omrekeningsfactor en yourcodingteam regelt het werkgeverschap. In de illustratie ziet u wat wij hiervoor bieden.',
        'para-4': 'In elke opdrachtbevestiging wordt vastgelegd dat alle gecreëerde intellectuele eigendommen worden overgedragen aan de opdrachtgever. Het ondertekenen van een behoort ook tot de normale procedure.',
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


