     document.addEventListener("DOMContentLoaded", function() {
        const selector = document.querySelector(".language-selector");
        const options = document.querySelector(".language-options");
        const arrowDown = document.querySelector(".arrow-down");
        const selectedLanguageFlagContainer = document.querySelector(".selected-language");

        // Show/hide language options when clicking on the arrow down
        arrowDown.addEventListener("click", function() {
            options.classList.toggle("show");
        });

        // Set selected language when clicking on a language option
        options.addEventListener("click", function(event) {
            const selectedOption = event.target.closest(".language-option");
            if (selectedOption) {
                const lang = selectedOption.dataset.lang;
                const flagImg = selectedOption.querySelector("img").cloneNode(true);
                selectedLanguageFlagContainer.innerHTML = "";
                selectedLanguageFlagContainer.appendChild(flagImg);
                options.classList.remove("show");
                translateText(lang); // Call function for text translation
                // Save selected language flag and language to localStorage
                localStorage.setItem("selectedLanguageFlag", flagImg.outerHTML);
                localStorage.setItem("selectedLanguage", lang);
            }
        });

        // Hide language options when clicking outside the menu
        document.addEventListener("click", function(event) {
            if (!selector.contains(event.target) && !options.contains(event.target)) {
                options.classList.remove("show");
            }
        });

        // Text translations
        const translations = {
            'majitel': {
                'cz': 'majitel',
                'en': 'owner',
                'de': 'Eigentümer',
                'pl': 'właściciel'
            },
            'owner': {
                'cz': 'majitel',
                'en': 'owner',
                'de': 'Eigentümer',
                'pl': 'właściciel'
            },
            'Eigentümer': {
                'cz': 'majitel',
                'en': 'owner',
                'de': 'Eigentümer',
                'pl': 'właściciel'
            },
            'właściciel': {
                'cz': 'majitel',
                'en': 'owner',
                'de': 'Eigentümer',
                'pl': 'właściciel'
            },
            'ředitel': {
                'cz': 'ředitel',
                'en': 'manager',
                'de': 'Direktor',
                'pl': 'dyrektor'
            },
            'manager': {
                'cz': 'ředitel',
                'en': 'manager',
                'de': 'Direktor',
                'pl': 'dyrektor'
            },
            'Direktor': {
                'cz': 'ředitel',
                'en': 'manager',
                'de': 'Direktor',
                'pl': 'dyrektor'
            },
            'dyrektor': {
                'cz': 'ředitel',
                'en': 'manager',
                'de': 'Direktor',
                'pl': 'dyrektor'
            },
            'zástupce': {
                'cz': 'zástupce',
                'en': 'representative',
                'de': 'Vertreter',
                'pl': 'przedstawiciel'
            },
            'representative': {
                'cz': 'zástupce',
                'en': 'representative',
                'de': 'Vertreter',
                'pl': 'przedstawiciel'
            },
            'Vertreter': {
                'cz': 'zástupce',
                'en': 'representative',
                'de': 'Vertreter',
                'pl': 'przedstawiciel'
            },
            'przedstawiciel': {
                'cz': 'zástupce',
                'en': 'representative',
                'de': 'Vertreter',
                'pl': 'przedstawiciel'
            },
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
                'pl': 'Strona główna'
            },
            'Startseite': {
                'cz': 'Úvod',
                'en': 'Home',
                'de': 'Startseite',
                'pl': 'Strona główna'
            },
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
                'en': 'Rules',
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
                'en': 'Convoys',
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
                'pl': 'Łączność'
            },
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
            'Galeria': {
                'cz': 'Galerie',
                'en': 'Gallery',
                'de': 'Galerie',
                'pl': 'Galeria'
            }
        };

        function translateText(language) {
            const elements = document.querySelectorAll('#p_1 p, #p_2 p, #p_3 p, #p_4 p, #p_5 p, #p_6 p, h1, ul li a');
            elements.forEach(element => {
                let originalText = element.textContent.trim();
                if (Object.prototype.hasOwnProperty.call(translations, originalText)) {
                    const translatedText = translations[originalText][language] || translations[originalText]['en'];
                    element.textContent = translatedText;
                }
            });
        }

        // Restore selected language flag and language from localStorage
        const savedLanguageFlag = localStorage.getItem("selectedLanguageFlag");
        const savedLanguage = localStorage.getItem("selectedLanguage");
        if (savedLanguageFlag && savedLanguage) {
            selectedLanguageFlagContainer.innerHTML = savedLanguageFlag;
            translateText(savedLanguage);
        } else {
            // Default language - Czech
            translateText('cz');
        }

        // Update language when clicking on the main link
        const mainLink = document.querySelector(".logo a");
        mainLink.addEventListener("click", function() {
            translateText(savedLanguage || 'cz');
        });
    });