import "./Animation.css"
import Animation1 from "../AnimationImages/Animation1.png"
import Animation2 from "../AnimationImages/Animation2.jpg"
import Animation3 from "../AnimationImages/Animation3.jpg"
import Animation4 from "../AnimationImages/Animation4.png"
import Animation5 from "../AnimationImages/Animation5.jpg"
export default function Animation (){
    return (
        <>
          <div className="gallery">
            <img src={Animation1} className="active" />
            <img src={Animation2} />
            <img src={Animation3} />
            <img src={Animation4}/>
            <img src={Animation5} />
          </div>

        <div className="navigation">
            <button className="active" data-index="0"></button>
            <button data-index="1"></button>
            <button data-index="2"></button>
            <button data-index="3"></button>
            <button data-index="4"></button>
        </div>
        <div className="arrow"></div>
        </>
    )
}