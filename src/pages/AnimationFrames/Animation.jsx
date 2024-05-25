import "./Animation.css"
export default function Animation (){
    return (
        <>
          <div className="gallery">
            <img src="./AnimationFrames/Animation1.png" className="active" />
            <img src="./AnimationFrames/Animation2.jpg" />
            <img src="./AnimationFrames/Animation3.jpg" />
            <img src="./AnimationFrames/Animation4.png" />
            <img src="./AnimationFrames/Animation5.jpg" />
          </div>

        <div className="navigation">
            <button className="active" data-index="0"></button>
            <button data-index="1"></button>
            <button data-index="2"></button>
            <button data-index="3"></button>
            <button data-index="4"></button>
        </div>
        <div className="arrow"></div>
        <script src="./Animate.js"></script>
        </>
    )
}