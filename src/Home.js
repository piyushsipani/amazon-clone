import React from 'react'
import './Home.css'
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image"
                 src="https://tse1.mm.bing.net/th?id=OIP.775aKwydNP7a6Fmcp1dVxAHaBn&pid=Api&P=0&w=596&h=130" alt=""/>


                 <div className="home__row">
                        <Product
                        id="123123123"
                         title="The   lean startup"
                        price={29.99}
                        image={"https://tse3.mm.bing.net/th?id=OIP.B25ABjJwrboPQ88pX6FOJAHaDn&pid=Api&P=0&w=336&h=165"} rating={5}

                      />
                 
                        <Product
                        id="124123123"
                         title="Kenwood kmix stand water mix ,stylish kitchen mixer"
                        price={29.99}
                        image={"https://tse4.mm.bing.net/th?id=OIP.NP3EFJBywwfWNthmNyiMXwHaJO&pid=Api&P=0&w=300&h=300"} rating={5}

                      />
                 
                
                     {/* Product */}
                     {/* Product */}
                 </div>

                 
                 <div className="home__row">
                 <Product
                        id="124123125"
                         title="Samsung LC49rgconn Curved LED gaming monitor"
                        price={89.99}
                        image={"https://tse3.mm.bing.net/th?id=OIP.iDHmKlIfPW7Dl_CNAIeBHQHaHa&pid=Api&P=0&w=300&h=300"} rating={5}

                      />
                 <Product
                        id="124123125"
                         title="Amazon echo (3rd generation) 
                         your intelligent friend"
                        price={89.99}
                        image={"https://tse1.mm.bing.net/th?id=OIP.HLjlytgs6C3OaGGr1opIswHaFs&pid=Api&P=0&w=212&h=164"} rating={5}

                      />
                 <Product
                        id="124173125"
                         title="Apple Ipad pro Silver(4th generation)"
                        price={500.99}
                        image={"https://tse3.mm.bing.net/th?id=OIP.IMvOTmSJGX3w51Go_N8PDwHaFw&pid=Api&P=0&w=205&h=160"} rating={5}

                      />
                     {/* Product */}
                     {/* Product */}
                     {/* Product */}
                 </div>


                 
                 <div className="home__row">
                     {/* Product */}
                    
                     <Product
                        id="184173125"
                         title="Microsoft xbox gaming device
                         your pro friend"
                        price={500.99}
                        image={"https://tse1.mm.bing.net/th?id=OIP.UNSO1vnFCfnPY_s2nya5uwHaE3&pid=Api&P=0&w=249&h=164"} rating={5}

                      />
                 </div>


            </div>
        </div>
    )
}

export default Home
