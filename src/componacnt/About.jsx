


function About(){

    const aboutimg = 'https://media.discordapp.net/attachments/796761749390753862/922138264465453106/1.jpg?width=369&height=554'
    return(
        <div className="About">
            {/* <h1>ABOUT ME</h1> */}
            <div className="grid-about">
                    
                    <h1>ABOUT ME</h1>
                    
                    <div className="personal-about">
                        <div className="img-about">
                            <img src={aboutimg} alt="" />
                        </div>
                            
                        <div className="text-about">
                            <div className="into">
                                <h3>hello </h3>
                            </div>
                            <div className="data">
                                <h3>My name is Narutchai Mauensaen </h3>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default About;