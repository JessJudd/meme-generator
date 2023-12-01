import memesData from 'src/memesData.js'
import { useState } from 'react'

export const MemeForm = () => {

    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

    const [meme, setMeme] = useState({ // curly braces to use an object
        topText: '',
        bottomText: '',
        randomImg: 'https://i.imgflip.com/2hgfw.jpg'
    })

    const [alLMemeImages, setAllMemeImages] = useState(memesData)

    function makeMyMeme(){

        const memesArray = alLMemeImages.data.memes
        let rng = Math.floor(Math.random() * (memesArray.length - 0 + 1) + 0)
        
        //setMemeImg(memesArray[rng].url)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImg: memesArray[rng].url
            }
        })

        console.log(meme);
    }

    return(
        <main className="meme-container">
            <div className="meme-form">
                <input 
                    className="meme-form-input" 
                    type="text" 
                    placeholder="Top Text" />
                <input className="meme-form-input" type="text" placeholder="Bottom Text" />
                <button type="submit" onClick={makeMyMeme}>Make My Meme</button>
            </div>
                {meme.randomImg != '' && <img src={meme.randomImg} />}
        </main>
    )
}