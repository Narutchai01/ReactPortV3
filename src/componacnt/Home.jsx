import { FaBeer } from 'react-icons/fa';
import {BsFacebook , BsInstagram , BsGithub} from 'react-icons/bs'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'


function Home(){
    

    const homeimg = 'https://media.discordapp.net/attachments/796761749390753862/922138264465453106/1.jpg?width=369&height=554';

    return(
        <div className="home">
            <div className="home-container">
                <div className="home-text">
                    <div className="home-social">
                        <a href="https://www.facebook.com/narutchai.mauensaen/" ><BsFacebook /></a>
                        <a href="https://www.instagram.com/naruaichai.jsx/" ><BsInstagram /></a>
                        <a href="https://github.com/Narutchai01" ><BsGithub /></a>
                    </div>

                    <div className="title-home">
                        <div className="title">
                            <h1>Hello,I'M    </h1>
                            <h1 className='Name'>Narutchai</h1>
                        </div>
                        <div className="typing-writer">
                            <h1>
                                {''}
                                <span>
                                    <Typewriter 
                                        words={['Front-end devaloper','React-devaloper']}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="home-img">
                    <img src={homeimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home