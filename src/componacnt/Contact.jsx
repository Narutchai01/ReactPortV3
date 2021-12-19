import {BsFacebook , BsInstagram , BsGithub} from 'react-icons/bs'



function Contact(){

    const fb = "https://www.facebook.com/narutchai.mauensaen/";

    const ig = "https://www.instagram.com/naruaichai/";

    const gith = "https://github.com/Narutchai01";

    return(
        <div className="Contact">
            <div className="grid-contact">
                    <h1>Contact</h1>

                <div className="link-area">

                    <div className="link-item">
                        <a href={fb}>
                            <div className="text-link-item">
                            <h1><BsFacebook /></h1>
                            <h2>Narutchai Mauensaen</h2>
                            </div>
                        </a>
                    </div>
                    
                    <div className="link-item">
                        <a href={ig}>
                            <div className="text-link-item">
                                <h1><BsInstagram /></h1>
                                <h2>naruaichai</h2>
                            </div>
                        </a>
                    </div>

                    <div className="link-item">
                        <a href={gith}>
                            <div className="text-link-item">
                                <h1><BsGithub /></h1>
                                <h2>Narutchai01</h2>
                            </div>
                        </a>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Contact