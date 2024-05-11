document.addEventListener("DOMContentLoaded", function() {
    const selector = document.querySelector(".language-selector");
    const options = document.querySelector(".language-options");
    const arrowDown = document.querySelector(".arrow-down");
    const flagImages = document.querySelectorAll(".language-option img");

    let selectedLanguage = localStorage.getItem('selectedLanguage') || 'cz'; // Default language

    // Show/hide language options when clicking on the arrow down
    arrowDown.addEventListener("click", function() {
        options.classList.toggle("show");
    });

    // Set selected language when clicking on a language option
    options.addEventListener("click", function(event) {
        const selectedOption = event.target.closest(".language-option");
        if (selectedOption) {
            selectedLanguage = selectedOption.dataset.lang;
            const flagImg = selectedOption.querySelector("img").cloneNode(true);
            const selectedFlag = selector.querySelector(".selected-language");
            selectedFlag.innerHTML = "";
            selectedFlag.appendChild(flagImg);
            options.classList.remove("show");
            localStorage.setItem('selectedLanguage', selectedLanguage); // Save selected language to localStorage
            translateText(selectedLanguage); // Call function for text translation
        }
    });

    // Hide language options when clicking outside the menu
    document.addEventListener("click", function(event) {
        if (!selector.contains(event.target)) {
            options.classList.remove("show");
        }
    });

    // Text translations
    const translations = {
        'Úvod': {
            'cz': 'Úvod',
            'en': 'Home',
            'de': 'Startseite',
            'pl': 'Strona główna'
        },

        'Home': {
            'cz': 'Úvod',
            'en': 'Home',
            'de': 'Startseite',
            'pl': 'Strona główna'},
  
        'Startseite': {
            'cz': 'Úvod',
            'en': 'Home',
            'de': 'Startseite',
            'pl': 'Strona główna'},
  
        'Strona główna': {
            'cz': 'Úvod',
            'en': 'Home',
            'de': 'Startseite',
            'pl': 'Strona główna'
        },
  
        'Pravidla': {
            'cz': 'Pravidla',
            'en': 'Rules',
            'de': 'Regeln',
            'pl': 'Zasady'
        },
  
        'Rules': {
            'cz': 'Pravidla',
            'en': 'Rules',
            'de': 'Regeln',
            'pl': 'Zasady'
        },
  
        'Regeln': {
            'cz': 'Pravidla',
            'en':
            'Rules',
            'de': 'Regeln',
            'pl': 'Zasady'
        },
  
        'Zasady': {
            'cz': 'Pravidla',
            'en': 'Rules',
            'de': 'Regeln',
            'pl': 'Zasady'
        },
  
        'Nábor': {
            'cz': 'Nábor',
            'en': 'Recruitment',
            'de': 'Rekrutierung',
            'pl': 'Rekrutacja'
        },
  
        'Recruitment': {
            'cz': 'Nábor',
            'en': 'Recruitment',
            'de': 'Rekrutierung',
            'pl': 'Rekrutacja'
        },
  
        'Rekrutierung': {
            'cz': 'Nábor',
            'en': 'Recruitment',
            'de': 'Rekrutierung',
            'pl': 'Rekrutacja'
        },
  
        'Rekrutacja': {
            'cz': 'Nábor',
            'en': 'Recruitment',
            'de': 'Rekrutierung',
            'pl': 'Rekrutacja'
        },
  
        'Konvoje': {
            'cz': 'Konvoje',
            'en': 'Convoys',
            'de': 'Konvois',
            'pl': 'Konwoje'
        },
  
        'Convoys': {
            'cz': 'Konvoje',
            'en': 'Convoys',
            'de': 'Konvois',
            'pl': 'Konwoje'
        },
  
        'Konvois': {
            'cz': 'Konvoje',
            'en':
            'Convoys',
            'de': 'Konvois',
            'pl': 'Konwoje'
        },
  
        'Konwoje': {
            'cz': 'Konvoje',
            'en': 'Convoys',
            'de': 'Konvois',
            'pl': 'Konwoje'
        },
  
        'Kontakty': {
            'cz': 'Kontakty',
            'en': 'Contacts',
            'de': 'Kontakte',
            'pl': 'Łączność'
        },
  
        'Contacts': {
            'cz': 'Kontakty',
            'en': 'Contacts',
            'de': 'Kontakte',
            'pl': 'Łączność'},
  
        'Kontakte': {
            'cz': 'Kontakty',
            'en': 'Contacts',
            'de': 'Kontakte',
            'pl': 'Łączność'
        },
  
        'Łączność': {
            'cz': 'Kontakty',
            'en': 'Contacts',
            'de': 'Kontakte',
            'pl': 'Łączność'
        },
  
        'Galerie': {
            'cz': 'Galerie',
            'en': 'Gallery',
            'de': 'Galerie',
            'pl': 'Galeria'
        },
  
        'Gallery': {
            'cz': 'Galerie',
            'en': 'Gallery',
            'de': 'Galerie',
            'pl': 'Galeria'
        },
  
        'Galerie': {
            'cz': 'Galerie',
            'en': 'Gallery',
            'de': 'Galerie',
            'pl': 'Galeria'
        },
  
        'Galeria': {
            'cz': 'Galerie',
            'en': 'Gallery',
            'de': 'Galerie',
            'pl': 'Galeria'
        },
        'Konvoje': {
            'cz': 'Konvoje',
            'en': 'Convoys',
            'de': 'Konvois',
            'pl': 'Konwoje'
        },
        'Convoys': {
            'cz': 'Konvoje',
            'en': 'Convoys',
            'de': 'Konvois',
            'pl': 'Konwoje'
        },
        'Konvois': {
            'cz': 'Konvoje',
            'en': 'Convoys',
            'de': 'Konvois',
            'pl': 'Konwoje'
        },
        'Konwoje': {
            'cz': 'Konvoje',
            'en': 'Convoys',
            'de': 'Konvois',
            'pl': 'Konwoje'
        }
    };

    function translateText(language) {
        const elements = document.querySelectorAll('h1, ul li a');
        elements.forEach(element => {
            let originalText = element.textContent.trim();
            if (translations.hasOwnProperty(originalText)) {
                const translatedText = translations[originalText][language] || translations[originalText]['en'];
                element.textContent = translatedText;
            }
        });
    }

    // Set selected language flag based on localStorage
    flagImages.forEach(flag => {
        if (flag.parentElement.dataset.lang === selectedLanguage) {
            const selectedFlag = selector.querySelector(".selected-language");
            selectedFlag.innerHTML = "";
            selectedFlag.appendChild(flag.cloneNode(true));
        }
    });

    // Remember selected language flag
    flagImages.forEach(flag => {
        flag.addEventListener('click', function() {
            selectedLanguage = this.parentElement.dataset.lang;
            const selectedFlag = selector.querySelector(".selected-language");
            selectedFlag.innerHTML = "";
            selectedFlag.appendChild(this.cloneNode(true));
            localStorage.setItem('selectedLanguage', selectedLanguage); // Save selected language to localStorage
            translateText(selectedLanguage); // Call function for text translation
        });
    });

    // Set default language
    translateText(selectedLanguage);
});