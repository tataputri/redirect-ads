/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const selfJquery = require('jquery');
let firstTime = false;
let firstRedirect = false;
const lastAccess = sessionStorage.getItem('teta_last_access');
const lastRedirectFrom = sessionStorage.getItem('teta_redirect_from');
const isRobot = /bot|google|baidu|bing|msn|teoma|slurp|yandex/i.test(navigator.userAgent);

console.log(`isRobot : ${isRobot}`);
console.log(`Last Access : ${lastAccess}`);
console.log(`Last Redirect: ${lastRedirectFrom}`);
if (lastAccess ===null) {
  firstTime = true;
}
if (lastRedirectFrom === null) {
  firstRedirect = true;
}
console.log(`isFirstTime: ${firstTime}`);
console.log(`isFirstRedirect: ${firstRedirect}`);
const todayDate = new Date();
const today = todayDate.getFullYear()+'-'+(todayDate.getMonth()+1)+'-'+todayDate.getDate();
const redirectFrom = window.location.href;
console.log(`Current Url: ${redirectFrom}`);
const directLinkAds = ['https://shopee.com'];
const adServerLists = ['https://pcandroidplayer.blogspot.com/'];

function rChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}

const shopeeLink = rChoice(directLinkAds);
const adServer = rChoice(adServerLists);

if ((firstTime || firstRedirect ) && !isRobot ) {
  sessionStorage.setItem('teta_last_access', today);

  console.log('masuk ke logic');
  const link = document.createElement('link');
  link.href ='https://cdn.jsdelivr.net/gh/vyantagc/vyantagc@master/popme-css.min.css';
  link.rel = 'stylesheet';
  link.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(link);

  // const script = document.createElement('script');
  // script.src ='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
  // script.type = 'text/javascript';
  // document.getElementsByTagName('head')[0].appendChild(script);

  document.addEventListener('DOMContentLoaded', function(event) {
    var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,4686738,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    const hs = document.createElement('script'); 
    hs.type = 'text/javascript'; 
    hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);


    document.body.innerHTML += `<div class="popbox hide" id="popbox"><div aria-label='Close' class="pop-overlay" role="button" tabindex="0"/><div class="pop-content"><div class="popcontent" align="center"> <img src="https://1.bp.blogspot.com/-y8AsxfEerDc/YFSyMPZF14I/AAAAAAAAAAM/JUegMgSE-3o5A_06mx0Fir2-dkB6fAGvACLcBGAsYHQ/s640/re.jpg" width="640" height="320" class="lazyload" alt="" /> <button class='g_url btn btn-success btn-dwn m-2'>Confirm</button> <br/></div> <button class='g_url popbox-close-button'>&#215;</button></div></div>`;
    setTimeout(function() {
      selfJquery('#popbox').removeClass('hide');
    }, 1000);

    selfJquery(document).on('click', '.g_url', function(e) {
      sessionStorage.setItem('teta_redirect_from', redirectFrom);
      e.preventDefault();
      window.open(`${adServer}?claysrc=${encodeURIComponent(redirectFrom)}`, '_blank');
      window.location.href = shopeeLink;
    });
  });
}


