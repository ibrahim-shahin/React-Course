import { useState } from 'react'
import '../assets/Content.css'
import { useEffect } from 'react'

const Content = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/1bij.jpg"
    })
    const [memes, setMemes] = useState()
    const [randomNumber, setRandomNumber] = useState(0)

    useEffect(() => {
        const getMemeImage = () => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setMemes(data.data.memes));
        }
        getMemeImage()
    }, [])

    function getRandomNumber() {
        setRandomNumber(Math.floor(Math.random() * 100));
        setMeme(prevMeme => ({
            ...prevMeme,
            url: memes[randomNumber].url
        }))
    }

    function handleChange(event) {
        console.log(event.target)
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className='content'>
            <div className="inputs">
                <div className='input'>
                    <label htmlFor="top-text">Top text</label>
                    <input
                        value={meme.topText}
                        name='topText'
                        onChange={handleChange}
                        type="text"
                        placeholder='shut up'
                        id='top-text'
                    />
                </div>
                <div className='input'>
                    <label htmlFor="bottom-text">Bottom text</label>
                    <input
                        value={meme.bottomText}
                        name='bottomText'
                        onChange={handleChange}
                        type="text"
                        placeholder='and take my money'
                        id='bottom-text'
                    />
                </div>
            </div>
            <input className='button' type="button" value="Get a new meme image  🖼" onClick={getRandomNumber} />
            {memes && <img className='meme' src={meme.url} alt="" />}
        </div>
    )
}

export default Content