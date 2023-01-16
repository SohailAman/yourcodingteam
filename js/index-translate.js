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
        'head-1': 'Hire top rated software developers worldwide with a partnership that never felt so close!',
        'para-1': 'The developer is hired by our local office, supervised, receives office supplies and is surrounded by like-minded people. We take care of payroll, legislation and HR.',
        'btn-1': 'See More',
        'head-2': 'The demand for highly skilled technical employees in the Netherlands continues to rise!',
        'para-2a': ' Worldwide, however, there are much more technically trained people. This makes international recruiting a great way to hire top talent and grow your business. To do this, you need a corporate structure where different layers of responsibility ensure that everyone does their job well.',
        'para-2b': 'We take care of this!',
        'btn-2': 'Learn more',
        'head-3': 'So how does this work?',
        'para-3': 'We personally go through your wishes and find a talented developer. If you are satisfied, we will hire the developer through our local office. We ensure pleasant communication and ensure that the developer feels integrated into your company culture.',
        'head-4': 'Experience it yourself to believe it!',
        'para-4': 'Do you need a back-end developer? Whether you plan to grow in the coming years with both your back-end and front-end developers. Your coding team is on hand and connects you with talented developers.',
        'head-5': 'Our Environment',
        'para-5': 'While The developer works for you, he works in a great company atmosphere locally. He works with like-minded people. There is a manager who can help him and who ensures that he moves within the company culture. There are weekly feedback moments between both parties and we work with a reward system. Good work has to be paid off!',
        'last-head': 'Yourcodingteam does it all for you.',
        'last-1': 'Selecting the right talent',
        'last-2': 'Hiring through local laws',
        'last-3': 'Office and Management',
        'foot-para': ' Yourcodingteam is a company that specializes in finding and guiding talent in offshore countries.Within the team, the emphasis is mainly on having the talents communicate well with the clients. You will therefore receive a service that you would not expect from the average outsourcing company.',
    },
    'nl': {
        'Hire': 'Remote',
        'Services': 'Voordelen',
        'How It Works?': 'Hoe werkt het?',
        'Get Started': 'Get started',
        'About Us': 'Over ons',
        'Prices': 'Prijzen',
        'Contact': 'Contact',
        'head-1': 'Wij connecten uw bedrijf met de beste software developers werelwijd!',
        'para-1': 'De developer wordt door ons offshore kantoor ingehuurd, krijgt een werkplek op locatie en alle kantoorbenodigheden. Daarnaast hebben wij een lokaal management en bieden wij begeleiding. Tevens verzorgen wij de salarisadministratie, wetgevingen en HR. ',
        'btn-1': 'Lees meer',
        'head-2': 'De vraag naar hooggeschoold technisch personeel in Nederland blijft maar stijgen!',
        'para-2a': 'Wereldwijd is er echter meer aanbod aan technisch geschoold personeel. Dit maakt internationaal werven een geweldige manier om toptalent aan te nemen en uw bedrijf uit te breiden. Hiervoor heeft u een bedrijfsstructuur nodig waarbij verschillende verantwoordelijkheidslagen ervoor zorgen dat iedereen zijn werk goed doet.',
        'para-2b': 'Wij zorgen hiervoor!',
        'btn-2': 'Leer meer',
        'head-3': 'Hoe werkt dit?',
        'para-3': 'Wij nemen persoonlijk uw wensen door en vinden een getalenteerde developer. Als u tevreden bent, nemen wij de developer in dienst via ons lokale kantoor. Wij zorgen voor een prettige communicatie en zorgen ervoor dat developer zich geïntegreerd voelt in uw bedrijfscultuur.',
        'head-4': 'Ervaar het zelf om het te geloven!',
        'para-4': 'Heeft u snel een back-end developer nodig? Of bent u van plan de komende jaren te groeien met zowel uw back-end als front-end developers. Yourcodingteam staat voor u klaar en verbind u met getalenteerde ontwikkelaars.',
        'head-5': 'Onze omgeving',
        'para-5': 'Terwijl de developer voor uw bedrijf werkt zit het team lokaal gevestigd in een fijne bedrijfssfeer. Hij werkt samen met gelijkgestemden. Er is een manager die hem kan helpen en die ervoor zorgt dat hij meebeweegt binnen uw bedrijfscultuur. Wekelijks zijn er feedbackmomenten tussen beide partijen en we werken met een beloningssysteem. ',
        'last-head': 'Yourcodingteam doet het allemaal voor u!',
        'last-1': 'Het juiste talent selecteren',
        'last-2': 'Aannemen via lokale wetgeving',
        'last-3': 'Kantoor en management',
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

// Get the browser's current language to display the website in
let browserLanguage = navigator.language || navigator.userLanguage;
if (browserLanguage.startsWith("nl")) {
    translate("nl");
    console.log(browserLanguage)
} else {
    translate("en");
}

