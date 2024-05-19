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
        <div className="image"><img src="../Img/Itvtc.png" alt="itvtc" /></div>
        <div className="image"><img src=".../Img/ItvtcKonvoj.png"/></div>
        <div className="image"><img src="../Img/Konvoj10_12.png"/></div>
        <div className="image"><img src="../Img/Konvoj11_2.png"/></div>
        <div className="image"><img src="../Img/Konvoj22_12_2.jpg"/></div>
        <div className="image"><img src="../Img/Konvoj22_12_3.jpg"/></div>
        <div className="image"><img src="../Img/Konvoj11_2.png"/></div>
        <div className="image"><img src="../Img/Konvoj23_2.png"/></div>
        <div className="image"><img src="../Img/Konvoj1_3.jpg"/></div>
        <div className="image"><img src="../Img/Konvoj1_3_4.jpg"/></div>
        <div className="image"><img src="../Img/Konvoj1_3_3.jpg"/></div>
        <div className="image"><img src="../Img/Konvoj10_3.png"/></div>
        <div className="image"><img src="../Img/Konvoj10_3_2.png"/></div>
        <div className="image"><img src="../Img/Konvoj10_3_3.png"/></div>
        <div className="image"><img src="../Img/Konvoj23_3_1.png"/></div>
        <div className="image"><img src="../Img/Konvoj5_4.png"/></div>
        <div className="image"><img src="../Img/Konvoj5_4_2.png"/></div>
        <div className="image"><img src="../Img/Konvoj5_5.png"/></div>
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