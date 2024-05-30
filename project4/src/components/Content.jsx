import { useState } from 'react'
import '../assets/Content.css'
import { useEffect } from 'react'

const Content = () => {
    const [url, setUrl] = useState()
    const [memes, setMemes] = useState()
    const [meme, setMeme] = useState(0)

    useEffect(() => {
        const getMemeImage = async () => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setMemes(data.data.memes));
            setUrl(memes[meme].url)
        }

        getMemeImage()
    })

    function getRandomNumber() {
        setMeme(Math.floor(Math.random() * 100));
        setUrl(memes[meme].url)
    }


    return (
        <div className='content'>
            <div className="inputs">
                <div className='input'>
                    <label htmlFor="top-text">Top text</label>
                    <input type="text" placeholder='shut up' id='top-text' />
                </div>
                <div className='input'>
                    <label htmlFor="bottom-text">Bottom text</label>
                    <input type="text" placeholder='and take my money' id='bottom-text' />
                </div>
            </div>
            <input className='button' type="button" value="Get a new meme image  🖼" onClick={getRandomNumber} />
            {memes && <img className='meme' src={url} alt="" />}
        </div>
    )
}

export default Content