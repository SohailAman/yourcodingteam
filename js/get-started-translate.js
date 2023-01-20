// Get the language dropdown and language-switcher class
const languageDropdown = document.querySelector('.language-dropdown');
const elements = document.querySelectorAll('.translatable');
const paragraphs = document.querySelectorAll('.translatable-paragraph');
const inputPlaceholders = document.querySelectorAll('.translatable-inputPlaceholder');
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
        'input-1': 'First Name',
        'input-1a': 'Last Name',
        'input-2': 'Company Name',
        'input-2a': 'Email Address',
        'input-3': 'Country Code',
        'input-tel': 'phone Number',
        'input-last': 'Company Website',
        'para-last': ' We respect your data. By submitting this form, you agree that we may use ​this information in  accordance with our',
        'a-last': 'Privacy policy',
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
        'input-1': 'Voornaam',
        'input-1a': 'Achternaam',
        'input-2': 'Bedrijfsnaam ',
        'input-2a': 'E-mailadres',
        'input-3': 'Landcode',
        'input-tel': 'Telefoon nummer',
        'input-last': 'Bedrijfswebsite',
        'para-last': 'Wij respecteren uw gegevens. Door dit formulier in te dienen, gaat u ermee akkoord dat we deze informatie mogen gebruiken in overeenstemming met ons ',
        'a-last': 'privacy beleid',

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
    inputPlaceholders.forEach(function (inputPlaceholder) {
        inputPlaceholder.placeholder = translations[language][inputPlaceholder.getAttribute('data-translate')];
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