import "./Konvoje.css"
import Menu from "../Menu/Menu"
import Animation from "../AnimationFrames/Animation"
import Flags_dark from "../Flag_dark/Flags_dark"
export default function Konvoje(){
    document.title = "Konvoje"
    return(
        <>
        <Menu/>
        <Animation/>
        <Flags_dark/>
            <div id="main">
        <div id="info1">
            <h1>ITVTC 41ST PUBLIC CONVOY</h1>
            <p>Datum: 5. 5. 2024</p>
            <p>Začátek: Lyon (Stain Bruch)</p>
            <p>Cíl: Calais (Port)</p>
            <p>Vzdálenost: 1111 km</p>
            <p>Pauza: Ne</p>
            <p>DLC: Ne</p>
            <p>Doprovodná vozidla: Ano</p>
            <p>Server: TBD</p>
            <p>Sraz: 14:00</p>
            <p>Odjezd: 15:00</p>
            <p><a className="info" href="https://truckersmp.com/events/19432">Map</a></p>
            <p><a className="zona" href="https://notime.zone/NtkET0u9FL5-5">Zone</a></p>
            <p><a className="rezervace" href="https://hub.indiantruckers.company/slots/11">Reservation</a></p>
            <p><a className="rezervace" href="https://imgur.com/JgxR4SP">Public slot</a></p>
        </div>
        <div id="info2">
            <h1>ITVTC 40TH PUBLIC CONVOY</h1>
            <p>Datum: 23. 6. 2024</p>
            <p>Začátek: Glasgow (Slots)</p>
            <p>Cíl: Cardiff (Stein Bruch)</p>
            <p>Vzdálenost: 1048 km</p>
            <p>Pauza: Ne</p>
            <p>DLC: Ne</p>
            <p>Doprovodná vozidla: Ano</p>
            <p>Server: TBD</p>
            <p>Sraz: 14:00</p>
            <p>Odjezd: 15:00</p>
            <p><a className="info" href="https://truckersmp.com/events/20216">Map</a></p>
            <p><a className="zona" href="https://notime.zone/NoSa8-sbSqXx5">Zone</a></p>
            <p><a className="rezervace" href="https://hub.indiantruckers.company/slots/10">Reservation</a></p>
            <p><a className="rezervace" href="https://hub.indiantruckers.company/slotimages/psgdseo.jpg">Public slot</a></p>
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