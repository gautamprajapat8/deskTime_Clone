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

export default navbar;