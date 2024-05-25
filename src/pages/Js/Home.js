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
            'Základní informace:': {
                'cz': 'Základní informace:',
                'en': 'Basic information:',
                'de': 'Grundlegende Informationen:',
                'pl': 'Podstawowe informacje:'
            },
            'Basic information:': {
                'cz': 'Základní informace:',
                'en': 'Basic information:',
                'de': 'Grundlegende Informationen:',
                'pl': 'Podstawowe informacje:'
            },
            'Grundlegende Informationen:': {
                'cz': 'Základní informace:',
                'en': 'Basic information:',
                'de': 'Grundlegende Informationen:',
                'pl': 'Podstawowe informacje:'
            },
            'Podstawowe informacje:': {
                'cz': 'Základní informace:',
                'en': 'Basic information:',
                'de': 'Grundlegende Informationen:',
                'pl': 'Podstawowe informacje:'
            },
            'Zdravím všechny příznivce hry ETS 2. Tato firma byla založena uživatelem známým na Twitchi i v ETS2 jako LucianusShow.': {
                'cz': 'Zdravím všechny příznivce hry ETS 2. Tato firma byla založena uživatelem známým na Twitchi i v ETS2 jako LucianusShow.',
                'en': 'Greetings to all fans of ETS 2. This company was founded by a user known on Twitch and in ETS2 as LucianusShow.',
                'de': 'Grüße an alle Fans von ETS 2. Dieses Unternehmen wurde von einem Benutzer gegründet, der auf Twitch und in ETS2 als LucianusShow bekannt ist.',
                'pl': 'Pozdrowienia dla wszystkich fanów ETS 2. Ta firma została założona przez użytkownika znanego na Twitchu i w ETS2 jako LucianusShow.'
            },
            'Greetings to all fans of ETS 2. This company was founded by a user known on Twitch and in ETS2 as LucianusShow.': {
                'cz': 'Zdravím všechny příznivce hry ETS 2. Tato firma byla založena uživatelem známým na Twitchi i v ETS2 jako LucianusShow.',
                'en': 'Greetings to all fans of ETS 2. This company was founded by a user known on Twitch and in ETS2 as LucianusShow.',
                'de': 'Grüße an alle Fans von ETS 2. Dieses Unternehmen wurde von einem Benutzer gegründet, der auf Twitch und in ETS2 als LucianusShow bekannt ist.',
                'pl': 'Pozdrowienia dla wszystkich fanów ETS 2. Ta firma została założona przez użytkownika znanego na Twitchu i w ETS2 jako LucianusShow.'
            },
            'Grüße an alle Fans von ETS 2. Dieses Unternehmen wurde von einem Benutzer gegründet, der auf Twitch und in ETS2 als LucianusShow bekannt ist.': {
                'cz': 'Zdravím všechny příznivce hry ETS 2. Tato firma byla založena uživatelem známým na Twitchi i v ETS2 jako LucianusShow.',
                'en': 'Greetings to all fans of ETS 2. This company was founded by a user known on Twitch and in ETS2 as LucianusShow.',
                'de': 'Grüße an alle Fans von ETS 2. Dieses Unternehmen wurde von einem Benutzer gegründet, der auf Twitch und in ETS2 als LucianusShow bekannt ist.',
                'pl': 'Pozdrowienia dla wszystkich fanów ETS 2. Ta firma została założona przez użytkownika znanego na Twitchu i w ETS2 jako LucianusShow.'
            },
            'Pozdrowienia dla wszystkich fanów ETS 2. Ta firma została założona przez użytkownika znanego na Twitchu i w ETS2 jako LucianusShow.': {
                'cz': 'Zdravím všechny příznivce hry ETS 2. Tato firma byla založena uživatelem známým na Twitchi i v ETS2 jako LucianusShow.',
                'en': 'Greetings to all fans of ETS 2. This company was founded by a user known on Twitch and in ETS2 as LucianusShow.',
                'de': 'Grüße an alle Fans von ETS 2. Dieses Unternehmen wurde von einem Benutzer gegründet, der auf Twitch und in ETS2 als LucianusShow bekannt ist.',
                'pl': 'Pozdrowienia dla wszystkich fanów ETS 2. Ta firma została założona przez użytkownika znanego na Twitchu i w ETS2 jako LucianusShow.'
            },
            'Ve firmě máme jak zkušené, tak i začínající řidiče.': {
                'cz': 'Ve firmě máme jak zkušené, tak i začínající řidiče.',
                'en': 'We have both experienced and beginner drivers in the company.',
                'de': 'Wir haben sowohl erfahrene als auch Anfängerfahrer im Unternehmen.',
                'pl': 'W firmie mamy zarówno doświadczonych, jak i początkujących kierowców.'
            },
            'We have both experienced and beginner drivers in the company.': {
                'cz': 'Ve firmě máme jak zkušené, tak i začínající řidiče.',
                'en': 'We have both experienced and beginner drivers in the company.',
                'de': 'Wir haben sowohl erfahrene als auch Anfängerfahrer im Unternehmen.',
                'pl': 'W firmie mamy zarówno doświadczonych, jak i początkujących kierowców.'
            },
            'Wir haben sowohl erfahrene als auch Anfängerfahrer im Unternehmen.': {
                'cz': 'Ve firmě máme jak zkušené, tak i začínající řidiče.',
                'en': 'We have both experienced and beginner drivers in the company.',
                'de': 'Wir haben sowohl erfahrene als auch Anfängerfahrer im Unternehmen.',
                'pl': 'W firmie mamy zarówno doświadczonych, jak i początkujących kierowców.'
            },
            'W firmie mamy zarówno doświadczonych, jak i początkujących kierowców.': {
                'cz': 'Ve firmě máme jak zkušené, tak i začínající řidiče.',
                'en': 'We have both experienced and beginner drivers in the company.',
                'de': 'Wir haben sowohl erfahrene als auch Anfängerfahrer im Unternehmen.',
                'pl': 'W firmie mamy zarówno doświadczonych, jak i początkujących kierowców.'
            },
            'Jsme fajn parta lidí, která se nebojí jakékoliv výzvy.': {
                'cz': 'Jsme fajn parta lidí, která se nebojí jakékoliv výzvy.',
                'en': 'We are a cool bunch of people who are not afraid of any challenge.',
                'de': 'Wir sind eine coole Truppe von Leuten, die keine Angst vor Herausforderungen haben.',
                'pl': 'Jesteśmy fajną grupą ludzi, którzy nie boją się żadnego wyzwania.'
            },
            'We are a cool bunch of people who are not afraid of any challenge.': {
                'cz': 'Jsme fajn parta lidí, která se nebojí jakékoliv výzvy.',
                'en': 'We are a cool bunch of people who are not afraid of any challenge.',
                'de': 'Wir sind eine coole Truppe von Leuten, die keine Angst vor Herausforderungen haben.',
                'pl': 'Jesteśmy fajną grupą ludzi, którzy nie boją się żadnego wyzwania.'
            },
            'Wir sind eine coole Truppe von Leuten, die keine Angst vor Herausforderungen haben.': {
                'cz': 'Jsme fajn parta lidí, která se nebojí jakékoliv výzvy.',
                'en': 'We are a cool bunch of people who are not afraid of any challenge.',
                'de': 'Wir sind eine coole Truppe von Leuten, die keine Angst vor Herausforderungen haben.',
                'pl': 'Jesteśmy fajną grupą ludzi, którzy nie boją się żadnego wyzwania.'
            },
            'Jesteśmy fajną grupą ludzi, którzy nie boją się żadnego wyzwania.': {
                'cz': 'Jsme fajn parta lidí, která se nebojí jakékoliv výzvy.',
                'en': 'We are a cool bunch of people who are not afraid of any challenge.',
                'de': 'Wir sind eine coole Truppe von Leuten, die keine Angst vor Herausforderungen haben.',
                'pl': 'Jesteśmy fajną grupą ludzi, którzy nie boją się żadnego wyzwania.'
            },
            'Každý měsíc se konají soutěže o DLC ETS 2 nebo jiné hry.': {
                'cz': 'Každý měsíc se konají soutěže o DLC ETS 2 nebo jiné hry.',
                'en': 'Competitions for ETS 2 DLC or other games are held every month.',
                'de': 'Jeden Monat werden Wettbewerbe um ETS 2 DLC oder andere Spiele abgehalten.',
                'pl': 'Co miesiąc odbywają się konkursy o DLC do ETS 2 lub inne gry.'
            },
            'Competitions for ETS 2 DLC or other games are held every month.': {
                'cz': 'Každý měsíc se konají soutěže o DLC ETS 2 nebo jiné hry.',
                'en': 'Competitions for ETS 2 DLC or other games are held every month.',
                'de': 'Jeden Monat werden Wettbewerbe um ETS 2 DLC oder andere Spiele abgehalten.',
                'pl': 'Co miesiąc odbywają się konkursy o DLC do ETS 2 lub inne gry.'
            },
            'Jeden Monat werden Wettbewerbe um ETS 2 DLC oder andere Spiele abgehalten.': {
                'cz': 'Každý měsíc se konají soutěže o DLC ETS 2 nebo jiné hry.',
                'en': 'Competitions for ETS 2 DLC or other games are held every month.',
                'de': 'Jeden Monat werden Wettbewerbe um ETS 2 DLC oder andere Spiele abgehalten.',
                'pl': 'Co miesiąc odbywają się konkursy o DLC do ETS 2 lub inne gry.'
            },
            'Co miesiąc odbywają się konkursy o DLC do ETS 2 lub inne gry.': {
                'cz': 'Každý měsíc se konají soutěže o DLC ETS 2 nebo jiné hry.',
                'en': 'Competitions for ETS 2 DLC or other games are held every month.',
                'de': 'Jeden Monat werden Wettbewerbe um ETS 2 DLC oder andere Spiele abgehalten.',
                'pl': 'Co miesiąc odbywają się konkursy o DLC do ETS 2 lub inne gry.'
            },
            'Jezdíme převážně na závodní statistiku.': {
                'cz': 'Jezdíme převážně na závodní statistiku.',
                'en': 'We mainly drive on racing statistics.',
                'de': 'Wir fahren hauptsächlich auf Rennstatistiken.',
                'pl': 'Głównie jeździmy na statystykach wyścigowych.'
            },
            'We mainly drive on racing statistics.': {
                'cz': 'Jezdíme převážně na závodní statistiku.',
                'en': 'We mainly drive on racing statistics.',
                'de': 'Wir fahren hauptsächlich auf Rennstatistiken.',
                'pl': 'Głównie jeździmy na statystykach wyścigowych.'
            },
            'Wir fahren hauptsächlich auf Rennstatistiken.': {
                'cz': 'Jezdíme převážně na závodní statistiku.',
                'en': 'We mainly drive on racing statistics.',
                'de': 'Wir fahren hauptsächlich auf Rennstatistiken.',
                'pl': 'Głównie jeździmy na statystykach wyścigowych.'
            },
            'Głównie jeździmy na statystykach wyścigowych.': {
                'cz': 'Jezdíme převážně na závodní statistiku.',
                'en': 'We mainly drive on racing statistics.',
                'de': 'Wir fahren hauptsächlich auf Rennstatistiken.',
                'pl': 'Głównie jeździmy na statystykach wyścigowych.'
            },
            'Více informací na našem Discordu.': {
                'cz': 'Více informací na našem Discordu.',
                'en': 'More information on our Discord.',
                'de': 'Mehr Informationen auf unserem Discord.',
                'pl': 'Więcej informacji na naszym Discordzie.'
            },
            'More information on our Discord.': {
                'cz': 'Více informací na našem Discordu.',
                'en': 'More information on our Discord.',
                'de': 'Mehr Informationen auf unserem Discord.',
                'pl': 'Więcej informacji na naszym Discordzie.'
            },
            'Mehr Informationen auf unserem Discord.': {
                'cz': 'Více informací na našem Discordu.',
                'en': 'More information on our Discord.',
                'de': 'Mehr Informationen auf unserem Discord.',
                'pl': 'Więcej informacji na naszym Discordzie.'
            },
            'Więcej informacji na naszym Discordzie.': {
                'cz': 'Více informací na našem Discordu.',
                'en': 'More information on our Discord.',
                'de': 'Mehr Informationen auf unserem Discord.',
                'pl': 'Więcej informacji na naszym Discordzie.'
            },
            'Úspěchy': {
                'cz': 'Úspěchy',
                'en': 'Achievements',
                'de': 'Erfolge',
                'pl': 'Osiągnięcia'
            },
            'Achievements': {
                'cz': 'Úspěchy',
                'en': 'Achievements',
                'de': 'Erfolge',
                'pl': 'Osiągnięcia'
            },
            'Erfolge': {
                'cz': 'Úspěchy',
                'en': 'Achievements',
                'de': 'Erfolge',
                'pl': 'Osiągnięcia'
            },
            'Osiągnięcia': {
                'cz': 'Úspěchy',
                'en': 'Achievements',
                'de': 'Erfolge',
                'pl': 'Osiągnięcia'
            },
            '1. místo na světě: březen 2023': {
                'cz': '1. místo na světě: březen 2023',
                'en': '1st place in the world: March 2023',
                'de': '1. Platz weltweit: März 2023',
                'pl': '1. miejsce na świecie: marzec 2023'
            },
            '1st place in the world: March 2023': {
                'cz': '1. místo na světě: březen 2023',
                'en': '1st place in the world: March 2023',
                'de': '1. Platz weltweit: März 2023',
                'pl': '1. miejsce na świecie: marzec 2023'
            },
            '1. Platz weltweit: März 2023': {
                'cz': '1. místo na světě: březen 2023',
                'en': '1st place in the world: March 2023',
                'de': '1. Platz weltweit: März 2023',
                'pl': '1. miejsce na świecie: marzec 2023'
            },
            '1. miejsce na świecie: marzec 2023': {
                'cz': '1. místo na světě: březen 2023',
                'en': '1st place in the world: March 2023',
                'de': '1. Platz weltweit: März 2023',
                'pl': '1. miejsce na świecie: marzec 2023'
            },
            '2. místo na světě: červen 2023': {
                'cz': '2. místo na světě: červen 2023',
                'en': '2nd place in the world: June 2023',
                'de': '2. Platz weltweit: Juni 2023',
                'pl': '2. miejsce na świecie: czerwiec 2023'
            },
            '2nd place in the world: June 2023': {
                'cz': '2. místo na světě: červen 2023',
                'en': '2nd place in the world: June 2023',
                'de': '2. Platz weltweit: Juni 2023',
                'pl': '2. miejsce na świecie: czerwiec 2023'
            },
            '2. Platz weltweit: Juni 2023': {
                'cz': '2. místo na světě: červen 2023',
                'en': '2nd place in the world: June 2023',
                'de': '2. Platz weltweit: Juni 2023',
                'pl': '2. miejsce na świecie: czerwiec 2023'
            },
            '2. miejsce na świecie: czerwiec 2023': {
                'cz': '2. místo na světě: červen 2023',
                'en': '2nd place in the world: June 2023',
                'de': '2. Platz weltweit: Juni 2023',
                'pl': '2. miejsce na świecie: czerwiec 2023'
            },
            '3. místo na světě: červen 2022, říjen 2022, listopad 2023, únor 2024': {
                'cz': '3. místo na světě: červen 2022, říjen 2022, listopad 2023, únor 2024',
                'en': '3rd place in the world: June 2022, October 2022, November 2023, February 2024',
                'de': '3. Platz weltweit: Juni 2022, Oktober 2022, November 2023, Februar 2024',
                'pl': '3. miejsce na świecie: czerwiec 2022, październik 2022, listopad 2023, luty 2024'
            },
            '3rd place in the world: June 2022, October 2022, November 2023, February 2024': {
                'cz': '3. místo na světě: červen 2022, říjen 2022, listopad 2023, únor 2024',
                'en': '3rd place in the world: June 2022, October 2022, November 2023, February 2024',
                'de': '3. Platz weltweit: Juni 2022, Oktober 2022, November 2023, Februar 2024',
                'pl': '3. miejsce na świecie: czerwiec 2022, październik 2022, listopad 2023, luty 2024'
            },
            '3. Platz weltweit: Juni 2022, Oktober 2022, November 2023, Februar 2024': {
                'cz': '3. místo na světě: červen 2022, říjen 2022, listopad 2023, únor 2024',
                'en': '3rd place in the world: June 2022, October 2022, November 2023, February 2024',
                'de': '3. Platz weltweit: Juni 2022, Oktober 2022, November 2023, Februar 2024',
                'pl': '3. miejsce na świecie: czerwiec 2022, październik 2022, listopad 2023, luty 2024'
            },
            '3. miejsce na świecie: czerwiec 2022, październik 2022, listopad 2023, luty 2024': {
                'cz': '3. místo na světě: červen 2022, říjen 2022, listopad 2023, únor 2024',
                'en': '3rd place in the world: June 2022, October 2022, November 2023, February 2024',
                'de': '3. Platz weltweit: Juni 2022, Oktober 2022, November 2023, Februar 2024',
                'pl': '3. miejsce na świecie: czerwiec 2022, październik 2022, listopad 2023, luty 2024'
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
            const elements = document.querySelectorAll('#informations p, #informations h1, #achievements p, #achievements h1, ul li a');
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