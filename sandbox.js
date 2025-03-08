// const banner = document.getElementById("cookie-banner");
// const scriptTag = document.querySelector("script[src*='cookie.js']");

// const mode = scriptTag.getAttribute("mode");
// console.log(mode);


// const bannerHTML = `
//   <section class='banner-container'>
//     <h1>We Use Cookies</h1>
//     <p>We use cookies for optimising the website performance and provide you the best user experience.</p>
//     <div class='banner-btns'>
//       <button id="acceptBtn">Accept</button>
//       <button id="declineBtn">Decline</button>
//     </div>
//   </section>
// `

// const preferenceBanner = `
//   <section class='banner-container'>
//     <h1>We Use Cookies</h1>
//     <p>We use cookies for optimising the website performance and provide you the best user experience.</p>
//     <div class='preference-btns'>
//       <button id="acceptBtn">Accept All</button>
//       <button id="declineBtn">Decline All</button>
//       <button id="preferenceBtn">Set Preferences</button>
//     </div>
//   </section>
// `
// const preferenceHTML = `
//   <section class='preference-container'>
//     <h1>Set Cookie Preferences</h1>
//     <div class='preference-form'>
//         <div class='preference-item'>
//           <input class='preference-input'  type='checkbox' id='analytics' name='analytics' value='analytics'>
//           <label for='analytics'>Analytics</label>
//         </div>
//         <div class='preference-item'>
//           <input class='preference-input' type='checkbox' id='marketing' name='marketing' value='marketing'>
//           <label for='marketing'>Marketing</label>
//         </div>
//         <div class='preference-item'>
//           <input class='preference-input' type='checkbox' id='personalization' name='personalization' value='personalization'>
//           <label for='personalization'>Personalization</label>
//         </div>
//         <div class='preference-item'>
//           <input class='preference-input' type='checkbox' id='advertising' name='advertising' value='advertising'>
//           <label for='advertising'>Advertising</label>
//         </div>
//       </div>
//       <div class='preferences-btns'>
//         <button id="acceptBtn">Save Preferences</button>
//         <button id="declineBtn">Decline All</button>
//       </div>
//   </section>

// `

// function showConsent (){
//   if(mode === 'banner'){
//     console.log('run ')
//     banner.innerHTML=bannerHTML
//   } else if(mode === 'preference'){
//     banner.innerHTML=preferenceBanner
//   }
//   const acceptBtn = document.getElementById("acceptBtn");
//   const declineBtn = document.getElementById("declineBtn");
//   const preferenceBtn = document.getElementById("preferenceBtn");
//   preferenceBtn?.addEventListener("click", showPreference);
//   acceptBtn?.addEventListener("click", acceptCookies);
//   declineBtn?.addEventListener("click", declineCookies);
// }

// function showPreference (){
//     banner.innerHTML = preferenceHTML;
//     const preferenceInputs = document.querySelectorAll('.preference-input');

//     preferenceInputs.forEach(input => {
//       input.addEventListener('change',(e)=> setPreference(e))
//     })
// }

// let preferences=[]

// function setPreference(e){

//   const {value,checked} = e.target

//   if(!checked) preferences = preferences.filter(p => p !== value)
//   else preferences.push(value)
  
//   console.log(e.target.value, e.target.checked)
//   console.log(preferences)
// }
// function setCookie(name, value, days) {
//   preferences.forEach(p => {
//     let expires = "";
//     if (days) {
//         let date = new Date();
//         date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + value + "; path=/" + expires;
    
//   })
// }

// function getCookie(name) {
//   let cookies = document.cookie.split("; ");
//   console.log(cookies)
//   for (let i = 0; i < cookies.length; i++) {
//       let parts = cookies[i].split("=");
//       console.log(parts)
//       if (parts[0] === name) {
//           return parts[1];
//       }
//   }
//   return null;
// }

// document.addEventListener("DOMContentLoaded", function () {
//   let cookieConsent = getCookie("cookieConsent");
//   if (!cookieConsent) {
//     console.log("cookieConsent not found");
    
//     showConsent()
//   } else if (cookieConsent === "accepted") {
//       loadGoogleAnalytics();
//   }
// });

// // Handle Accept Button
// function acceptCookies() {
//   // setCookie("cookieConsent", "accepted", 10);
//   // banner.style.display = "none";
//   // loadGoogleAnalytics();
//   console.log('ee')
// }

// // Handle Decline Button
// function declineCookies() {
//   setCookie("cookieConsent", "declined", 10);
//   banner.style.display = "none";
// }


// function loadGoogleAnalytics() {
//   let script = document.createElement("script");
//   script.src = "https://www.googletagmanager.com/gtag/js?id=G-0G59460CZ5";
//   script.async = true;
//   document.head.appendChild(script);

//   script.onload = function () {
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){ dataLayer.push(arguments); }
//       gtag("js", new Date());
//       gtag("config", "G-0G59460CZ5");
//   };
// }