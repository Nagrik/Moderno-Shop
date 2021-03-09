import React from 'react'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__content">
                <div className="container">

                    <div className="footer__inner">

                        <div className="footer__col footer__col-adress">
                            <div className="footer__col-title">
                                About Company
                            </div>
                            <div className="footer__col-text">
                                Praesent vel rutrum purus. Nam vel dui eu risus duis dignissim digniSuspen
                                disse.Fusce sit amet urna
                                iat.Praesent vel rutrum purus.
                            </div>
                            <div className="footer__info">PO Box 16122 Collins Street West Victoria 8007 Australia
                            </div>
                            <a className="footer__info footer__info-phone" href="tel:61383766284">+61 3 8376
                                6284</a>
                        </div>

                        <div className="footer__col footer__col-menu">
                            <div className="footer__col-title">
                                Join Our Community
                            </div>
                            <ul className="footer__col-list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Forums</a></li>
                                <li><a href="#">Become an Author</a></li>
                                <li><a href="#">Community Meetups</a></li>
                                <li><a href="#">Become an Affiliate</a></li>
                            </ul>
                        </div>

                        <div className="footer__col footer__col-menu">
                            <div className="footer__col-title">
                                Need Help?
                            </div>
                            <ul className="footer__col-list">
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Foxtar Market Terms</a></li>
                                <li><a href="#">Author Terms</a></li>
                                <li><a href="#">Foxtar Licenses</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="footer__col footer__col-social">
                            <div className="footer__col-title">Follow Us On</div>
                            <ul className="footer__social-link">
                                <li><a className="link-facebook" href="#"/></li>
                                <li><a className="link-twitter" href="#"/></li>
                                <li><a className="link-youtube" href="#"/></li>
                                <li><a className="link-linkidin" href="#"/></li>
                                <li><a className="link-pinters" href="#"/></li>
                            </ul>

                            <div className="footer__form">
                                <div className="footer__form-title">
                                    Newsletter Sign Up!
                                </div>
                                <form>
                                    <input type="text" placeholder="E-mail Address"/>
                                    <button type="submit"/>
                                </form>
                            </div>

                        </div>

                    </div>

                    <div className="footer__copy">
                        <div className="container">
                            <div className="footer__copy-text">
                                © 2020 Foxtar market place. Trademarks and brands are the property of their
                                respective owners.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}