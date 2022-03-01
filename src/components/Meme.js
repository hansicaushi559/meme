import React,{useState,useEffect} from "react"
import '../index.css'




function Meme (){
    const [memeImage,setMemeImage] = useState([])
/*     na duhet thjeshte per te savuar te dhenat */
    
    const [memeText, setMemeText] = useState({
        topText: "",
        bottomText : "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeImage(data.data.memes))
    }, [])




    function getMemesUrl() {
        const random = Math.floor(Math.random() * memeImage.length)
        const showImage = memeImage[random].url
        setMemeText(prevState => ({
            ...prevState,
            randomImage: showImage
        }))

    }

    function handleClick(e){
        const {name, value} = e.target
        setMemeText(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    return(
        <main>
            <div className="form">
                <input 
                placeholder="Top Text"
                type='text'
                className="text-inputs"
                name="topText"
                value={memeText.topText}
                onChange={handleClick}
                />
                <input
                placeholder="Bottom Text"
                type='text'
                className="text-inputs"
                name="bottomText"
                value={memeText.bottomText}
                onChange={handleClick}
                />
                <button
                className="button"
                onClick={getMemesUrl}
                >
                    Get a new Meme Image
                </button>
            </div>
            <div className="meme">
                <img src={memeText.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeText.topText}</h2>
                <h2 className="meme--text bottom">{memeText.bottomText}</h2>
            </div>
        </main>
    )

}

export default Meme