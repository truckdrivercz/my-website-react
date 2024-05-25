import "./Nabor.css"
import Menu from"../Menu/Menu"
import Animation from "../AnimationFrames/Animation"
import Flags_dark from "../Flag_dark/Flags_dark"
export default function Nabor(){
    document.title = "Nábor"
    return(
        <>
        <Menu/>
        <Animation/>
        <Flags_dark/>
                <div id="flexWrap">
            <div id="firstWrap">
                <div id="requirements">
                    <h1 className="title">Požadavky na vstup</h1>
                    <p>Věk 15 let a více (výjimky se posuzují individuálně).</p>
                    <p>Zkušební doba je 1 měsíc.</p>
                    <p>Zkušenosti s ETS 2 a TMP vítány.</p>
                    <p>Pokud u nás vydržíš 3 a více měsíců - možnost osobního ohodnocení.</p>
                    <p>Musíte mít minimálně na Euro Truck Simulator 2 nahráno 20 hodiny.</p>
                    <p>Je potřeba mít Discord, funkční mikrofon a TruckersMP klienta kvůli firemním konvojům.</p>
                    <p>Nábor probíhá na našem Discordu (odkaz výše) majitelem firmy nebo některým z ředitelů.</p>
                    <p>Dodržujte pravidla TrucksBook a TruckersMP.</p>
                    <p>Musíte mít na našem discordu sjednocené nicky na TrucksBooku a TruckersMP.</p>
                </div>
            </div>
        
            <div id="secondWrap">
                <div id="offers">
                    <h1 className="title">Co vám můžeme nabídnout?</h1>
            
                    <h2 className="secondTitle">Pravidelné konvoje</h2>
                    <p>Jezdíme minimálně 2 konvoje měsíčně.</p>
                    <p>Konvoje mají většinou délku 1 000 - 1 500 Km.</p>
                    <p>Na konvojích si s námi užijete spoustu zábavy.</p>
            
                    <h2 className="secondTitle">Dobrý kolektiv</h2>
                    <p>V naší firmě máme úžasný kolektiv.</p>
                    <p>Nesetkáte se zde s jakýmkoli urážením, kyberšikanou a dalším.</p>
                    <p>V případě problému vám pomůžeme s vyřešením.</p>
    
                    <h2 className="secondTitle">Výhody</h2>
                    <p>Pokud u nás vydržíš 3 a více měsíců máte možnost osobního ohodnocení.</p>
                    <p>Možnost zúčastnit se soutěže.</p>
                    <p>Abyste se zúčastnili měsíční soutěže musíte ujet minimálně 30 000 km.</p>
                </div>
            </div>
        </div>
        <footer className="footer">
        <div>
            <h1 className="footerTitle"><a href="https://trucksbook.eu/company/133784"><span className="odkaz">VTC Hell Riders</span></a> | Eduard Orvoš | Ondřej Fíla</h1>
        </div>
    </footer>
        </>
    )
}