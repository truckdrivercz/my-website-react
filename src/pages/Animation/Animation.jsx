import "./Animation.css"

export default function Animation (){
    return (
        <>
        <div className="arrow bounce"></div>
        <div className="konvoje">
          <div className="animace" style={{ display: "none" }}>
            <img src="../animationFrames/animation1.png" alt="animation1" />
            <img src="../animationFrames/animation2.jpg" alt="animation2" />
            <img src="../animationFrames/animation3.jpg" alt="animation3" />
            <img src="../animationFrames/animation4.png" alt="animation4" />
            <img src="../animationFrames/animation5.jpg" alt="animation5" />
          </div>
        </div>
        </>
    )
}