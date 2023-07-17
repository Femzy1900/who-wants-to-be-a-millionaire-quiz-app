 import React, { useState, useEffect } from "react"
 import  '../style.css'
 import html2canvas from "html2canvas"
 
 function Main() {
     const [meme, setMeme] = useState({
         topText: "",
         bottomText: "",
         randomImage: "http://i.imgflip.com/1bij.jpg"
     })
     const [allMeme, setAllMeme] = useState([])

     useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
          .then((response) => response.json())
          .then((response) => {
            const { memes } = response.data;
            setAllMeme(memes);
          });
      }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                [name]: value
            }
        })
        
    }

    function capture() {
        const divToDisplay = document.getElementById("meme")
        html2canvas(divToDisplay, {
            allowTaint: true,
            useCORS: true,
            scrollY: -window.scrollY,
            scrollX: -window.scrollX,
        }).then(function (canvas) {
            var url = canvas.toDataURL("image/png");
            var link = document.createElement("a");
            link.download = "meme.png";
            link.href = url;
            link.click()
        });
    }
    return (
        <main>
            <div className="body">
                <div className="input">
                    <input 
                        type="text"
                        placeholder="Top text" 
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                    <input 
                        type="text" 
                        placeholder="bottom text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                    
                </div>
                <button 
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
                <div id="meme" className="meme">

                    <img alt="meme-Img" src={meme.randomImage}/>
                    <div className="meme-div">
                        <div className="top">
                            <p>{meme.topText}</p>
                        </div>
                        <div className="bottom">
                            <p>{meme.bottomText}</p>
                        </div>
                    </div>
                </div>
                <button onClick={capture} id="capture">Download Memes</button>
            </div>
        </main>
    )
 }

 export default Main;