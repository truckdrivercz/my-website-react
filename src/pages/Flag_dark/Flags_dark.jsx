import "./Flags.css"
import "./Style.css"
import Czech from "../Flags_images/Flag_of_the_Czech_Republic.svg"
import English from "../Flags_images/Flag-United-Kingdom.png"
import Germany from "../Flags_images/Flag_Germany.png"
import Poland from "../Flags_images/Polskokopie.png"

export default function Flags_dark () {
    return(
        <>

        <div className="flags">
        <div className="language-selector">
          <div className="selected-language">
            <img src={Czech}/>
          </div>
          <div className="arrow-down"></div>
          <div className="language-options">
            <div className="language-option" data-lang="cz">
            <img src={Czech}/>
              <span>Čeština</span>
            </div>
            <div className="language-option" data-lang="en">
              <img src={English}/>
              <span>English</span>
            </div>
            <div className="language-option" data-lang="de">
              <img src={Germany}/>
              <span>Germany</span>
            </div>
            <div className="language-option" data-lang="pl">
              <img src={Poland}/>
              <span>Polski</span>
            </div>
          </div>
          <div className="btn">
            <div className="btn__indicator">
              <div className="btn__icon-container">
                <i className="btn__icon fa-solid"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        </>
    )
}