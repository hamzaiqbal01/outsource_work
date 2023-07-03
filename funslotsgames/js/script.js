console.log("helo");
const cookieBox = document.querySelector(".alert"),
  acceptBtn = cookieBox.querySelector(".alert-close");

acceptBtn.onclick = () => {
  console.log("bye");
  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "CookieBy=HamzaIqbal";
  if (document.cookie) {
    //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  } else {
    //if cookie not set then alert an error
    alert(
      "Cookie can't be set! Please go to cookie setting and  unblock this site from the cookie setting of your browser."
    );
  }
};
let checkCookie = document.cookie.indexOf("CookieBy=HamzaIqbal"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1
  ? cookieBox.classList.add("hide")
  : cookieBox.classList.remove("hide");
