

function Certificate(){


    const au ='https://media.discordapp.net/attachments/796761749390753862/922145025704493086/AU.png?width=762&height=554';
    const itx ='https://media.discordapp.net/attachments/796761749390753862/922145023867383909/itx.jpg?width=784&height=554';
    const tocpc ='https://media.discordapp.net/attachments/796761749390753862/922145025297637466/TOCPC.jpeg?width=784&height=554';
    const spl ='https://media.discordapp.net/attachments/796761749390753862/922145024458752030/m3.png?width=762&height=554';


    return(


        <div className="certificate">
                            <h1>Certificate</h1>
            <div className="grid-Certificate">
                
                <div className="cer-item">

                    <article className="location-listing">
                        <h2 className="location-title">CS Festival: TeachSpark</h2>

                        <div className="location-image">
                            <img src={au} alt="" />
                        </div>
                    </article>

                    <article className="location-listing">
                        <h2 className="location-title">Inspire IT65</h2>

                        <div className="location-image">
                            <img src={itx} alt="" />
                        </div>
                    </article>

                    <article className="location-listing">
                        <h2 className="location-title">TOCPC 2021</h2>

                        <div className="location-image">
                            <img src={tocpc} alt="" />
                        </div>
                    </article>

                    <article className="location-listing">
                        <h2 className="location-title">ศิลปะหัตถกรรม ครั้งที่ 68</h2>

                        <div className="location-image">
                            <img src={spl} alt="" />
                        </div>
                    </article>

                </div>
                
            </div>

        </div>
    )
}
export default Certificate