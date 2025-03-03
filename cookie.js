const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");


acceptBtn.addEventListener("click", acceptCookies);
declineBtn.addEventListener("click", declineCookies);

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + "; path=/" + expires;
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
  let cookieConsent = getCookie("cookieConsent");
console.log(cookieConsent)
  if (!cookieConsent) {
    console.log("cookieConsent not found");
      banner.style.display = "block";
  } else if (cookieConsent === "accepted") {
      loadGoogleAnalytics();
  }
  console.log('running')
});

// Handle Accept Button
function acceptCookies() {
  setCookie("cookieConsent", "accepted", 10);
  banner.style.display = "none";
  loadGoogleAnalytics();
}

// Handle Decline Button
function declineCookies() {
  setCookie("cookieConsent", "declined", 10);
  banner.style.display = "none";
}
function loadGoogleAnalytics() {
  let script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-0G59460CZ5";
  script.async = true;
  document.head.appendChild(script);

  script.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag("js", new Date());
      gtag("config", "G-0G59460CZ5", { anonymize_ip: true });
  };
}
