//Back to top // //
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// // Like // //

let like = document.getElementById("like");
let likehome = document.getElementById("likehome");
let des = document.getElementById("des");
let like1 = document.getElementById("like1");
let like2 = document.getElementById("like2");
let like3 = document.getElementById("like3");
let like4 = document.getElementById("like4");
like.onclick = function () {
  like.style.display = "none";
  likehome.style.color = "red";
};

like1.onclick = function () {
  like1.style.display = "none";
  likehome.style.color = "red";
};

like2.onclick = function () {
  like2.style.display = "none";
  likehome.style.color = "red";
};

like3.onclick = function () {
  like3.style.display = "none";
  likehome.style.color = "red";
};

like4.onclick = function () {
  like4.style.display = "none";
  likehome.style.color = "red";
};
//   let value = des.innerText;
//   let li = document.createElement("li");
//   li.classList.add("noti-text");
//   li.innerHTML = `<li>
//   <p id="notitext">${value}</p>
// </li>`;
//   let testList = li.innerHTML;
//   document.getElementById("#ul-like").appendChild = testList;
// };

// let des1 = document.getElementById("des1");
// like1.onclick = function () {
//   like1.style.display = "none";
//   likehome.style.color = "red";

//   let value = des1.innerText;
//   let li = document.createElement("li");
//   li.classList.add("noti-text");
//   li.innerHTML = `<li>
//   <p class="notitext">${value}</p>
// </li>`;
//   let testList2 = li.innerHTML;
//   document.getElementById("#ul-like").appendChild = testList2;
// }
// Delete list
// let btndelete = document.getElementById("delete");
// btndelete.onlick = function () {
//   testList.display = "none";
//   like.display = "inline-block";
// };

// Update like list

// Check email
