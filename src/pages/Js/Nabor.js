export const Nabor = () =>{
    document.addEventListener("DOMContentLoaded", function() {
        const selector = document.querySelector(".language-selector");
        const options = document.querySelector(".language-options");
        const arrowDown = document.querySelector(".arrow-down");
        const selectedLanguageFlag = document.querySelector(".selected-language img");
    
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
                const selectedLanguage = selector.querySelector(".selected-language");
                selectedLanguage.innerHTML = "";
                selectedLanguage.appendChild(flagImg);
                options.classList.remove("show");
                translateText(lang); // Call function for text translation
                // Save selected language flag and language to localStorage
                localStorage.setItem("selectedLanguageFlag", flagImg.outerHTML);
                localStorage.setItem("selectedLanguage", lang);
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
      
            'Galeria': {
                'cz': 'Galerie',
                'en': 'Gallery',
                'de': 'Galerie',
                'pl': 'Galeria'
            },
    
            'Požadavky na vstup': {
                'cz': 'Požadavky na vstup',
                'en': 'Entry requirements',
                'de': 'Eintrittsanforderungen',
                'pl': 'Wymagania dotyczące uczestnictwa'
            },
            'Entry requirements': {
                'cz': 'Požadavky na vstup',
                'en': 'Entry requirements',
                'de': 'Eintrittsanforderungen',
                'pl': 'Wymagania dotyczące uczestnictwa'
            },
            'Eintrittsanforderungen': {
                'cz': 'Požadavky na vstup',
                'en': 'Entry requirements',
                'de': 'Eintrittsanforderungen',
                'pl': 'Wymagania dotyczące uczestnictwa'
            },
            'Wymagania dotyczące uczestnictwa': {
                'cz': 'Požadavky na vstup',
                'en': 'Entry requirements',
                'de': 'Eintrittsanforderungen',
                'pl': 'Wymagania dotyczące uczestnictwa'
            },
      
            'Věk 15 let a více (výjimky se posuzují individuálně).': {
                'cz': 'Věk 15 let a více (výjimky se posuzují individuálně).',
                'en': 'Age 15 and over (exceptions are considered individually).',
                'de': 'Alter 15 Jahre und älter (Ausnahmen werden individuell betrachtet).',
                'pl': 'Wiek 15 lat i więcej (wyjątki są rozpatrywane indywidualnie).'
            },
            'Age 15 and over (exceptions are considered individually).': {
                'cz': 'Věk 15 let a více (výjimky se posuzují individuálně).',
                'en': 'Age 15 and over (exceptions are considered individually).',
                'de': 'Alter 15 Jahre und älter (Ausnahmen werden individuell betrachtet).',
                'pl': 'Wiek 15 lat i więcej (wyjątki są rozpatrywane indywidualnie).'
            },
            'Alter 15 Jahre und älter (Ausnahmen werden individuell betrachtet).': {
                'cz': 'Věk 15 let a více (výjimky se posuzují individuálně).',
                'en': 'Age 15 and over (exceptions are considered individually).',
                'de': 'Alter 15 Jahre und älter (Ausnahmen werden individuell betrachtet).',
                'pl': 'Wiek 15 lat i więcej (wyjątki są rozpatrywane indywidualnie).'
            },
            'Wiek 15 lat i więcej (wyjątki są rozpatrywane indywidualnie).': {
                'cz': 'Věk 15 let a více (výjimky se posuzují individuálně).',
                'en': 'Age 15 and over (exceptions are considered individually).',
                'de': 'Alter 15 Jahre und älter (Ausnahmen werden individuell betrachtet).',
                'pl': 'Wiek 15 lat i więcej (wyjątki są rozpatrywane indywidualnie).'
            },
            
            'Zkušební doba je 1 měsíc.': {
                'cz': 'Zkušební doba je 1 měsíc.',
                'en': 'Probation period is 1 month.',
                'de': 'Probezeit beträgt 1 Monat.',
                'pl': 'Okres próbny wynosi 1 miesiąc.'
            },
            'Probation period is 1 month.': {
                'cz': 'Zkušební doba je 1 měsíc.',
                'en': 'Probation period is 1 month.',
                'de': 'Probezeit beträgt 1 Monat.',
                'pl': 'Okres próbny wynosi 1 miesiąc.'
            },
            'Probezeit beträgt 1 Monat': {
                'cz': 'Zkušební doba je 1 měsíc.',
                'en': 'Probation period is 1 month.',
                'de': 'Probezeit beträgt 1 Monat.',
                'pl': 'Okres próbny wynosi 1 miesiąc.'
            },
            'Okres próbny wynosi 1 miesiąc.': {
                'cz': 'Zkušební doba je 1 měsíc.',
                'en': 'Probation period is 1 month.',
                'de': 'Probezeit beträgt 1 Monat.',
                'pl': 'Okres próbny wynosi 1 miesiąc.'
            },
      
            'Zkušenosti s ETS 2 a TMP vítány.': {
                'cz': 'Zkušenosti s ETS 2 a TMP vítány.',
                'en': 'Experience with ETS 2 and TMP welcome.',
                'de': 'Erfahrung mit ETS 2 und TMP willkommen.',
                'pl': 'Doświadczenie z ETS 2 i TMP mile widziane.'
            },
            'Experience with ETS 2 and TMP welcome.': {
                'cz': 'Zkušenosti s ETS 2 a TMP vítány.',
                'en': 'Experience with ETS 2 and TMP welcome.',
                'de': 'Erfahrung mit ETS 2 und TMP willkommen.',
                'pl': 'Doświadczenie z ETS 2 i TMP mile widziane.'}
                ,
            'Erfahrung mit ETS 2 und TMP willkommen.': {
                'cz': 'Zkušenosti s ETS 2 a TMP vítány.',
                'en': 'Experience with ETS 2 and TMP welcome.',
                'de': 'Erfahrung mit ETS 2 und TMP willkommen.',
                'pl': 'Doświadczenie z ETS 2 i TMP mile widziane.'
            },
            'Doświadczenie z ETS 2 i TMP mile widziane.': {
                'cz': 'Zkušenosti s ETS 2 a TMP vítány.',
                'en': 'Experience with ETS 2 and TMP welcome.',
                'de': 'Erfahrung mit ETS 2 und TMP willkommen.',
                'pl': 'Doświadczenie z ETS 2 i TMP mile widziane.'
            },
      
            'Pokud u nás vydržíš 3 a více měsíců - možnost osobního ohodnocení.': {
                'cz': 'Pokud u nás vydržíš 3 a více měsíců - možnost osobního ohodnocení.',
                'en': 'If you stay with us for 3 months or more - possibility of personal evaluation.',
                'de': 'Wenn Sie 3 Monate oder länger bei uns bleiben - Möglichkeit einer persönlichen Bewertung.',
                'pl': 'Jeśli zostaniesz z nami przez 3 miesiące lub dłużej - możliwość oceny osobistej.'
            },
            'If you stay with us for 3 months or more - possibility of personal evaluation.': {
                'cz': 'Pokud u nás vydržíš 3 a více měsíců - možnost osobního ohodnocení.',
                'en': 'If you stay with us for 3 months or more - possibility of personal evaluation.',
                'de': 'Wenn Sie 3 Monate oder länger bei uns bleiben - Möglichkeit einer persönlichen Bewertung.',
                'pl': 'Jeśli zostaniesz z nami przez 3 miesiące lub dłużej - możliwość oceny osobistej.'
            },
            'Wenn Sie 3 Monate oder länger bei uns bleiben - Möglichkeit einer persönlichen Bewertung.': {
                'cz': 'Pokud u nás vydržíš 3 a více měsíců - možnost osobního ohodnocení.',
                'en': 'If you stay with us for 3 months or more - possibility of personal evaluation.',
                'de': 'Wenn Sie 3 Monate oder länger bei uns bleiben - Möglichkeit einer persönlichen Bewertung.',
                'pl': 'Jeśli zostaniesz z nami przez 3 miesiące lub dłużej - możliwość oceny osobistej.'
            },
            'Jeśli zostaniesz z nami przez 3 miesiące lub dłużej - możliwość oceny osobistej.': {
                'cz': 'Pokud u nás vydržíš 3 a více měsíců - možnost osobního ohodnocení.',
                'en': 'If you stay with us for 3 months or more - possibility of personal evaluation.',
                'de': 'Wenn Sie 3 Monate oder länger bei uns bleiben - Möglichkeit einer persönlichen Bewertung.',
                'pl': 'Jeśli zostaniesz z nami przez 3 miesiące lub dłużej - możliwość oceny osobistej.'
            },
      
            'Musíte mít minimálně na Euro Truck Simulator 2 nahráno 20 hodiny.': {
                'cz': 'Musíte mít minimálně na Euro Truck Simulator 2 nahráno 20 hodiny.',
                'en': 'You must have at least 20 hours recorded on Euro Truck Simulator 2.',
                'de': 'Sie müssen mindestens 20 Stunden auf dem Euro Truck Simulator 2 aufnehmen.',
                'pl': 'Musisz mieć zarejestrowanych co najmniej 20 godzin na Euro Truck Simulator 2.'
            },
            'You must have at least 20 hours recorded on Euro Truck Simulator 2.': {
                'cz': 'Musíte mít minimálně na Euro Truck Simulator 2 nahráno 20 hodiny.',
                'en': 'You must have at least 20 hours recorded on Euro Truck Simulator 2.',
                'de': 'Sie müssen mindestens 20 Stunden auf dem Euro Truck Simulator 2 aufnehmen.',
                'pl': 'Musisz mieć zarejestrowanych co najmniej 20 godzin na Euro Truck Simulator 2.'
            },
            'Sie müssen mindestens 20 Stunden auf dem Euro Truck Simulator 2 aufnehmen.': {
                'cz': 'Musíte mít minimálně na Euro Truck Simulator 2 nahráno 20 hodiny.',
                'en': 'You must have at least 20 hours recorded on Euro Truck Simulator 2.',
                'de': 'Sie müssen mindestens 20 Stunden auf dem Euro Truck Simulator 2 aufnehmen.',
                'pl': 'Musisz mieć zarejestrowanych co najmniej 20 godzin na Euro Truck Simulator 2.'},
            'Musisz mieć zarejestrowanych co najmniej 20 godzin na Euro Truck Simulator 2.': {
                'cz': 'Musíte mít minimálně na Euro Truck Simulator 2 nahráno 20 hodiny.',
                'en': 'You must have at least 20 hours recorded on Euro Truck Simulator 2.',
                'de': 'Sie müssen mindestens 20 Stunden auf dem Euro Truck Simulator 2 aufnehmen.',
                'pl': 'Musisz mieć zarejestrowanych co najmniej 20 godzin na Euro Truck Simulator 2.'
            },
      
            'Je potřeba mít Discord, funkční mikrofon a TruckersMP klienta kvůli firemním konvojům.': {
                'cz': 'Je potřeba mít Discord, funkční mikrofon a TruckersMP klienta kvůli firemním konvojům.',
                'en': 'You need to have Discord, a functional microphone, and TruckersMP client for company convoys.',
                'de': 'Sie benötigen Discord, ein funktionierendes Mikrofon und den TruckersMP-Client für Firmenkonvois.',
                'pl': 'Musisz mieć Discord, działający mikrofon i klienta TruckersMP do firmowych konwojów.'
            },
            'You need to have Discord, a functional microphone, and TruckersMP client for company convoys.': {
                'cz': 'Je potřeba mít Discord, funkční mikrofon a TruckersMP klienta kvůli firemním konvojům.',
                'en': 'You need to have Discord, a functional microphone, and TruckersMP client for company convoys.',
                'de': 'Sie benötigen Discord, ein funktionierendes Mikrofon und den TruckersMP-Client für Firmenkonvois.',
                'pl': 'Musisz mieć Discord, działający mikrofon i klienta TruckersMP do firmowych konwojów.'
            },
            'Sie benötigen Discord, ein funktionierendes Mikrofon und den TruckersMP-Client für Firmenkonvois.': {
                'cz': 'Je potřeba mít Discord, funkční mikrofon a TruckersMP klienta kvůli firemním konvojům.',
                'en': 'You need to have Discord, a functional microphone, and TruckersMP client for company convoys.',
                'de': 'Sie benötigen Discord, ein funktionierendes Mikrofon und den TruckersMP-Client für Firmenkonvois.',
                'pl': 'Musisz mieć Discord, działający mikrofon i klienta TruckersMP do firmowych konwojów.'
            },
            'Musisz mieć Discord, działający mikrofon i klienta TruckersMP do firmowych konwojów.': {
                'cz': 'Je potřeba mít Discord, funkční mikrofon a TruckersMP klienta kvůli firemním konvojům.',
                'en': 'You need to have Discord, a functional microphone, and TruckersMP client for company convoys.',
                'de': 'Sie benötigen Discord, ein funktionierendes Mikrofon und den TruckersMP-Client für Firmenkonvois.',
                'pl': 'Musisz mieć Discord, działający mikrofon i klienta TruckersMP do firmowych konwojów.'},
            
            'Nábor probíhá na našem Discordu (odkaz výše) majitelem firmy nebo některým z ředitelů.': {
                'cz': 'Nábor probíhá na našem Discordu (odkaz výše) majitelem firmy nebo některým z ředitelů.',
                'en': 'Recruitment takes place on our Discord (link above) by the owner of the company or one of the directors.',
                'de': 'Die Rekrutierung erfolgt über unseren Discord (oben verlinkt) durch den Eigentümer des Unternehmens oder einen der Direktoren.',
                'pl': 'Rekrutacja odbywa się na naszym Discordzie (powyższy link) przez właściciela firmy lub jednego z dyrektorów.'
            },
            'Recruitment takes place on our Discord (link above) by the owner of the company or one of the directors.': {
                'cz': 'Nábor probíhá na našem Discordu (odkaz výše) majitelem firmy nebo některým z ředitelů.',
                'en': 'Recruitment takes place on our Discord (link above) by the owner of the company or one of the directors.',
                'de': 'Die Rekrutierung erfolgt über unseren Discord (oben verlinkt) durch den Eigentümer des Unternehmens oder einen der Direktoren.',
                'pl': 'Rekrutacja odbywa się na naszym Discordzie (powyższy link) przez właściciela firmy lub jednego z dyrektorów.'
            },
            'Die Rekrutierung erfolgt über unseren Discord (oben verlinkt) durch den Eigentümer des Unternehmens oder einen der Direktoren.': {
                'cz': 'Nábor probíhá na našem Discordu (odkaz výše) majitelem firmy nebo některým z ředitelů.',
                'en': 'Recruitment takes place on our Discord (link above) by the owner of the company or one of the directors.',
                'de': 'Die Rekrutierung erfolgt über unseren Discord (oben verlinkt) durch den Eigentümer des Unternehmens oder einen der Direktoren.',
                'pl': 'Rekrutacja odbywa się na naszym Discordzie (powyższy link) przez właściciela firmy lub jednego z dyrektorów.'
            },
            'Rekrutacja odbywa się na naszym Discordzie (powyższy link) przez właściciela firmy lub jednego z dyrektorów.': {
                'cz': 'Nábor probíhá na našem Discordu (odkaz výše) majitelem firmy nebo některým z ředitelů.',
                'en': 'Recruitment takes place on our Discord (link above) by the owner of the company or one of the directors.',
                'de': 'Die Rekrutierung erfolgt über unseren Discord (oben verlinkt) durch den Eigentümer des Unternehmens oder einen der Direktoren.',
                'pl': 'Rekrutacja odbywa się na naszym Discordzie (powyższy link) przez właściciela firmy lub jednego z dyrektorów.'
            },
            
            'Dodržujte pravidla TrucksBook a TruckersMP.': {
                'cz': 'Dodržujte pravidla TrucksBook a TruckersMP.',
                'en': 'Follow the rules of TrucksBook and TruckersMP.',
                'de': 'Befolgen Sie die Regeln von TrucksBook und TruckersMP.',
                'pl': 'Zachowuj się zgodnie z zasadami TrucksBook i TruckersMP.'
            },
            'Follow the rules of TrucksBook and TruckersMP.': {
                'cz': 'Dodržujte pravidla TrucksBook a TruckersMP.',
                'en': 'Follow the rules of TrucksBook and TruckersMP.',
                'de': 'Befolgen Sie die Regeln von TrucksBook und TruckersMP.',
                'pl': 'Zachowuj się zgodnie z zasadami TrucksBook i TruckersMP.'
            },
            'Befolgen Sie die Regeln von TrucksBook und TruckersMP.': {
                'cz': 'Dodržujte pravidla TrucksBook a TruckersMP.',
                'en': 'Follow the rules of TrucksBook and TruckersMP.',
                'de': 'Befolgen Sie die Regeln von TrucksBook und TruckersMP.',
                'pl': 'Zachowuj się zgodnie z zasadami TrucksBook i TruckersMP.'
            },
            'Zachowuj się zgodnie z zasadami TrucksBook i TruckersMP.': {
                'cz': 'Dodržujte pravidla TrucksBook a TruckersMP.',
                'en': 'Follow the rules of TrucksBook and TruckersMP.',
                'de': 'Befolgen Sie die Regeln von TrucksBook und TruckersMP.',
                'pl': 'Zachowuj się zgodnie z zasadami TrucksBook i TruckersMP.'
            },
            
            'Musíte mít na našem discordu sjednocené nicky na TrucksBooku a TruckersMP.': {
                'cz': 'Musíte mít na našem discordu sjednocené nicky na TrucksBooku a TruckersMP.',
                'en': 'You must have unified nicknames on our Discord for TrucksBook and TruckersMP.',
                'de': 'Sie müssen einheitliche Spitznamen auf unserem Discord für TrucksBook und TruckersMP haben.',
                'pl': 'Musisz mieć zharmonizowane pseudonimy na naszym Discordzie dla TrucksBook i TruckersMP.'
            },
            'You must have unified nicknames on our Discord for TrucksBook and TruckersMP.': {
                'cz': 'Musíte mít na našem discordu sjednocené nicky na TrucksBooku a TruckersMP.',
                'en': 'You must have unified nicknames on our Discord for TrucksBook and TruckersMP.',
                'de': 'Sie müssen einheitliche Spitznamen auf unserem Discord für TrucksBook und TruckersMP haben.',
                'pl': 'Musisz mieć zharmonizowane pseudonimy na naszym Discordzie dla TrucksBook i TruckersMP.'
            },
            'Sie müssen einheitliche Spitznamen auf unserem Discord für TrucksBook und TruckersMP haben.': {
                'cz': 'Musíte mít na našem discordu sjednocené nicky na TrucksBooku a TruckersMP.',
                'en': 'You must have unified nicknames on our Discord for TrucksBook and TruckersMP.',
                'de': 'Sie müssen einheitliche Spitznamen auf unserem Discord für TrucksBook und TruckersMP haben.',
                'pl': 'Musisz mieć zharmonizowane pseudonimy na naszym Discordzie dla TrucksBook i TruckersMP.'
            },
            'Musisz mieć zharmonizowane pseudonimy na naszym Discordzie dla TrucksBook i TruckersMP.': {
                'cz': 'Musíte mít na našem discordu sjednocené nicky na TrucksBooku a TruckersMP.',
                'en': 'You must have unified nicknames on our Discord for TrucksBook and TruckersMP.',
                'de': 'Sie müssen einheitliche Spitznamen auf unserem Discord für TrucksBook und TruckersMP haben.',
                'pl': 'Musisz mieć zharmonizowane pseudonimy na naszym Discordzie dla TrucksBook i TruckersMP.'
            },
            
            // Co vám můžeme nabídnout?
            'Co vám můžeme nabídnout?': {
                'cz': 'Co vám můžeme nabídnout?',
                'en': 'What can we offer you?',
                'de': 'Was können wir Ihnen anbieten?',
                'pl': 'Co możemy Ci zaoferować?'},
            'What can we offer you?': {
                'cz': 'Co vám můžeme nabídnout?',
                'en': 'What can we offer you?',
                'de': 'Was können wir Ihnen anbieten?',
                'pl': 'Co możemy Ci zaoferować?'
            },
            'Was können wir Ihnen anbieten?': {
                'cz': 'Co vám můžeme nabídnout?',
                'en': 'What can we offer you?',
                'de': 'Was können wir Ihnen anbieten?',
                'pl': 'Co możemy Ci zaoferować?'
            },
            'Co możemy Ci zaoferować?': {
                'cz': 'Co vám můžeme nabídnout?',
                'en': 'What can we offer you?',
                'de': 'Was können wir Ihnen anbieten?',
                'pl': 'Co możemy Ci zaoferować?'
            },
            
            'Pravidelné konvoje': {
                'cz': 'Pravidelné konvoje',
                'en': 'Regular convoys',
                'de': 'Regelmäßige Konvois',
                'pl': 'Regularne konwoje'
            },
            'Regular convoys': {
                'cz': 'Pravidelné konvoje',
                'en': 'Regular convoys',
                'de': 'Regelmäßige Konvois',
                'pl': 'Regularne konwoje'
            },
            'Regelmäßige Konvois': {
                'cz': 'Pravidelné konvoje',
                'en': 'Regular convoys',
                'de': 'Regelmäßige Konvois',
                'pl': 'Regularne konwoje'
            },
            'Regularne konwoje': {
                'cz': 'Pravidelné konvoje',
                'en': 'Regular convoys',
                'de': 'Regelmäßige Konvois',
                'pl': 'Regularne konwoje'
            },
      
            'Jezdíme minimálně 2 konvoje měsíčně.': {
                'cz': 'Jezdíme minimálně 2 konvoje měsíčně.',
                'en': 'We drive at least 2 convoys per month.',
                'de': 'Wir fahren mindestens 2 Konvois pro Monat.',
                'pl': 'Jedziemy co najmniej 2 konwoje miesięcznie.'
            },
            'We drive at least 2 convoys per month.': {
                'cz': 'Jezdíme minimálně 2 konvoje měsíčně.',
                'en': 'We drive at least 2 convoys per month.',
                'de': 'Wir fahren mindestens 2 Konvois pro Monat.',
                'pl': 'Jedziemy co najmniej 2 konwoje miesięcznie.'
            },
            'Wir fahren mindestens 2 Konvois pro Monat.': {
                'cz': 'Jezdíme minimálně 2 konvoje měsíčně.',
                'en': 'We drive at least 2 convoys per month.',
                'de': 'Wir fahren mindestens 2 Konvois pro Monat.',
                'pl': 'Jedziemy co najmniej 2 konwoje miesięcznie.'
            },
            'Jedziemy co najmniej 2 konwoje miesięcznie.': {
                'cz': 'Jezdíme minimálně 2 konvoje měsíčně.',
                'en': 'We drive at least 2 convoys per month.',
                'de': 'Wir fahren mindestens 2 Konvois pro Monat.',
                'pl': 'Jedziemy co najmniej 2 konwoje miesięcznie.'
            },
      
            'Konvoje mají většinou délku 1 000 - 1 500 Km.': {
                'cz': 'Konvoje mají většinou délku 1 000 - 1 500 Km.',
                'en': 'Convoys are usually 1,000 - 1,500 km long.',
                'de': 'Konvois sind normalerweise 1.000 - 1.500 km lang.',
                'pl': 'Konwoje zazwyczaj mają 1 000 - 1 500 km długości.'
            },
            'Convoys are usually 1,000 - 1,500 km long.': {
                'cz': 'Konvoje mají většinou délku 1 000 - 1 500 Km.',
                'en': 'Convoys are usually 1,000 - 1,500 km long.',
                'de': 'Konvois sind normalerweise 1.000 - 1.500 km lang.',
                'pl': 'Konwoje zazwyczaj mają 1 000 - 1 500 km długości.'
            },
            'Konvois sind normalerweise 1.000 - 1.500 km lang.': {
                'cz': 'Konvoje mají většinou délku 1 000 - 1 500 Km.',
                'en': 'Convoys are usually 1,000 - 1,500 km long.',
                'de': 'Konvois sind normalerweise 1.000 - 1.500 km lang.',
                'pl': 'Konwoje zazwyczaj mają 1 000 - 1 500 km długości.'
            },
            'Konwoje zazwyczaj mają 1 000 - 1 500 km długości.': {
                'cz': 'Konvoje mají většinou délku 1 000 - 1 500 Km.',
                'en': 'Convoys are usually 1,000 - 1,500 km long.',
                'de': 'Konvois sind normalerweise 1.000 - 1.500 km lang.',
                'pl': 'Konwoje zazwyczaj mają 1 000 - 1 500 km długości.'
            },
      
            'Na konvojích si s námi užijete spoustu zábavy.': {
                'cz': 'Na konvojích si s námi užijete spoustu zábavy.',
                'en': 'You will have a lot of fun with us on the convoys.',
                'de': 'Sie werden viel Spaß mit uns auf den Konvois haben.',
                'pl': 'Będziesz się z nami świetnie bawić na konwojach.'
            },
            'You will have a lot of fun with us on the convoys.': {
                'cz': 'Na konvojích si s námi užijete spoustu zábavy.',
                'en': 'You will have a lot of fun with us on the convoys.',
                'de': 'Sie werden viel Spaß mit uns auf den Konvois haben.',
                'pl': 'Będziesz się z nami świetnie bawić na konwojach.'
            },
            'Sie werden viel Spaß mit uns auf den Konvois haben.': {
                'cz': 'Na konvojích si s námi užijete spoustu zábavy.',
                'en': 'You will have a lot of fun with us on the convoys.',
                'de': 'Sie werden viel Spaß mit uns auf den Konvois haben.',
                'pl': 'Będziesz się z nami świetnie bawić na konwojach.'
            },
            'Będziesz się z nami świetnie bawić na konwojach.': {
                'cz': 'Na konvojích si s námi užijete spoustu zábavy.',
                'en': 'You will have a lot of fun with us on the convoys.',
                'de': 'Sie werden viel Spaß mit uns auf den Konvois haben.',
                'pl': 'Będziesz się z nami świetnie bawić na konwojach.'
            },
      
            'Dobrý kolektiv': {
                'cz': 'Dobrý kolektiv',
                'en': 'Good team',
                'de': 'Gutes Team',
                'pl': 'Dobry zespół'
            },
            'Good team': {
                'cz': 'Dobrý kolektiv',
                'en': 'Good team',
                'de': 'Gutes Team',
                'pl': 'Dobry zespół'
            },
            'Gutes Team': {
                'cz': 'Dobrý kolektiv',
                'en': 'Good team',
                'de': 'Gutes Team',
                'pl': 'Dobry zespół'},
            'Dobry zespół': {
                'cz': 'Dobrý kolektiv',
                'en': 'Good team',
                'de': 'Gutes Team',
                'pl': 'Dobry zespół'
            },
      
            'V naší firmě máme úžasný kolektiv.': {
                'cz': 'V naší firmě máme úžasný kolektiv.',
                'en': 'We have an amazing team in our company.',
                'de': 'Wir haben ein tolles Team in unserem Unternehmen.',
                'pl': 'Mamy wspaniały zespół w naszej firmie.'
            },
            'We have an amazing team in our company.': {
                'cz': 'V naší firmě máme úžasný kolektiv.',
                'en': 'We have an amazing team in our company.',
                'de': 'Wir haben ein tolles Team in unserem Unternehmen.',
                'pl': 'Mamy wspaniały zespół w naszej firmie.'
            },
            'Wir haben ein tolles Team in unserem Unternehmen.': {
                'cz': 'V naší firmě máme úžasný kolektiv.',
                'en': 'We have an amazing team in our company.',
                'de': 'Wir haben ein tolles Team in unserem Unternehmen.',
                'pl': 'Mamy wspaniały zespół w naszej firmie.'
            },
            'Mamy wspaniały zespół w naszej firmie.': {
                'cz': 'V naší firmě máme úžasný kolektiv.',
                'en': 'We have an amazing team in our company.',
                'de': 'Wir haben ein tolles Team in unserem Unternehmen.',
                'pl': 'Mamy wspaniały zespół w naszej firmie.'
            },
      
            'Nesetkáte se zde s jakýmkoli urážením, kyberšikanou a dalším.': {
                'cz': 'Nesetkáte se zde s jakýmkoli urážením, kyberšikanou a dalším.',
                'en': 'You won\'t encounter any insults, cyberbullying, and the like here.',
                'de': 'Hier werden Sie auf keine Beleidigungen, Cybermobbing und Ähnliches stoßen.',
                'pl': 'Tutaj nie napotkasz żadnych obelg, cyberprzemocy i tym podobnych.'
            },
            'You won\'t encounter any insults, cyberbullying, and the like here.': {
                'cz': 'Nesetkáte se zde s jakýmkoli urážením, kyberšikanou a dalším.',
                'en': 'You won\'t encounter any insults, cyberbullying, and the like here.',
                'de': 'Hier werden Sie auf keine Beleidigungen, Cybermobbing und Ähnliches stoßen.',
                'pl': 'Tutaj nie napotkasz żadnych obelg, cyberprzemocy i tym podobnych.'
            },
            'Hier werden Sie auf keine Beleidigungen, Cybermobbing und Ähnliches stoßen.': {
                'cz': 'Nesetkáte se zde s jakýmkoli urážením, kyberšikanou a dalším.',
                'en': 'You won\'t encounter any insults, cyberbullying, and the like here.',
                'de': 'Hier werden Sie auf keine Beleidigungen, Cybermobbing und Ähnliches stoßen.',
                'pl': 'Tutaj nie napotkasz żadnych obelg, cyberprzemocy i tym podobnych.'
            },
            'Tutaj nie napotkasz żadnych obelg, cyberprzemocy i tym podobnych.': {
                'cz': 'Nesetkáte se zde s jakýmkoli urážením, kyberšikanou a dalším.',
                'en': 'You won\'t encounter any insults, cyberbullying, and the like here.',
                'de': 'Hier werden Sie auf keine Beleidigungen, Cybermobbing und Ähnliches stoßen.',
                'pl': 'Tutaj nie napotkasz żadnych obelg, cyberprzemocy i tym podobnych.'
            },
      
            'V případě problému vám pomůžeme s vyřešením.': {
                'cz': 'V případě problému vám pomůžeme s vyřešením.',
                'en': 'In case of a problem, we will help you solve it.',
                'de': 'Im Falle eines Problems werden wir Ihnen bei der Lösung helfen.',
                'pl': 'W przypadku problemu pomożemy Ci go rozwiązać.'
            },
            'In case of a problem, we will help you solve it.': {
                'cz': 'V případě problému vám pomůžeme s vyřešením.',
                'en': 'In case of a problem, we will help you solve it.',
                'de': 'Im Falle eines Problems werden wir Ihnen bei der Lösung helfen.',
                'pl': 'W przypadku problemu pomożemy Ci go rozwiązać.'
            },
            'Im Falle eines Problems werden wir Ihnen bei der Lösung helfen.': {
                'cz': 'V případě problému vám pomůžeme s vyřešením.',
                'en': 'In case of a problem, we will help you solve it.',
                'de': 'Im Falle eines Problems werden wir Ihnen bei der Lösung helfen.',
                'pl': 'W przypadku problemu pomożemy Ci go rozwiązać.'
            },
            'W przypadku problemu pomożemy Ci go rozwiązać.': {
                'cz': 'V případě problému vám pomůžeme s vyřešením.',
                'en': 'In case of a problem, we will help you solve it.',
                'de': 'Im Falle eines Problems werden wir Ihnen bei der Lösung helfen.',
                'pl': 'W przypadku problemu pomożemy Ci go rozwiązać.'
            },
            
            'Výhody': {
                'cz': 'Výhody',
                'en': 'Advantages',
                'de': 'Vorteile',
                'pl': 'Zalety'
            },
            'Advantages': {
                'cz': 'Výhody',
                'en': 'Advantages',
                'de': 'Vorteile',
                'pl': 'Zalety'
            },
            'Vorteile': {
                'cz': 'Výhody',
                'en': 'Advantages',
                'de': 'Vorteile',
                'pl': 'Zalety'
            },
            'Zalety': {
                'cz': 'Výhody',
                'en': 'Advantages',
                'de': 'Vorteile',
                'pl': 'Zalety'
            },
      
            'Pokud u nás vydržíš 3 a více měsíců máte možnost osobního ohodnocení.': {
                'cz': 'Pokud u nás vydržíš 3 a více měsíců máte možnost osobního ohodnocení.',
                'en': 'If you stay with us for 3 months or more, you have the opportunity for personal evaluation.',
                'de': 'Wenn Sie 3 Monate oder länger bei uns bleiben, haben Sie die Möglichkeit einer persönlichen Bewertung.',
                'pl': 'Jeśli zostaniesz z nami przez 3 miesiące lub dłużej, masz możliwość oceny osobistej.'
            },
            'If you stay with us for 3 months or more, you have the opportunity for personal evaluation.': {
                'cz': 'Pokud u nás vydržíš 3 a více měsíců máte možnost osobního ohodnocení.',
                'en': 'If you stay with us for 3 months or more, you have the opportunity for personal evaluation.',
                'de': 'Wenn Sie 3 Monate oder länger bei uns bleiben, haben Sie die Möglichkeit einer persönlichen Bewertung.',
                'pl': 'Jeśli zostaniesz z nami przez 3 miesiące lub dłużej, masz możliwość oceny osobistej.'
            },
            'Wenn Sie 3 Monate oder länger bei uns bleiben, haben Sie die Möglichkeit einer persönlichen Bewertung.': {
                'cz': 'Pokud u nás vydržíš 3 a více měsíců máte možnost osobního ohodnocení.',
                'en': 'If you stay with us for 3 months or more, you have the opportunity for personal evaluation.',
                'de': 'Wenn Sie 3 Monate oder länger bei uns bleiben, haben Sie die Möglichkeit einer persönlichen Bewertung.',
                'pl': 'Jeśli zostaniesz z nami przez 3 miesiące lub dłużej, masz możliwość oceny osobistej.'
            },
            'Jeśli zostaniesz z nami przez 3 miesiące lub dłużej, masz możliwość oceny osobistej.': {
                'cz': 'Pokud u nás vydržíš 3 a více měsíců máte možnost osobního ohodnocení.',
                'en': 'If you stay with us for 3 months or more, you have the opportunity for personal evaluation.',
                'de': 'Wenn Sie 3 Monate oder länger bei uns bleiben, haben Sie die Möglichkeit einer persönlichen Bewertung.',
                'pl': 'Jeśli zostaniesz z nami przez 3 miesiące lub dłużej, masz możliwość oceny osobistej.'
            },
            
            'Možnost zúčastnit se soutěže.': {
                'cz': 'Možnost zúčastnit se soutěže.',
                'en': 'Opportunity to participate in a competition.', 
                'de': 'Möglichkeit, an einem Wettbewerb teilzunehmen.',
                'pl': 'Możliwość udziału w konkursie.'
            },
            'Opportunity to participate in a competition.': {
                'cz': 'Možnost zúčastnit se soutěže.',
                'en': 'Opportunity to participate in a competition.',
                'de': 'Möglichkeit, an einem Wettbewerb teilzunehmen.',
                'pl': 'Możliwość udziału w konkursie.'
            },
            'Möglichkeit, an einem Wettbewerb teilzunehmen.': {
                'cz': 'Možnost zúčastnit se soutěže.',
                'en': 'Opportunity to participate in a competition.',
                'de': 'Möglichkeit, an einem Wettbewerb teilzunehmen.',
                'pl': 'Możliwość udziału w konkursie.'
            },
            'Możliwość udziału w konkursie.': {'cz': 'Možnost zúčastnit se soutěže.',
            'en': 'Opportunity to participate in a competition.',
            'de': 'Möglichkeit, an einem Wettbewerb teilzunehmen.',
            'pl': 'Możliwość udziału w konkursie.'
            },
      
            'Abyste se zúčastnili měsíční soutěže musíte ujet minimálně 30 000 km.': {
                'cz': 'Abyste se zúčastnili měsíční soutěže musíte ujet minimálně 30 000 km.',
                'en': 'To participate in the monthly competition, you must drive at least 30,000 km.',
                'de': 'Um am monatlichen Wettbewerb teilzunehmen, müssen Sie mindestens 30.000 km fahren.',
                'pl': 'Aby wziąć udział w cotygodniowym konkursie, musisz przejechać co najmniej 30 000 km.'
            },
            'To participate in the monthly competition, you must drive at least 30,000 km.': {
                'cz': 'Abyste se zúčastnili měsíční soutěže musíte ujet minimálně 30 000 km.',
                'en': 'To participate in the monthly competition, you must drive at least 30,000 km.',
                'de': 'Um am monatlichen Wettbewerb teilzunehmen, müssen Sie mindestens 30.000 km fahren.',
                'pl': 'Aby wziąć udział w cotygodniowym konkursie, musisz przejechać co najmniej 30 000 km.'
            },
            'Um am monatlichen Wettbewerb teilzunehmen, müssen Sie mindestens 30.000 km fahren.': {
                'cz': 'Abyste se zúčastnili měsíční soutěže musíte ujet minimálně 30 000 km.',
                'en': 'To participate in the monthly competition, you must drive at least 30,000 km.',
                'de': 'Um am monatlichen Wettbewerb teilzunehmen, müssen Sie mindestens 30.000 km fahren.',
                'pl': 'Aby wziąć udział w cotygodniowym konkursie, musisz przejechać co najmniej 30 000 km.'
            },
            'Aby wziąć udział w cotygodniowym konkursie, musisz przejechać co najmniej 30 000 km.': {
                'cz': 'Abyste se zúčastnili měsíční soutěže musíte ujet minimálně 30 000 km.',
                'en': 'To participate in the monthly competition, you must drive at least 30,000 km.',
                'de': 'Um am monatlichen Wettbewerb teilzunehmen, müssen Sie mindestens 30.000 km fahren.',
                'pl': 'Aby wziąć udział w cotygodniowym konkursie, musisz przejechać co najmniej 30 000 km.'
            }
        };
    
        function translateText(language) {
            const elements = document.querySelectorAll(' p, h1, h2, ul li a');
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
            selectedLanguageFlag.outerHTML = savedLanguageFlag;
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
}