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
        'head-1': 'We connect your company with the best software developers worldwide!',
        'para-1': 'Our offshore teams provide you with the opportunity to hire a highly skilled software developer. The developer will be provided with an on-site workspace and all required office resources. Our local management teams will offer ongoing support and guidance to the developer. Additionally, we manage all payroll, compliance, and HR.',
        'btn-1': 'See More',
        'head-2': 'The demand for highly skilled technical employees in the Netherlands continues to rise!',
        'para-2a': 'Worldwide, however, there are much more technically trained people. This makes international recruitment an effective way to attract top talent and strengthen your company. For this, you need a corporate structure in which different layers of responsibilities ensure that everyone does their job well.',
        'para-2b': 'We take care of this!',
        'btn-2': 'Learn more',
        'head-3': 'So how does this work?',
        'para-3': 'We personally address your specific requirements and find a qualified developer. Once you are satisfied, we will hire the developer through our local office. We guarantee efficient communication and ensure that the developer feels well integrated into the culture of your company.',
        'head-4': 'Experience it yourself to believe it!',
        'para-4': 'Are you looking for a quick solution for a back-end developer? Or considering expanding your back-end and front-end developer teams in the coming years? Yourcodingteam is ready to connect you with talented developers.',
        'head-5': 'Our Environment',
        'para-5': 'While The developer works for you, he works in a great company atmosphere locally. He works with like-minded people. There is a manager who can help him and who ensures that he moves within the company culture. There are weekly feedback moments between both parties and we work with a reward system. Good work has to be paid off!',
        'last-head': 'Yourcodingteam does it all for you.',
        'last-1': 'Selecting the right talent',
        'last-2': 'Hiring through local laws',
        'last-3': 'Office and Management',
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
        'head-1': 'Wij connecten uw bedrijf met de beste software developers werelwijd!',
        'para-1': 'Onze offshore teams stellen u in staat om een gekwalificeerde software developer in te huren. De developer zal een werkplek op locatie krijgen inclusief alle kantoorbenodigdheden. Onze lokale management teams zullen de developer ondersteunen en begeleiden. Wij verzorgen ook de salarisadministratie, wetgevingen en HR-zaken',
        'btn-1': 'Lees meer',
        'head-2': 'De vraag naar hoogopgeleid technisch personeel in Nederland blijft stijgen.',
        'para-2a': 'Wereldwijd is er echter meer aanbod aan technisch geschoold personeel. Dit maakt internationaal werven een effectieve manier om toptalent aan te trekken en uw bedrijf te versterken. Hiervoor heeft u een bedrijfsstructuur nodig waarbij verschillende lagen met verantwoordelijkheden ervoor zorgen dat iedereen zijn werk goed doet.',
        'para-2b': 'Wij zorgen hiervoor!',
        'btn-2': 'Leer meer',
        'head-3': 'Hoe werkt dit?',
        'para-3': 'Wij behandelen uw specifieke eisen persoonlijk en vinden een gekwalificeerde developer. Als u tevreden bent, nemen wij de developer in dienst via ons lokale kantoor. Wij garanderen een efficiënte communicatie en zorgen dat de developer zich goed geïntegreerd voelt in de cultuur van uw bedrijf',
        'head-4': 'Ervaar het zelf om het te geloven!',
        'para-4': 'Bent u op zoek naar een snelle oplossing voor een back-end developer? Of overweegt u om uw back-end en front-end developer teams uit te breiden in de komende jaren? Yourcodingteam staat klaar om u te verbinden met getalenteerde ontwikkelaars.',
        'head-5': 'Onze omgeving',
        'para-5': 'Terwijl de developer voor uw bedrijf werkt zit het team lokaal gevestigd in een fijne bedrijfssfeer. Hij werkt samen met gelijkgestemden. Er is een manager die hem kan helpen en die ervoor zorgt dat hij meebeweegt binnen uw bedrijfscultuur. Wekelijks zijn er feedbackmomenten tussen beide partijen en we werken met een beloningssysteem. ',
        'last-head': 'Yourcodingteam doet het allemaal voor u!',
        'last-1': 'Het juiste talent selecteren',
        'last-2': 'Aannemen via lokale wetgeving',
        'last-3': 'Kantoor en management',
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