    document.addEventListener("DOMContentLoaded", function() {
        const selector = document.querySelector(".language-selector");
        const options = document.querySelector(".language-options");
        const arrowDown = document.querySelector(".arrow-down");
        const flagImages = document.querySelectorAll(".language-option img");

        let selectedLanguage = localStorage.getItem('selectedLanguage') || 'cz'; // Výchozí jazyk

        // Textové překlady pro konvoje
        const translations = {
            'Datum: 5. 5. 2024': {
                'cz': 'Datum: 5. 5. 2024',
                'en': 'Date: 5th May 2024',
                'de': 'Datum: 5. 5. 2024',
                'pl': 'Data: 5 maja 2024'
            },
            'Date: 5th May 2024': {
                'cz': 'Datum: 5. 5. 2024',
                'en': 'Date: 5th May 2024',
                'de': 'Datum: 5. 5. 2024',
                'pl': 'Data: 5 maja 2024'
            },
            'Data: 5 maja 2024': {
                'cz': 'Datum: 5. 5. 2024',
                'en': 'Date: 5th May 2024',
                'de': 'Datum: 5. 5. 2024',
                'pl': 'Data: 5 maja 2024'
            },
            'Začátek: Lyon (Stain Bruch)': {
                'cz': 'Začátek: Lyon (Stain Bruch)',
                'en': 'Start: Lyon (Stain Bruch)',
                'de': 'Start: Lyon (Stain Bruch)',
                'pl': 'Początek: Lyon (Stain Bruch)'
            },
            'Start: Lyon (Stain Bruch)': {
                'cz': 'Začátek: Lyon (Stain Bruch)',
                'en': 'Start: Lyon (Stain Bruch)',
                'de': 'Start: Lyon (Stain Bruch)',
                'pl': 'Początek: Lyon (Stain Bruch)'
            },
            'Początek: Lyon (Stain Bruch)': {
                'cz': 'Začátek: Lyon (Stain Bruch)',
                'en': 'Start: Lyon (Stain Bruch)',
                'de': 'Start: Lyon (Stain Bruch)',
                'pl': 'Początek: Lyon (Stain Bruch)'
            },
            'Cíl: Calais (Port)': {
                'cz': 'Cíl: Calais (Port)',
                'en': 'Destination: Calais (Port)',
                'de': 'Ziel: Calais (Hafen)',
                'pl': 'Cel: Calais (Port)'
            },
            'Destination: Calais (Port)': {
                'cz': 'Cíl: Calais (Port)',
                'en': 'Destination: Calais (Port)',
                'de': 'Ziel: Calais (Hafen)',
                'pl': 'Cel: Calais (Port)'
            },
            'Ziel: Calais (Hafen)': {
                'cz': 'Cíl: Calais (Port)',
                'en': 'Destination: Calais (Port)',
                'de': 'Ziel: Calais (Hafen)',
                'pl': 'Cel: Calais (Port)'
            },
            'Cel: Calais (Port)': {
                'cz': 'Cíl: Calais (Port)',
                'en': 'Destination: Calais (Port)',
                'de': 'Ziel: Calais (Hafen)',
                'pl': 'Cel: Calais (Port)'
            },
            'Vzdálenost: 1111 km': {
                'cz': 'Vzdálenost: 1111 km',
                'en': 'Distance: 1111 km',
                'de': 'Entfernung: 1111 km',
                'pl': 'Odległość: 1111 km'
            },
            'Distance: 1111 km': {
                'cz': 'Vzdálenost: 1111 km',
                'en': 'Distance: 1111 km',
                'de': 'Entfernung: 1111 km',
                'pl': 'Odległość: 1111 km'
            },
            'Entfernung: 1111 km': {
                'cz': 'Vzdálenost: 1111 km',
                'en': 'Distance: 1111 km',
                'de': 'Entfernung: 1111 km',
                'pl': 'Odległość: 1111 km'
            },
            'Odległość: 1111 km': {
                'cz': 'Vzdálenost: 1111 km',
                'en': 'Distance: 1111 km',
                'de': 'Entfernung: 1111 km',
                'pl': 'Odległość: 1111 km'
            },
            'Pauza: Ne': {
                'cz': 'Pauza: Ne',
                'en': 'Break: No',
                'de': 'Pause: Nein',
                'pl': 'Przerwa: Nie'
            },
            'Break: No': {
                'cz': 'Pauza: Ne',
                'en': 'Break: No',
                'de': 'Pause: Nein',
                'pl': 'Przerwa: Nie'
            },
            'Pause: Nein': {
                'cz': 'Pauza: Ne',
                'en': 'Break: No',
                'de': 'Pause: Nein',
                'pl': 'Przerwa: Nie'
            },
            'Przerwa: Nie': {
                'cz': 'Pauza: Ne',
                'en': 'Break: No',
                'de': 'Pause: Nein',
                'pl': 'Przerwa: Nie'
            },
            'DLC: Ne': {
                'cz': 'DLC: Ne',
                'en': 'DLC: No',
                'de': 'DLC: Nein',
                'pl': 'DLC: Nie'
            },
            'DLC: No': {
                'cz': 'DLC: Ne',
                'en': 'DLC: No',
                'de': 'DLC: Nein',
                'pl': 'DLC: Nie'
            },
            'DLC: Nein': {
                'cz': 'DLC: Ne',
                'en': 'DLC: No',
                'de': 'DLC: Nein',
                'pl': 'DLC: Nie'
            },
            'Doprovodná vozidla: Ano': {
                'cz': 'Doprovodná vozidla: Ano',
                'en': 'Escort vehicles: Yes',
                'de': 'Begleitfahrzeuge: Ja',
                'pl': 'Pojazdy eskortujące: Tak'
            },
            'Escort vehicles: Yes': {
                'cz': 'Doprovodná vozidla: Ano',
                'en': 'Escort vehicles: Yes',
                'de': 'Begleitfahrzeuge: Ja',
                'pl': 'Pojazdy eskortujące: Tak'
            },
            'Begleitfahrzeuge: Ja': {
                'cz': 'Doprovodná vozidla: Ano',
                'en': 'Escort vehicles: Yes',
                'de': 'Begleitfahrzeuge: Ja',
                'pl': 'Pojazdy eskortujące: Tak'
            },
            'Pojazdy eskortujące: Tak': {
                'cz': 'Doprovodná vozidla: Ano',
                'en': 'Escort vehicles: Yes',
                'de': 'Begleitfahrzeuge: Ja',
                'pl': 'Pojazdy eskortujące: Tak'
            },
            'Server: TBD': {
                'cz': 'Server: TBD',
                'en': 'Server: TBD',
                'de': 'Server: TBD',
                'pl': 'Serwer: TBD'
            },
            'Serwer: TBD': {
                'cz': 'Server: TBD',
                'en': 'Server: TBD',
                'de': 'Server: TBD',
                'pl': 'Serwer: TBD'
            },
            'Sraz: 14:00': {
                'cz': 'Sraz: 14:00',
                'en': 'Meetup: 14:00',
                'de': 'Treffen: 14:00',
                'pl': 'Spotkanie: 14:00'
            },
            'Meetup: 14:00': {
                'cz': 'Sraz: 14:00',
                'en': 'Meetup: 14:00',
                'de': 'Treffen: 14:00',
                'pl': 'Spotkanie: 14:00'
            },
            'Treffen: 14:00': {
                'cz': 'Sraz: 14:00',
                'en': 'Meetup: 14:00',
                'de': 'Treffen: 14:00',
                'pl': 'Spotkanie: 14:00'
            },
            'Spotkanie: 14:00': {
                'cz': 'Sraz: 14:00',
                'en': 'Meetup: 14:00',
                'de': 'Treffen: 14:00',
                'pl': 'Spotkanie: 14:00'
            },
            'Odjezd: 15:00': {
                'cz': 'Odjezd: 15:00',
                'en': 'Departure: 15:00',
                'de': 'Abfahrt: 15:00',
                'pl': 'Wyjazd: 15:00'
            },
            'Departure: 15:00': {
                'cz': 'Odjezd: 15:00',
                'en': 'Departure: 15:00',
                'de': 'Abfahrt: 15:00',
                'pl': 'Wyjazd: 15:00'
            },
            'Abfahrt: 15:00': {
                'cz': 'Odjezd: 15:00',
                'en': 'Departure: 15:00',
                'de': 'Abfahrt: 15:00',
                'pl': 'Wyjazd: 15:00'
            },
            'Wyjazd: 15:00': {
                'cz': 'Odjezd: 15:00',
                'en': 'Departure: 15:00',
                'de': 'Abfahrt: 15:00',
                'pl': 'Wyjazd: 15:00'
            },
            'Datum: 23. 6. 2024': {
                'cz': 'Datum: 23. 6. 2024',
                'en': 'Date: 23rd June 2024',
                'de': 'Datum: 23. 6. 2024',
                'pl': 'Data: 23 czerwca 2024'
            },
            'Date: 23rd June 2024': {
                'cz': 'Datum: 23. 6. 2024',
                'en': 'Date: 23rd June 2024',
                'de': 'Datum: 23. 6. 2024',
                'pl': 'Data: 23 czerwca 2024'
            },
            'Data: 23 czerwca 2024': {
                'cz': 'Datum: 23. 6. 2024',
                'en': 'Date: 23rd June 2024',
                'de': 'Datum: 23. 6. 2024',
                'pl': 'Data: 23 czerwca 2024'
            },
            'Začátek: Glasgow (Slots)': {
                'cz': 'Začátek: Glasgow (Slots)',
                'en': 'Start: Glasgow (Slots)',
                'de': 'Start: Glasgow (Slots)',
                'pl': 'Początek: Glasgow (Slots)'
            },
            'Start: Glasgow (Slots)': {
                'cz': 'Začátek: Glasgow (Slots)',
                'en': 'Start: Glasgow (Slots)',
                'de': 'Start: Glasgow (Slots)',
                'pl': 'Początek: Glasgow (Slots)'
            },
            'Początek: Glasgow (Slots)': {
                'cz': 'Začátek: Glasgow (Slots)',
                'en': 'Start: Glasgow (Slots)',
                'de': 'Start: Glasgow (Slots)',
                'pl': 'Początek: Glasgow (Slots)'
            },
            'Cíl: Cardiff (Stein Bruch)': {
                'cz': 'Cíl: Cardiff (Stein Bruch)',
                'en': 'Destination: Cardiff (Stein Bruch)',
                'de': 'Ziel: Cardiff (Stein Bruch)',
                'pl': 'Cel: Cardiff (Stein Bruch)'
            },
            'Destination: Cardiff (Stein Bruch)': {
                'cz': 'Cíl: Cardiff (Stein Bruch)',
                'en': 'Destination: Cardiff (Stein Bruch)',
                'de': 'Ziel: Cardiff (Stein Bruch)',
                'pl': 'Cel: Cardiff (Stein Bruch)'
            },
            'Ziel: Cardiff (Stein Bruch)': {
                'cz': 'Cíl: Cardiff (Stein Bruch)',
                'en': 'Destination: Cardiff (Stein Bruch)',
                'de': 'Ziel: Cardiff (Stein Bruch)',
                'pl': 'Cel: Cardiff (Stein Bruch)'
            },
            'Cel: Cardiff (Stein Bruch)': {
                'cz': 'Cíl: Cardiff (Stein Bruch)',
                'en': 'Destination: Cardiff (Stein Bruch)',
                'de': 'Ziel: Cardiff (Stein Bruch)',
                'pl': 'Cel: Cardiff (Stein Bruch)'
            },
            'Vzdálenost: 1048 km': {
                'cz': 'Vzdálenost: 1048 km',
                'en': 'Distance: 1048 km',
                'de': 'Entfernung: 1048 km',
                'pl': 'Odległość: 1048 km'
            },
            'Distance: 1048 km': {
                'cz': 'Vzdálenost: 1048 km',
                'en': 'Distance: 1048 km',
                'de': 'Entfernung: 1048 km',
                'pl': 'Odległość: 1048 km'
            },
            'Entfernung: 1048 km': {
                'cz': 'Vzdálenost: 1048 km',
                'en': 'Distance: 1048 km',
                'de': 'Entfernung: 1048 km',
                'pl': 'Odległość: 1048 km'
            },
            'Odległość: 1048 km': {
                'cz': 'Vzdálenost: 1048 km',
                'en': 'Distance: 1048 km',
                'de': 'Entfernung: 1048 km',
                'pl': 'Odległość: 1048 km'
            }
        };

        function translateText(language) {
            const elements = document.querySelectorAll('#info1 h1, #info1 p, #info2 h1, #info2 p, ul li a');
            elements.forEach(element => {
                let originalText = element.textContent.trim();
                if (Object.prototype.hasOwnProperty.call(translations, originalText)) {
                    const translatedText = translations[originalText][language] || translations[originalText]['en'];
                    element.textContent = translatedText;
                }
            });
        }

        // Funkce pro zobrazení nebo skrytí možností jazyka
        arrowDown.addEventListener("click", function() {
            options.classList.toggle("show");
        });

        // Nastavení vybraného jazyka při kliknutí na možnost jazyka
        options.addEventListener("click", function(event) {
            const selectedOption = event.target.closest(".language-option");
            if (selectedOption) {
                selectedLanguage = selectedOption.dataset.lang;
                const flagImg = selectedOption.querySelector("img").cloneNode(true);
                const selectedFlag = selector.querySelector(".selected-language");
                selectedFlag.innerHTML = "";
                selectedFlag.appendChild(flagImg);
                options.classList.remove("show");
                localStorage.setItem('selectedLanguage', selectedLanguage); // Uložení vybraného jazyka do localStorage
                translateText(selectedLanguage); // Volání funkce pro překlad textů
            }
        });

        // Skrytí možností jazyka při kliknutí mimo menu
        document.addEventListener("click", function(event) {
            if (!selector.contains(event.target) && !options.contains(event.target)) {
                options.classList.remove("show");
            }
        });

        // Nastavení vlajky vybraného jazyka na základě localStorage
        flagImages.forEach(flag => {
            if (flag.parentElement.dataset.lang === selectedLanguage) {
                const selectedFlag = selector.querySelector(".selected-language");
                selectedFlag.innerHTML = "";
                selectedFlag.appendChild(flag.cloneNode(true));
            }
        });

        // Zapamatování si vybrané vlajky jazyka
        flagImages.forEach(flag => {
            flag.addEventListener('click', function() {
                selectedLanguage = this.parentElement.dataset.lang;
                const selectedFlag = selector.querySelector(".selected-language");
                selectedFlag.innerHTML = "";
                selectedFlag.appendChild(this.cloneNode(true));
                localStorage.setItem('selectedLanguage', selectedLanguage); // Uložení vybraného jazyka do localStorage
                translateText(selectedLanguage); // Volání funkce pro překlad textů
            });
        });

        // Nastavení výchozího jazyka
        translateText(selectedLanguage);
    });