import "./Galerie.css"
import Menu from"../Menu/Menu"
import Footer from "../Footer/Footer" 

export default function Galerie(){
    return(
        <>
        <Menu/>
        <div className="container">
    <h1 id="nadpis">Konvoje</h1>
    <div className="image-container">
        <div className="image"><img src="./Img/Itvtc.png" alt="itvtc" /></div>
        <div className="image"><img src="./Img/ItvtcKonvoj.png" alt="itvtc konvoj" /></div>
        <div className="image"><img src="./Img/Konvoj10_12.png" alt="konvoj 10.12" /></div>
        <div className="image"><img src="./Img/Konvoj11_2.png" alt="konvoj 11.2" /></div>
        <div className="image"><img src="./Img/Konvoj22_12_2.jpg" alt="konvoj 22.12_2" /></div>
        <div className="image"><img src="./Img/Konvoj22_12_3.jpg" alt="konvoj 22.12_3" /></div>
        <div className="image"><img src="./Img/Konvoj11_2.png" alt="konvoj 11.2" /></div>
        <div className="image"><img src="./Img/Konvoj23_2.png" alt="konvoj 23.2" /></div>
        <div className="image"><img src="./Img/Konvoj1_3.jpg" alt="konvoj 1.3" /></div>
        <div className="image"><img src="./Img/Konvoj1_3_4.jpg" alt="konvoj 1.3_4" /></div>
        <div className="image"><img src="./Img/Konvoj1_3_3.jpg" alt="konvoj 1.3_3" /></div>
        <div className="image"><img src="./Img/Konvoj10_3.png" alt="konvoj 10.3" /></div>
        <div className="image"><img src="./Img/Konvoj10_3_2.png" alt="konvoj 10.3_2" /></div>
        <div className="image"><img src="./Img/Konvoj10_3_3.png" alt="konvoj 10.3_3" /></div>
        <div className="image"><img src="./Img/Konvoj23_3_1.png" alt="konvoj 23.3_1" /></div>
        <div className="image"><img src="./Img/Konvoj5_4.png" alt="konvoj 5.4" /></div>
        <div className="image"><img src="./Img/Konvoj5_4_2.png" alt="konvoj 5.4_2" /></div>
        <div className="image"><img src="./Img/Konvoj5_5.png" alt="konvoj 5.5" /></div>
    </div>
    <div className="popup-image">
        <div className="close">&times;</div>
        <img src="./Img/Itvtc.png" alt="itvtc" />
        <div className="sipka">
            <button className="left" id="prevBtn"><i className="bi bi-arrow-left"></i></button>
            <button className="right" id="nextBtn"><i className="bi bi-arrow-right"></i></button>
            <div className="image-counter">
                <div className="current-index">1</div> / <div className="total-count">1</div>
            </div>
        </div>
    </div>
</div>
        <Footer/>
        </>
    )
}