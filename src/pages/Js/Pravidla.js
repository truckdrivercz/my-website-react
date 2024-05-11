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
        'Pravidla firmy': {
            'cz': 'Pravidla firmy',
            'en': 'Company rules',
            'de': 'Firmenregeln',
            'pl': 'Regulamin firmy'
        },
        'Company rules': {
            'cz': 'Pravidla firmy',
            'en': 'Company rules',
            'de': 'Firmenregeln',
            'pl': 'Regulamin firmy'
        },
        'Firmenregeln': {
            'cz': 'Pravidla firmy',
            'en': 'Company rules',
            'de': 'Firmenregeln',
            'pl': 'Regulamin firmy'
        },
        'Regulamin firmy': {
            'cz': 'Pravidla firmy',
            'en': 'Company rules',
            'de': 'Firmenregeln',
            'pl': 'Regulamin firmy'
        },
   
        'Pravidla v konvojích': {
            'cz': 'Pravidla v konvojích',
            'en': 'Rules in convoys',
            'de': 'Regeln in Konvois',
            'pl': 'Zasady w konwojach'
        },
        'Rules in convoys': {
            'cz': 'Pravidla v konvojích',
            'en': 'Rules in convoys',
            'de': 'Regeln in Konvois',
            'pl': 'Zasady w konwojach'
        },
        'Regeln in Konvois': {
            'cz': 'Pravidla v konvojích',
            'en': 'Rules in convoys',
            'de': 'Regeln in Konvois',
            'pl': 'Zasady w konwojach'
        },
        'Zasady w konwojach': {
            'cz': 'Pravidla v konvojích',
            'en': 'Rules in convoys',
            'de': 'Regeln in Konvois',
            'pl': 'Zasady w konwojach'
        },

        'Neposílejte na Discord a Twitch nevhodný obsah.': {
            'cz': 'Neposílejte na Discord a Twitch nevhodný obsah.',
            'en': 'Do not post inappropriate content on Discord and Twitch.',
            'de': 'Veröffentlichen Sie keine unangemessenen Inhalte auf Discord und Twitch.',
            'pl': 'Nie publikuj nieodpowiednich treści na Discordzie i Twitchu.'
        },
        'Do not post inappropriate content on Discord and Twitch.': {
            'cz': 'Neposílejte na Discord a Twitch nevhodný obsah.',
            'en': 'Do not post inappropriate content on Discord and Twitch.',
            'de': 'Veröffentlichen Sie keine unangemessenen Inhalte auf Discord und Twitch.',
            'pl': 'Nie publikuj nieodpowiednich treści na Discordzie i Twitchu.'
        },
        'Vefolgen Sie die Anweisungen der Unternehmensleitung.': {
            'cz': 'Neposílejte na Discord a Twitch nevhodný obsah.',
            'en': 'Do not post inappropriate content on Discord and Twitch.',
            'de': 'Veröffentlichen Sie keine unangemessenen Inhalte auf Discord und Twitch.',
            'pl': 'Nie publikuj nieodpowiednich treści na Discordzie i Twitchu.'
        },
        'Nie publikuj nieodpowiednich treści na Discordzie i Twitchu.': {
            'cz': 'Neposílejte na Discord a Twitch nevhodný obsah.',
            'en': 'Do not post inappropriate content on Discord and Twitch.',
            'de': 'Veröffentlichen Sie keine unangemessenen Inhalte auf Discord und Twitch.',
            'pl': 'Nie publikuj nieodpowiednich treści na Discordzie i Twitchu.'
        },
        
        'Řiďte se tím, co řekne vedení firmy.': {
            'cz': 'Řiďte se tím, co řekne vedení firmy.',
            'en': 'Follow what the company management says.',
            'de': 'Befolgen Sie die Anweisungen der Unternehmensleitung.',
            'pl': 'Postępuj zgodnie ze wskazówkami kierownictwa firmy.'
        },
        'Follow what the company management says.': {
            'cz': 'Řiďte se tím, co řekne vedení firmy.',
            'en': 'Follow what the company management says.',
            'de': 'Befolgen Sie die Anweisungen der Unternehmensleitung.',
            'pl': 'Postępuj zgodnie ze wskazówkami kierownictwa firmy.'
        },
        'Befolgen Sie die Anweisungen der Unternehmensleitung.': {
            'cz': 'Řiďte se tím, co řekne vedení firmy.',
            'en': 'Follow what the company management says.',
            'de': 'Befolgen Sie die Anweisungen der Unternehmensleitung.',
            'pl': 'Postępuj zgodnie ze wskazówkami kierownictwa firmy.'},
        'Postępuj zgodnie ze wskazówkami kierownictwa firmy.': {
            'cz': 'Řiďte se tím, co řekne vedení firmy.',
            'en': 'Follow what the company management says.',
            'de': 'Befolgen Sie die Anweisungen der Unternehmensleitung.',
            'pl': 'Postępuj zgodnie ze wskazówkami kierownictwa firmy.'
        },

        'Dodržujte platná pravidla TruckersMP, Discordu a TrucksBooku.': {
            'cz': 'Dodržujte platná pravidla TruckersMP, Discordu a TrucksBooku.',
            'en': 'Follow the applicable rules of TruckersMP, Discord and TrucksBook.',
            'de': 'Befolgen Sie die geltenden Regeln von TruckersMP, Discord und TrucksBook.',
            'pl': 'Postępuj zgodnie z obowiązującymi zasadami TruckersMP, Discord i TrucksBook.'
        },
        'Follow the applicable rules of TruckersMP, Discord and TrucksBook.': {
            'cz': 'Dodržujte platná pravidla TruckersMP, Discordu a TrucksBooku.',
            'en': 'Follow the applicable rules of TruckersMP, Discord and TrucksBook.',
            'de': 'Befolgen Sie die geltenden Regeln von TruckersMP, Discord und TrucksBook.',
            'pl': 'Postępuj zgodnie z obowiązującymi zasadami TruckersMP, Discord i TrucksBook.'
        },
        'Befolgen Sie die geltenden Regeln von TruckersMP, Discord und TrucksBook.': {
            'cz': 'Dodržujte platná pravidla TruckersMP, Discordu a TrucksBooku.',
            'en': 'Follow the applicable rules of TruckersMP, Discord and TrucksBook.',
            'de': 'Befolgen Sie die geltenden Regeln von TruckersMP, Discord und TrucksBook.',
            'pl': 'Postępuj zgodnie z obowiązującymi zasadami TruckersMP, Discord i TrucksBook.'
        },
        'Postępuj zgodnie z obowiązującymi zasadami TruckersMP, Discord i TrucksBook.': {
            'cz': 'Dodržujte platná pravidla TruckersMP, Discordu a TrucksBooku.',
            'en': 'Follow the applicable rules of TruckersMP, Discord and TrucksBook.',
            'de': 'Befolgen Sie die geltenden Regeln von TruckersMP, Discord und TrucksBook.',
            'pl': 'Postępuj zgodnie z obowiązującymi zasadami TruckersMP, Discord i TrucksBook.'
        },

        'V případě nesplnění limitu nebo dlouhodobě neomluvené neaktivity bude dotyčný propuštěn. (neaktivita 3 a více týdnů).': {
            'cz': 'V případě nesplnění limitu nebo dlouhodobě neomluvené neaktivity bude dotyčný propuštěn. (neaktivita 3 a více týdnů).',
            'en': 'In case of failure to meet the limit or long-term unexcused inactivity, the person concerned will be dismissed. (inactivity of 3 or more weeks).',
            'de': 'Bei Nichteinhaltung des Limits oder längerfristiger unentschuldigter Untätigkeit erfolgt die Entlassung des Betroffenen. (Inaktivität von 3 oder mehr Wochen).',
            'pl': 'W przypadku niedotrzymania limitu lub długotrwałej nieusprawiedliwionej bierności osoba zainteresowana zostanie zwolniona. (brak aktywności przez 3 lub więcej tygodni).'
        },
        'In case of failure to meet the limit or long-term unexcused inactivity, the person concerned will be dismissed. (inactivity of 3 or more weeks).': {
            'cz': 'V případě nesplnění limitu nebo dlouhodobě neomluvené neaktivity bude dotyčný propuštěn. (neaktivita 3 a více týdnů).',
            'en': 'In case of failure to meet the limit or long-term unexcused inactivity, the person concerned will be dismissed. (inactivity of 3 or more weeks).',
            'de': 'Bei Nichteinhaltung des Limits oder längerfristiger unentschuldigter Untätigkeit erfolgt die Entlassung des Betroffenen. (Inaktivität von 3 oder mehr Wochen).',
            'pl': 'W przypadku niedotrzymania limitu lub długotrwałej nieusprawiedliwionej bierności osoba zainteresowana zostanie zwolniona. (brak aktywności przez 3 lub więcej tygodni).'
        },
        'Bei Nichteinhaltung des Limits oder längerfristiger unentschuldigter Untätigkeit erfolgt die Entlassung des Betroffenen. (Inaktivität von 3 oder mehr Wochen).': {
            'cz': 'V případě nesplnění limitu nebo dlouhodobě neomluvené neaktivity bude dotyčný propuštěn. (neaktivita 3 a více týdnů).',
            'en': 'In case of failure to meet the limit or long-term unexcused inactivity, the person concerned will be dismissed. (inactivity of 3 or more weeks).',
            'de': 'Bei Nichteinhaltung des Limits oder längerfristiger unentschuldigter Untätigkeit erfolgt die Entlassung des Betroffenen. (Inaktivität von 3 oder mehr Wochen).',
            'pl': 'W przypadku niedotrzymania limitu lub długotrwałej nieusprawiedliwionej bierności osoba zainteresowana zostanie zwolniona. (brak aktywności przez 3 lub więcej tygodni).'
        },
        'W przypadku niedotrzymania limitu lub długotrwałej nieusprawiedliwionej bierności osoba zainteresowana zostanie zwolniona. (brak aktywności przez 3 lub więcej tygodni).': {
            'cz': 'V případě nesplnění limitu nebo dlouhodobě neomluvené neaktivity bude dotyčný propuštěn. (neaktivita 3 a více týdnů).',
            'en': 'In case of failure to meet the limit or long-term unexcused inactivity, the person concerned will be dismissed. (inactivity of 3 or more weeks).',
            'de': 'Bei Nichteinhaltung des Limits oder längerfristiger unentschuldigter Untätigkeit erfolgt die Entlassung des Betroffenen. (Inaktivität von 3 oder mehr Wochen).',
            'pl': 'W przypadku niedotrzymania limitu lub długotrwałej nieusprawiedliwionej bierności osoba zainteresowana zostanie zwolniona. (brak aktywności przez 3 lub więcej tygodni).'
        },
        
        'Při porušení pravidel ve zkušební době můžete být z firmy propuštěni ihned (zkušební doba 1 měsíc).': {
            'cz': 'Při porušení pravidel ve zkušební době můžete být z firmy propuštěni ihned (zkušební doba 1 měsíc).',
            'en': 'If you break the rules during the trial period, you can be fired from the company immediately (trial period 1 month).',
            'de': 'Wenn Sie während der Probezeit gegen die Regeln verstoßen, können Sie sofort aus dem Unternehmen entlassen werden (Probezeit 1 Monat).',
            'pl': 'Jeśli złamiesz zasady w okresie próbnym, możesz zostać natychmiast wyrzucony z firmy (okres próbny 1 miesiąc).'
        },
        'If you break the rules during the trial period, you can be fired from the company immediately (trial period 1 month).': {
            'cz': 'Při porušení pravidel ve zkušební době můžete být z firmy propuštěni ihned (zkušební doba 1 měsíc).',
            'en': 'If you break the rules during the trial period, you can be fired from the company immediately (trial period 1 month).',
            'de': 'Wenn Sie während der Probezeit gegen die Regeln verstoßen, können Sie sofort aus dem Unternehmen entlassen werden (Probezeit 1 Monat).',
            'pl': 'Jeśli złamiesz zasady w okresie próbnym, możesz zostać natychmiast wyrzucony z firmy (okres próbny 1 miesiąc).'
        },
        'Wenn Sie während der Probezeit gegen die Regeln verstoßen, können Sie sofort aus dem Unternehmen entlassen werden (Probezeit 1 Monat).': {
            'cz': 'Při porušení pravidel ve zkušební době můžete být z firmy propuštěni ihned (zkušební doba 1 měsíc).',
            'en': 'If you break the rules during the trial period, you can be fired from the company immediately (trial period 1 month).',
            'de': 'Wenn Sie während der Probezeit gegen die Regeln verstoßen, können Sie sofort aus dem Unternehmen entlassen werden (Probezeit 1 Monat).',
            'pl': 'Jeśli złamiesz zasady w okresie próbnym, możesz zostać natychmiast wyrzucony z firmy (okres próbny 1 miesiąc).'
        },
        'Jeśli złamiesz zasady w okresie próbnym, możesz zostać natychmiast wyrzucony z firmy (okres próbny 1 miesiąc).': {
            'cz': 'Při porušení pravidel ve zkušební době můžete být z firmy propuštěni ihned (zkušební doba 1 měsíc).',
            'en': 'If you break the rules during the trial period, you can be fired from the company immediately (trial period 1 month).',
            'de': 'Wenn Sie während der Probezeit gegen die Regeln verstoßen, können Sie sofort aus dem Unternehmen entlassen werden (Probezeit 1 Monat).',
            'pl': 'Jeśli złamiesz zasady w okresie próbnym, możesz zostać natychmiast wyrzucony z firmy (okres próbny 1 miesiąc).'
        },

        'Při porušení pravidel po zkušební době dostanete výstrahu, po třetí výstraze můžete být z firmy propuštěni ihned (3x a dost, záleží na vážnosti přestupku).': {
            'cz': 'Při porušení pravidel po zkušební době dostanete výstrahu, po třetí výstraze můžete být z firmy propuštěni ihned (3x a dost, záleží na vážnosti přestupku).',
            'en': 'If you break the rules after the trial period, you will receive a warning, after the third warning you can be fired from the company immediately (3 times is enough, depending on the seriousness of the offense).',
            'de': 'Sollten Sie nach Ablauf der Probezeit gegen die Regeln verstoßen, erhalten Sie eine Verwarnung, nach der dritten Verwarnung können Sie sofort aus dem Unternehmen entlassen werden (3 Mal reichen je nach Schwere des Vergehens).',
            'pl': 'Jeśli po okresie próbnym złamiesz zasady, otrzymasz ostrzeżenie, po trzecim ostrzeżeniu możesz zostać natychmiast wyrzucony z firmy (wystarczą 3 razy, w zależności od powagi wykroczenia).'
        },
        'If you break the rules after the trial period, you will receive a warning, after the third warning you can be fired from the company immediately (3 times is enough, depending on the seriousness of the offense).': {
            'cz': 'Při porušení pravidel po zkušební době dostanete výstrahu, po třetí výstraze můžete být z firmy propuštěni ihned (3x a dost, záleží na vážnosti přestupku).',
            'en': 'If you break the rules after the trial period, you will receive a warning, after the third warning you can be fired from the company immediately (3 times is enough, depending on the seriousness of the offense).',
            'de': 'Sollten Sie nach Ablauf der Probezeit gegen die Regeln verstoßen, erhalten Sie eine Verwarnung, nach der dritten Verwarnung können Sie sofort aus dem Unternehmen entlassen werden (3 Mal reichen je nach Schwere des Vergehens).',
            'pl': 'Jeśli po okresie próbnym złamiesz zasady, otrzymasz ostrzeżenie, po trzecim ostrzeżeniu możesz zostać natychmiast wyrzucony z firmy (wystarczą 3 razy, w zależności od powagi wykroczenia).'
        },
        'Sollten Sie nach Ablauf der Probezeit gegen die Regeln verstoßen, erhalten Sie eine Verwarnung, nach der dritten Verwarnung können Sie sofort aus dem Unternehmen entlassen werden (3 Mal reichen je nach Schwere des Vergehens).': {
            'cz': 'Při porušení pravidel po zkušební době dostanete výstrahu, po třetí výstraze můžete být z firmy propuštěni ihned (3x a dost, záleží na vážnosti přestupku).',
            'en': 'If you break the rules after the trial period, you will receive a warning, after the third warning you can be fired from the company immediately (3 times is enough, depending on the seriousness of the offense).',
            'de': 'Sollten Sie nach Ablauf der Probezeit gegen die Regeln verstoßen, erhalten Sie eine Verwarnung, nach der dritten Verwarnung können Sie sofort aus dem Unternehmen entlassen werden (3 Mal reichen je nach Schwere des Vergehens).',
            'pl': 'Jeśli po okresie próbnym złamiesz zasady, otrzymasz ostrzeżenie, po trzecim ostrzeżeniu możesz zostać natychmiast wyrzucony z firmy (wystarczą 3 razy, w zależności od powagi wykroczenia).'
        },
        'Jeśli po okresie próbnym złamiesz zasady, otrzymasz ostrzeżenie, po trzecim ostrzeżeniu możesz zostać natychmiast wyrzucony z firmy (wystarczą 3 razy, w zależności od powagi wykroczenia).': {
            'cz': 'Při porušení pravidel po zkušební době dostanete výstrahu, po třetí výstraze můžete být z firmy propuštěni ihned (3x a dost, záleží na vážnosti přestupku).',
            'en': 'If you break the rules after the trial period, you will receive a warning, after the third warning you can be fired from the company immediately (3 times is enough, depending on the seriousness of the offense).',
            'de': 'Sollten Sie nach Ablauf der Probezeit gegen die Regeln verstoßen, erhalten Sie eine Verwarnung, nach der dritten Verwarnung können Sie sofort aus dem Unternehmen entlassen werden (3 Mal reichen je nach Schwere des Vergehens).',
            'pl': 'Jeśli po okresie próbnym złamiesz zasady, otrzymasz ostrzeżenie, po trzecim ostrzeżeniu możesz zostać natychmiast wyrzucony z firmy (wystarczą 3 razy, w zależności od powagi wykroczenia).'
        },

        'Před začátkem konvoje vždy mějte plně opravený a natankovaný tahač.': {
            'cz': 'Před začátkem konvoje vždy mějte plně opravený a natankovaný tahač.',
            'en': 'Always have the tractor fully repaired and fueled before starting the convoy.',
            'de': 'Lassen Sie den Traktor immer vollständig reparieren und betanken, bevor Sie mit dem Konvoi beginnen.',
            'pl': 'Przed rozpoczęciem konwoju zawsze należy całkowicie naprawić ciągnik i zatankować paliwo.'
        },
        'Always have the tractor fully repaired and fueled before starting the convoy.': {
            'cz': 'Před začátkem konvoje vždy mějte plně opravený a natankovaný tahač.',
            'en': 'Always have the tractor fully repaired and fueled before starting the convoy.',
            'de': 'Lassen Sie den Traktor immer vollständig reparieren und betanken, bevor Sie mit dem Konvoi beginnen.',
            'pl': 'Przed rozpoczęciem konwoju zawsze należy całkowicie naprawić ciągnik i zatankować paliwo.'
        },
        'Lassen Sie den Traktor immer vollständig reparieren und betanken, bevor Sie mit dem Konvoi beginnen.': {
            'cz': 'Před začátkem konvoje vždy mějte plně opravený a natankovaný tahač.',
            'en': 'Always have the tractor fully repaired and fueled before starting the convoy.',
            'de': 'Lassen Sie den Traktor immer vollständig reparieren und betanken, bevor Sie mit dem Konvoi beginnen.',
            'pl': 'Przed rozpoczęciem konwoju zawsze należy całkowicie naprawić ciągnik i zatankować paliwo.'
        },
        'Przed rozpoczęciem konwoju zawsze należy całkowicie naprawić ciągnik i zatankować paliwo.': {
            'cz': 'Před začátkem konvoje vždy mějte plně opravený a natankovaný tahač.',
            'en': 'Always have the tractor fully repaired and fueled before starting the convoy.',
            'de': 'Lassen Sie den Traktor immer vollständig reparieren und betanken, bevor Sie mit dem Konvoi beginnen.',
            'pl': 'Przed rozpoczęciem konwoju zawsze należy całkowicie naprawić ciągnik i zatankować paliwo.'
        },
        
        'V konvoji se vždy řídíme podle prvního řidiče.': {
            'cz': 'V konvoji se vždy řídíme podle prvního řidiče.',
            'en': 'In a convoy, we always follow the first driver.',
            'de': 'Im Konvoi folgen wir immer dem ersten Fahrer.',
            'pl': 'W konwoju zawsze podążamy za pierwszym kierowcą.'
        },
        'In a convoy, we always follow the first driver.': {
            'cz': 'V konvoji se vždy řídíme podle prvního řidiče.',
            'en': 'In a convoy, we always follow the first driver.',
            'de': 'Im Konvoi folgen wir immer dem ersten Fahrer.',
            'pl': 'W konwoju zawsze podążamy za pierwszym kierowcą.'
        },
        'Im Konvoi folgen wir immer dem ersten Fahrer.': {
            'cz': 'V konvoji se vždy řídíme podle prvního řidiče.',
            'en': 'In a convoy, we always follow the first driver.',
            'de': 'Im Konvoi folgen wir immer dem ersten Fahrer.',
            'pl': 'W konwoju zawsze podążamy za pierwszym kierowcą.'
        },
        'W konwoju zawsze podążamy za pierwszym kierowcą.': {
            'cz': 'V konvoji se vždy řídíme podle prvního řidiče.',
            'en': 'In a convoy, we always follow the first driver.',
            'de': 'Im Konvoi folgen wir immer dem ersten Fahrer.',
            'pl': 'W konwoju zawsze podążamy za pierwszym kierowcą.'
        },
        
        'Dodržujeme dostatečné rozestupy mezi tahači (min 70m).': {
            'cz': 'Dodržujeme dostatečné rozestupy mezi tahači (min 70m).',
            'en': 'We maintain sufficient distances between tractors (min. 70m).',
            'de': 'Wir halten ausreichende Abstände zwischen den Traktoren ein (mind. 70 m).',
            'pl': 'Zachowujemy odpowiednie odległości pomiędzy ciągnikami (min. 70m).'
        },
        'We maintain sufficient distances between tractors (min. 70m).': {
            'cz': 'Dodržujeme dostatečné rozestupy mezi tahači (min 70m).',
            'en': 'We maintain sufficient distances between tractors (min. 70m).',
            'de': 'Wir halten ausreichende Abstände zwischen den Traktoren ein (mind. 70 m).',
            'pl': 'Zachowujemy odpowiednie odległości pomiędzy ciągnikami (min. 70m).'
        },
        'Wir halten ausreichende Abstände zwischen den Traktoren ein (mind. 70 m).': {
            'cz': 'Dodržujeme dostatečné rozestupy mezi tahači (min 70m).',
            'en': 'We maintain sufficient distances between tractors (min. 70m).',
            'de': 'Wir halten ausreichende Abstände zwischen den Traktoren ein (mind. 70 m).',
            'pl': 'Zachowujemy odpowiednie odległości pomiędzy ciągnikami (min. 70m).'},
        'Zachowujemy odpowiednie odległości pomiędzy ciągnikami (min. 70m).': {
            'cz': 'Dodržujeme dostatečné rozestupy mezi tahači (min 70m).',
            'en': 'We maintain sufficient distances between tractors (min. 70m).',
            'de': 'Wir halten ausreichende Abstände zwischen den Traktoren ein (mind. 70 m).',
            'pl': 'Zachowujemy odpowiednie odległości pomiędzy ciągnikami (min. 70m).'
        },
        
        'V konvoji se nepředjíždíme.': {
            'cz': 'V konvoji se nepředjíždíme.',
            'en': 'We don\'t overtake each other in a convoy.',
            'de': 'Wir überholen uns nicht im Konvoi.',
            'pl': 'Nie wyprzedzamy się w konwoju.'
        },
        'We don\'t overtake each other in a convoy.': {
            'cz': 'V konvoji se nepředjíždíme.', 'en': 'We don\'t overtake each other in a convoy.', 'de': 'Wir überholen uns nicht im Konvoi.', 'pl': 'Nie wyprzedzamy się w konwoju.'},
        'Wir überholen uns nicht im Konvoi.': {
            'cz': 'V konvoji se nepředjíždíme.',
            'en': 'We don\'t overtake each other in a convoy.',
            'de': 'Wir überholen uns nicht im Konvoi.',
            'pl': 'Nie wyprzedzamy się w konwoju.'
        },
        'Nie wyprzedzamy się w konwoju.': {
            'cz': 'V konvoji se nepředjíždíme.',
            'en': 'We don\'t overtake each other in a convoy.',
            'de': 'Wir überholen uns nicht im Konvoi.',
            'pl': 'Nie wyprzedzamy się w konwoju.'
        },
        
        'V konvoji dodržujeme pořadí ve kterém se vyjelo z firmy.': {
            'cz': 'V konvoji dodržujeme pořadí ve kterém se vyjelo z firmy.',
            'en': 'In the convoy, we follow the order in which it left the company.',
            'de': 'Konvoi folgen wir der Reihenfolge, in der er das Unternehmen verlassen hat.',
            'pl': 'W konwoju kierujemy się kolejnością, w jakiej opuścił on kompanię.'
        },
        'In the convoy, we follow the order in which it left the company.': {
            'cz': 'V konvoji dodržujeme pořadí ve kterém se vyjelo z firmy.',
            'en': 'In the convoy, we follow the order in which it left the company.',
            'de': 'Im Konvoi folgen wir der Reihenfolge, in der er das Unternehmen verlassen hat.',
            'pl': 'W konwoju kierujemy się kolejnością, w jakiej opuścił on kompanię.'
        },
        'Im Konvoi folgen wir der Reihenfolge, in der er das Unternehmen verlassen hat.': {
            'cz': 'V konvoji dodržujeme pořadí ve kterém se vyjelo z firmy.',
            'en': 'In the convoy, we follow the order in which it left the company.',
            'de': 'Im Konvoi folgen wir der Reihenfolge, in der er das Unternehmen verlassen hat.',
            'pl': 'W konwoju kierujemy się kolejnością, w jakiej opuścił on kompanię.'
        },
        'W konwoju kierujemy się kolejnością, w jakiej opuścił on kompanię.':{
            'cz': 'V konvoji dodržujeme pořadí ve kterém se vyjelo z firmy.',
            'en': 'In the convoy, we follow the order in which it left the company.',
            'de': 'Im Konvoi folgen wir der Reihenfolge, in der er das Unternehmen verlassen hat.',
            'pl': 'W konwoju kierujemy się kolejnością, w jakiej opuścił on kompanię.'
        },
        
        'Nenarážíme a neblokujeme ostatní hráče ani za cenu pomsty, od toho jsou reporty.': {
            'cz': 'Nenarážíme a neblokujeme ostatní hráče ani za cenu pomsty, od toho jsou reporty.',
            'en': 'We don\'t bash or block other players even at the cost of revenge, that\'s what reports are for.',
            'de': 'Wir verprügeln oder blockieren andere Spieler nicht, auch nicht um den Preis der Rache, dafür sind Berichte da.',
            'pl': 'Nie atakujemy ani nie blokujemy innych graczy, nawet za cenę zemsty, po to są raporty.'
        },
        'We don\'t bash or block other players even at the cost of revenge, that\'s what reports are for.': {
            'cz': 'Nenarážíme a neblokujeme ostatní hráče ani za cenu pomsty, od toho jsou reporty.',
            'en': 'We don\'t bash or block other players even at the cost of revenge, that\'s what reports are for.',
            'de': 'Wir verprügeln oder blockieren andere Spieler nicht, auch nicht um den Preis der Rache, dafür sind Berichte da.',
            'pl': 'Nie atakujemy ani nie blokujemy innych graczy, nawet za cenę zemsty, po to są raporty.'
        },
        'Wir verprügeln oder blockieren andere Spieler nicht, auch nicht um den Preis der Rache, dafür sind Berichte da.': {
            'cz': 'Nenarážíme a neblokujeme ostatní hráče ani za cenu pomsty, od toho jsou reporty.',
            'en': 'We don\'t bash or block other players even at the cost of revenge, that\'s what reports are for.',
            'de': 'Wir verprügeln oder blockieren andere Spieler nicht, auch nicht um den Preis der Rache, dafür sind Berichte da.',
            'pl': 'Nie atakujemy ani nie blokujemy innych graczy, nawet za cenę zemsty, po to są raporty.'
        },
        'Nie atakujemy ani nie blokujemy innych graczy, nawet za cenę zemsty, po to są raporty.': {
            'cz': 'Nenarážíme a neblokujeme ostatní hráče ani za cenu pomsty, od toho jsou reporty.',
            'en': 'We don\'t bash or block other players even at the cost of revenge, that\'s what reports are for.',
            'de': 'Wir verprügeln oder blockieren andere Spieler nicht, auch nicht um den Preis der Rache, dafür sind Berichte da.',
            'pl': 'Nie atakujemy ani nie blokujemy innych graczy, nawet za cenę zemsty, po to są raporty.'
        },
        
        'Dodržujeme pravidla TruckersMP.': {
            'cz': 'Dodržujeme pravidla TruckersMP.',
            'en': 'We follow TruckersMP rules.',
            'de': 'Wir befolgen die TruckersMP-Regeln.',
            'pl': 'Przestrzegamy zasad TruckersMP.'
        },
        'We follow TruckersMP rules.': {
            'cz': 'Dodržujeme pravidla TruckersMP.',
            'en': 'We follow TruckersMP rules.',
            'de': 'Wir befolgen die TruckersMP-Regeln.',
            'pl': 'Przestrzegamy zasad TruckersMP.'
        },
        'Wir befolgen die TruckersMP-Regeln.': {
            'cz': 'Dodržujeme pravidla TruckersMP.',
            'en': 'We follow TruckersMP rules.',
            'de': 'Wir befolgen die TruckersMP-Regeln.',
            'pl': 'Przestrzegamy zasad TruckersMP.'
        },
        'Przestrzegamy zasad TruckersMP.': {
            'cz': 'Dodržujeme pravidla TruckersMP.',
            'en': 'We follow TruckersMP rules.',
            'de': 'Wir befolgen die TruckersMP-Regeln.',
            'pl': 'Przestrzegamy zasad TruckersMP.'
        },
        
        'Máte-li potíže s internetem držte se na konci konvoje.': {
            'cz': 'Máte-li potíže s internetem držte se na konci konvoje.',
            'en': 'If you have problems with the Internet, stay at the end of the convoy.',
            'de': 'Wenn Sie Probleme mit dem Internet haben, bleiben Sie am Ende des Konvois.',
            'pl': 'Jeśli masz problemy z Internetem, pozostań na końcu konwoju.'
        },
        'If you have problems with the Internet, stay at the end of the convoy.': {
            'cz': 'Máte-li potíže s internetem držte se na konci konvoje.',
            'en': 'If you have problems with the Internet, stay at the end of the convoy.',
            'de': 'Wenn Sie Probleme mit dem Internet haben, bleiben Sie am Ende des Konvois.',
            'pl': 'Jeśli masz problemy z Internetem, pozostań na końcu konwoju.'
        },
        'Wenn Sie Probleme mit dem Internet haben, bleiben Sie am Ende des Konvois.': {
            'cz': 'Máte-li potíže s internetem držte se na konci konvoje.',
            'en': 'If you have problems with the Internet, stay at the end of the convoy.',
            'de': 'Wenn Sie Probleme mit dem Internet haben, bleiben Sie am Ende des Konvois.',
            'pl': 'Jeśli masz problemy z Internetem, pozostań na końcu konwoju.'
        },
        'Jeśli masz problemy z Internetem, pozostań na końcu konwoju.': {
            'cz': 'Máte-li potíže s internetem držte se na konci konvoje.',
            'en': 'If you have problems with the Internet, stay at the end of the convoy.',
            'de': 'Wenn Sie Probleme mit dem Internet haben, bleiben Sie am Ende des Konvois.',
            'pl': 'Jeśli masz problemy z Internetem, pozostań na końcu konwoju.'
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
    };

    function translateText(language) {
        const elements = document.querySelectorAll(' p, h2, ul li a');
        elements.forEach(element => {
            let originalText = element.textContent.trim();
            if (translations.hasOwnProperty(originalText)) {
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