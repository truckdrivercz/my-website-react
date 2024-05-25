import "./Flags.css"
import "./Style.css"
export default function Flags_dark () {
    return(
        <>
        <div className="flags">
        <div className="language-selector">
          <div className="selected-language">
            <img src="./Flag_dark/Flag_of_the_Czech_Republic.svg" alt="Czech Republic" />
          </div>
          <div className="arrow-down"></div>
          <div className="language-options">
            <div className="language-option" data-lang="cz">
              <img src="./Flag_dark/Flag_of_the_Czech_Republic.svg"/>
              <span>Čeština</span>
            </div>
            <div className="language-option" data-lang="en">
              <img src="./Flag_dark/Flag-United-Kingdom.png"/>
              <span>English</span>
            </div>
            <div className="language-option" data-lang="de">
              <img src="./Flag_dark/Flag_Germany.png"/>
              <span>Germany</span>
            </div>
            <div className="language-option" data-lang="pl">
              <img src="./Flag_dark/polskokopie.png"/>
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