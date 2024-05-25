import "./Pravidla.css"
import Menu from"../Menu/Menu"
import Animation from "../AnimationFrames/Animation"
import Flags_dark from "../Flag_dark/Flags_dark"
import Footer from "../Footer/Footer"
export default function Pravidla() {
  document.title = "Pravidla"
  return (
    <>
    <Menu/>
    <Animation/>
    <Flags_dark/>
         <div id="wrap">
    <div id="rules">
        <h2 className="secondTitle">Pravidla firmy</h2>
        <p>Neposílejte na Discord a Twitch nevhodný obsah.</p>
        <p>Řiďte se tím, co řekne vedení firmy.</p>
        <p>Dodržujte platná pravidla TruckersMP, Discordu a TrucksBooku.</p>
        <p>V případě nesplnění limitu nebo dlouhodobě neomluvené neaktivity bude dotyčný propuštěn. (neaktivita 3 a více týdnů).</p>
        <p>Při porušení pravidel ve zkušební době můžete být z firmy propuštěni ihned (zkušební doba 1 měsíc).</p>
        <p>Při porušení pravidel po zkušební době dostanete výstrahu, po třetí výstraze můžete být z firmy propuštěni ihned (3x a dost, záleží na vážnosti přestupku).</p>
    </div>
    <div id="rules2">
        <h2 className="secondTitle">Pravidla v konvojích</h2>
        <p>Před začátkem konvoje vždy mějte plně opravený a natankovaný tahač.</p>
        <p>V konvoji se vždy řídíme podle prvního řidiče.</p>
        <p>Dodržujeme dostatečné rozestupy mezi tahači (min 70m).</p>
        <p>V konvoji se nepředjíždíme.</p>
        <p>V konvoji dodržujeme pořadí ve kterém se vyjelo z firmy.</p>
        <p>Nenarážíme a neblokujeme ostatní hráče ani za cenu pomsty, od toho jsou reporty.</p>
        <p>Dodržujeme pravidla TruckersMP.</p>
        <p>Máte-li potíže s internetem držte se na konci konvoje.</p>
    </div>
 </div>
 <Footer/>
    </>
  )
}
