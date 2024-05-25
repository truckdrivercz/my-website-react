import './Galerie.css';
import Menu from '../Menu/Menu';
import Flags_dark from '../Flag_dark/Flags_dark';
import Footer from '../Footer/Footer';
// Importing images
import Konvoj_11_2 from '../Img/Konvoj 11.2.png';
import Konvoj_23_2 from '../Img/Konvoj 23.2.png';
import Konvoj_1_3 from '../Img/Konvoj 1.3.jpg';
import Konvoj_1_3_4 from '../Img/Konvoj 1.3_4.jpg';
import Konvoj_1_3_3 from '../Img/Konvoj 1.3_3.jpg';
import Konvoj_10_3 from '../Img/Konvoj 10.3.png';
import Konvoj_10_3_2 from '../Img/Konvoj 10.3_2.png';
import Konvoj_10_3_3 from '../Img/Konvoj 10.3_3.png';
import Konvoj_23_3_1 from '../Img/Konvoj 23.3_1.png';
import Konvoj_5_4 from '../Img/Konvoj 5.4.png';
import Konvoj_5_4_2 from '../Img/Konvoj 5.4_2.png';
import Konvoj_5_5 from '../Img/Konvoj 5.5.png';

export default function Galerie() {
    document.title = "Galerie";
    return (
        <>
            <Menu />
            <Flags_dark />
            <div className="container">
                <h1 id="nadpis">Konvoje</h1>
                <div className="image-container">
                    <div className="image"><img src={Konvoj_11_2} /></div>
                    <div className="image"><img src={Konvoj_23_2} /></div>
                    <div className="image"><img src={Konvoj_1_3} /></div>
                    <div className="image"><img src={Konvoj_1_3_4} /></div>
                    <div className="image"><img src={Konvoj_1_3_3} /></div>
                    <div className="image"><img src={Konvoj_10_3} /></div>
                    <div className="image"><img src={Konvoj_10_3_2} /></div>
                    <div className="image"><img src={Konvoj_10_3_3} /></div>
                    <div className="image"><img src={Konvoj_23_3_1} /></div>
                    <div className="image"><img src={Konvoj_5_4} /></div>
                    <div className="image"><img src={Konvoj_5_4_2} /></div>
                    <div className="image"><img src={Konvoj_5_5} /></div>
                </div>
                <div className="popup-image">
                    <div className="close">&times;</div>
                    <img src={Konvoj_11_2} />
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
    );
}
