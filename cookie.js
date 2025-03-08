const cookieComponent = document.querySelector("[cookie-component]");
const preferenceComponent = document.querySelector("[cookie-popup]");
const prefCheckbox1 = document.querySelector("[cookie-pref-1]");
const prefCheckbox2 = document.querySelector("[cookie-pref-2]");
const prefCheckbox3 = document.querySelector("[cookie-pref-3]");
const closeBtn = document.querySelector("[cookie-close-btn]");
const preferenceBtn = document.querySelector("[cookie-preferences='btn']");
const savePrefBtn = document.querySelector("[cta-btn='save-pref']");
const acceptBtn = document.querySelector("[cta-btn='accept']");
const denyBtn = document.querySelector("[cta-btn='deny']");

closeBtn.addEventListener("click", () => {
  cookieComponent.style.display = "none";
});
preferenceBtn.addEventListener("click", () => {
  preferenceComponent.style.display = "flex";
});

let preferences = [
  {
    name: "marketing-cookie",
    value: "declined",
    days: "30",
  },
  {
    name: "personalization-cookie",
    value: "declined",
    days: "30",
  },
  {
    name: "analytics-cookie",
    value: "declined",
    days: "30",
  },
];



[prefCheckbox1, prefCheckbox2, prefCheckbox3].forEach((el, prefIndex) => {
  el?.addEventListener("change", (e) => {
    const { checked } = e.target;
    const value = checked ? "accepted" : "declined";
    
    preferences[prefIndex].value = value;
    // console.log(preferences)
  });
});

savePrefBtn.addEventListener("click", () => {
  setCookie();
  cookieComponent.style.display = "none";
  preferenceComponent.style.display = "none";
});

acceptBtn.addEventListener("click", () => {
  preferences.forEach((_,i) =>{
    preferences[i].value = "accepted";
  })  
  setCookie();
  cookieComponent.style.display = "none";
});

denyBtn.addEventListener("click", () => { 
  setCookie();
  cookieComponent.style.display = "none";
});

function setCookie() {
  preferences.forEach((p) => {
    const {name,value,days} = p;
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + "; path=/" + expires;
  });
}

function getCookie(name) {
  let cookies = document.cookie.split("; ");
  
  for (let i = 0; i < cookies.length; i++) {
      let parts = cookies[i].split("=");
      if (parts[0] === name) {
          return parts[1];
      }
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function () {
  
  const consentArr = preferences.map(p => {
    const cookie = getCookie(p.name);
    
    if(cookie === 'accepted' && p.name === 'analytics-cookie') loadGoogleAnalytics(); 
    if(cookie === 'accepted' && p.name === 'marketing-cookie') loadMarketingScript();
    if(cookie === 'accepted' && p.name === 'personalization-cookie') loadPersonalizationScript();
    return cookie;
  })

  if (consentArr.every(c => c === null)) {
    cookieComponent.style.display = "block";
  }else{
    cookieComponent.style.display = "none";
  }
});


function loadGoogleAnalytics() {
  let script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-0G59460CZ5";
  script.async = true;
  document.head.appendChild(script);

  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-0G59460CZ5");
  };
}

function loadMarketingScript(){
  console.log('marketing script loaded')
}

function loadPersonalizationScript(){
  console.log('personalization script loaded')
}