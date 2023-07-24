const sidebar = document.querySelector(".sidebar");
const usernav = document.querySelector(".user-nav");
usernav.addEventListener("click",()=>{
sidebar.classList.toggle("show")
  })

  
    //.......bussiness dropdown............
    const business_Drop = document.querySelector(".business-dropdown");
const business_container = document.querySelector(".business-slideBar");
const cross_sign = document.querySelector(".close-btn");
business_Drop.addEventListener("click", () => {
  business_container.style.display = "block"
})
cross_sign.addEventListener("click", () => {
  business_container.style.display = "none"
})

    //........feedsign dropdown rightside..........
    const feed_iSign = document.querySelector(".feed-info-iSign");
const infoCross = document.querySelector(".info-sign");
const feedInfo = document.querySelector(".feed-i-main")
feed_iSign.addEventListener("click", () => {
  feedInfo.style.display = "block"
});
infoCross.addEventListener("click", () => {
  feedInfo.style.display = "none"
});
    //...........top sortdown...................
    const center_sortDownSign = document.querySelector(".center-sort-downSign");
const center_sortDown = document.querySelector(".centersort-down");
function myFunction() {
  if (center_sortDown.style.display === "none") {
    center_sortDown.style.display = "block";
  }
  else {
    center_sortDown.style.display = "none";
  }
}
    //..........post dots............
    const post_DotsIcon = document.querySelector(".postDots-icon");
const Post_DropdownIcons = document.querySelector(".postDropdown-icons");
function dots_post(){
  if (Post_DropdownIcons.style.display === "none") {
    Post_DropdownIcons.style.display = "block";
  }
  else {
    Post_DropdownIcons.style.display = "none";
  }
}
    // ..........................see more.....
function mySeeMore() {
  var dots = document.getElementById("info-dots");
  var moreText = document.getElementById("info-more");
  var btnText = document.getElementById("info-myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreText.style.display = "inline";
  }
}

    // like hover

const like_iconId = document.getElementById("like-icon-id");
const social_likeMenu = document.querySelector(".social-like-menu");
like_iconId.addEventListener("mouseover", () => {
  if (social_likeMenu.style.display === "none") {
    social_likeMenu.style.display = "block";
  }
  else {
    social_likeMenu.style.display = "none"
  }
})
like_iconId.addEventListener("mouseout", () => {
  if (social_likeMenu.style.display === "block") {
    social_likeMenu.style.display = "none";
  }
})
//...right side link privacy and terms...........
const privacy_link = document.querySelector(".privacy-link");
const click_link = document.querySelector(".privacy-link-icons");
click_link.addEventListener("click",() => {
    privacy_link.classList.toggle("showPrivacy")
}
)
window.onclick=function(e){
    if(!e.target.matches(".privacy-link-icons"))
    if(privacy_link.classList.contains("showPrivacy")){
privacy_link.classList.remove("showPrivacy")
} 
}