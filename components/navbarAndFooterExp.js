let navbar=()=>{
    return `
    <div id="nav">
        <div><a href="index.html"><img src="https://desktime.com/assets/new-styles/dist/assets/Logo-Dark-Text-Without-Padding.svg" alt=""></a></div>
        <div id="second">
            <div>
                <a href="demo.html" id="demo">Demo</a>
                <a href="features.html" id="features">Features</a>
                <a href="pricing.html" id="pricing">Pricing</a>
                <a href="about_us.html" id="about_us">About Us</a>
                <a href="faq.html" id="faq">FAQ</a>
                <a href="blog.html" id="blog">Blog</a>

            </div>
            <div>
                <a href="log_in.html">LOGIN</a>
                <a href="sign_up.html">SIGN UP</a>
            </div>
            <div id="last" onclick="rotate();">
                <img src="https://as1.ftcdn.net/v2/jpg/03/20/11/32/1000_F_320113271_P8UHQXouSZWrXKMYXQaaRu8UHT5VGJ3V.jpg" alt="">
                <p id="language">EN</p>
                <img id="rotate" src="https://cdn-icons.flaticon.com/png/512/5842/premium/5842712.png?token=exp=1658255695~hmac=6a93c1c357586b1774f00160201a6916" alt="">
            </div>
        </div>
        
    </div>
    <div id="dropdownLanguage"></div>
    `;
}

let footer=()=>{
    return `

            <div id="footFirst">
            <div>
                <p>Company</p>
                <a href="index.html">Home</a>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
                <a href="#">Affiliate terms</a>
                <a href="#">Download app</a>
                <a href="#">Pricing</a>
                <a href="#">Affiliate</a>
                <a href="#">Press</a>
                <a href="#">DeskTime in your language</a>
            </div>
            <div>
                <p>Learn more</p>
                <a href="#">All resources</a>
                <a href="#">Employee monitoring guide</a>
                <a href="#">Online employee time clock</a>
                <a href="#">Best time tracking apps</a>
                <a href="#">DeskTime for business</a>
                <a href="#">DeskTime for freelancers</a>
                <a href="#">FAQ</a>
                <a href="#">Case studies</a>
                <a href="#">Webinars</a>
                <a href="#">Blog</a>
            </div>
            <div>
                <p>Integrations</p>
                <a href="#">All integrations</a>
                <a href="#">Trello</a>
                <a href="#">Basecamp</a>
                <a href="#">Jira</a>
                <a href="#">Asana</a>
                <a href="#">Outlook Calendar</a>
                <a href="#">Google Calendar</a>
                
            </div>
            <div>
                <p>Features</p>
                <a href="#">All features</a>
                <a href="#">Automatic time tracking</a>
                <a href="#">URL & App tracking</a>
                <a href="#">Screenshots</a>
                <a href="#">Project time tracking</a>
                <a href="#">Shift schedule</a>
                <a href="#">Offline time tracking</a>
                <a href="#">Invoicing</a>
                <a href="#">Absence calendar</a>
                <a href="#">Mobile app</a>
                <a href="#">Feature request</a>
            </div>
            <div>
                <p>Help center</p>
                <a href="#">Contact us</a>
                <a href="#">Schedule a call</a>
                <a href="#">Send us an e-mail</a>
                <a href="#">Request In-person training</a>
                <a href="#">Open chat</a>
                <p>Phone support</p>
                <a href="#">USA: +1 (315) 6365354</a>
                <a href="#">EU: +371 27337268</a>
            </div>
        </div>
        <div id="footSecond">
            <div>
                <a href="index.html"><img src="https://desktime.com/assets/new-styles/dist/assets/Logo-Dark-Text-Without-Padding.svg" alt=""></a>
                <div>
                    <a href="https://play.google.com/store/apps/details?id=desktime.main"><img src="https://desktime.com/assets/new-styles/dist/assets/Google-Play.svg" alt=""></a>
                    <a href="https://apps.apple.com/us/app/desktime-for-iphone/id452994124"><img src="https://desktime.com/assets/new-styles/dist/assets/App-Store.svg" alt=""></a>
                </div>
            </div>
            <div>
                <div id="footSocialMedia">
                    <a href="https://www.facebook.com/DeskTime/"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png" alt=""></a>
                    <a href="https://twitter.com/desktimecom"><img src="https://cdn-icons.flaticon.com/png/512/3938/premium/3938028.png?token=exp=1658315667~hmac=e731a3bc676b8bedda5613ef4bd29373" alt=""></a>
                    <a href="https://www.youtube.com/channel/UCHMGr8kbfSU2Ler6iBM4b1g"><img src="https://cdn-icons.flaticon.com/png/512/3938/premium/3938026.png?token=exp=1658315647~hmac=04ae4202f54e8290433256c3ce9d82bc" alt=""></a>
                    <a href="https://www.linkedin.com/company/desktime-com/"><img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1658315384~hmac=f7d04385d52b1fd4f84f2356c330e131" alt=""></a>
                    <a href="https://join.skype.com/invite/nZREzW3ROrRk"><img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536534.png?token=exp=1658315490~hmac=adff768683e9aab87fc6d465484cbd07" alt=""></a>
                    <a href="https://api.whatsapp.com/send/?phone=37127337268&text&type=phone_number&app_absent=0"><img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt=""></a>
                </div>
                <div id="footSarch">
                    <label for="">Subscrib to our newsletter</label>
                    <input type="email" placeholder="Type your email" id="SubscribeEmail">
                    <input type="submit" value="Subscribe" id="subscribe">
                </div>
            </div>
        </div>
        <div id="footThird">
            <div>
                <p>© 2011 - 2022 DeskTime</p>
                <a href="https://draugiemgroup.com/">
                    <div>
                        <p>PART OF</p>
                        <h4>DRAUGIEM GROUP</h4>
                    </div>
                </a>
            </div>
        </div>

    `;
};

export {navbar, footer};