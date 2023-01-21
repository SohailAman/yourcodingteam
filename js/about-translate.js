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
        'para-1a': 'We show you how useful, cost-effective and fast remote employees can be. We experienced this when we were forced to hire remote developers years ago. We found it to be so successful that we created a system that can benefit everyone.',
        'btn-1': 'See More',
        'head-2': 'Yourcodingteam was created because we ran into a problem ourselves.',
        'para-2': 'There is a significant shortage of highly educated technical personnel in the Netherlands. Our founder, Levi Hendrickx, discovered this during running his first startup. As a result, he decided to set up development teams in India and Pakistan. In retrospect, this turned out to be one of the best decisions he and the company could have made. This allowed them to have more financial flexibility to focus on core activities, and the development process became much faster.',
        'btn-2': 'Get In Touch',
        'head-3': 'Communication is key.',
        'para-3': 'Levi has been working with his partners and developers from India and Pakistan for 4 years. The most important thing is that the people in the offshore locations understand Western culture. We value good communication, clear agreements and adherence to deadlines. In the past years, we have invested a lot of time and energy in creating a system that allows us to get the maximum return from remote workers.',
        'head-4': 'Build a system that works',
        'para-4': 'Hiring external employees can be an effective way to grow your business, but only if it is approached in the right way. Otherwise, it can lead to many challenges. Efficient management in the offshore location is needed to address these challenges and achieve the best results. ',
        'list-4a': '• Identifying and locally interviewing technical talent. ',
        'list-4b': '• Hiring within all local laws and regulations. ',
        'list-4c': '• Creating a pleasant work environment. ',
        'list-4d': '• Local management.',
        'para-4a': 'So far, our developers have done excellent work. Of course, the developers are rewarded and compensated accordingly for their efforts.',
        'head-5': 'With our system, we not only help your company but also support the developers with better working conditions. A situation that is beneficial for all parties involved!',

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
        'para-1a': 'Wij tonen u hoe nuttig, kostenefficiënt en snel remote werknemers kunnen zijn. Wij hebben dit ervaren toen wij jaren geleden noodgedwongen remote ontwikkelaars aannamen. Dit beviel ons zo goed dat we een systeem hebben ontwikkeld waarmee het voor iedereen voordelig kan zijn.',
        'btn-1': 'Lees meer',
        'head-2': 'Yourcodingteam is ontstaan omdat we zelf tegen een probleem aanliepen.',
        'para-2': 'Er is een groot tekort aan hoogopgeleid technisch personeel in Nederland. Onze oprichter Levi Hendrickx ontdekte dit tijdens het runnen van zijn eerste startup. Hierdoor besloot hij ontwikkelingsteams op te zetten in India en Pakistan. Achteraf gezien bleek dit een van de beste beslissingen die hij en het bedrijf hadden kunnen nemen. Hierdoor hadden ze meer financiële ruimte om zich te concentreren op hun kernactiviteiten en ging de ontwikkeling veel sneller.',
        'btn-2': 'Neem contact op',
        'head-3': 'Communicatie is de sleutel',
        'para-3': 'Levi werkt nu al 4 jaar samen met zijn partners en ontwikkelaars uit India en Pakistan. Het belangrijkste daarbij is dat de mensen in de offshore locaties de Westerse cultuur begrijpen. Zo hechten wij waarde aan goede communicatie, duidelijke afspraken en naleving van deadlines. In de afgelopen jaren hebben wij veel tijd en energie gestoken in het creëren van een systeem waarmee we het maximale rendement kunnen halen uit remote werknemers.',
        'head-4': 'Een systeem bouwen dat werkt ',
        'para-4': 'Het inhuren van externe medewerkers kan een effectieve manier zijn om uw bedrijf te laten groeien, maar alleen als het op een juiste manier wordt aangepakt. Anders kan het leiden tot veel uitdagingen. Er is een efficiënt management nodig in het offshore land om deze uitdagingen het hoofd te bieden en het maximale resultaat te behalen. ',
        'list-4a': '• Technisch top Talent identificeren en plaatselijk interviewen.',
        'list-4b': '• In dienst nemen volgens alle lokale wetgevingen',
        'list-4c': '• Een aangename werkomgeving creëren.',
        'list-4d': '• Lokaal management',
        'para-4a': 'Tot nu toe hebben onze ontwikkelaars uitstekend werk geleverd. Natuurlijk krijgen de ontwikkelaars hiervoor de juiste beloning en vergoeding.',
        'head-5': 'Met ons systeem helpen we niet alleen uw bedrijf, maar ondersteunen we ook de ontwikkelaars met betere arbeidsvoorwaarden. Een situatie die winst oplevert voor alle betrokkenen!',

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


