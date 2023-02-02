const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}
let btnAm = document.getElementById("btn-am");
let btnDuong = document.getElementById("btn-duong");
let inputNumber = document.getElementById("input-number");
let giaTri = inputNumber.innerText;
btnAm.onclick = function () {
  giaTri = `${Number(giaTri) - 1}`;
  if (giaTri <= 0) {
    giaTri = 0;
    inputNumber.innerText = giaTri;
  } else {
    inputNumber.innerText = giaTri;
  }
};
btnDuong.onclick = function () {
  giaTri = `${Number(giaTri) + 1}`;
  inputNumber.innerText = giaTri;
};
let giaTien3 = document.getElementById("gia-tien3");
let giaTien4 = giaTien3.innerText;
let btnPlus = document.getElementById("btn-plus");
let nutDo = document.getElementById("nut-do");
btnPlus.onclick = function () {
  nutDo.style.display = "block";
  swal("Bạn đã thêm sản phẩm vào giỏ hàng", {
    icon: "success",
  });
  boxShopi.innerHTML = `<div class="shoping">
  <h4>GIỎ HÀNG</h4>
  <hr>
  <div class="box-shop">
      <div>
          <img src="//product.hstatic.net/1000230642/product/dem011700den__3__88c021190a4447b38869265e73a3ba7a_small.jpg" alt="">
      </div>
      <div class="box-name">
          <div class="namesp">
              <span><b>Dép Eva Phun Nam Xin Sò DENXS12859974</b></span>
              <button type="button" class="btn-close" aria-label="Close" id="btn-close"></button>
          </div>
          <div class="input-number">
              <button type="button" class="btn btn-outline-secondary btn-group-lg" id="btn-am2">-</button>
              <span id="input-number2">${giaTri}</span>
              <button type="button" class="btn btn-outline-secondary btn-group-lg" id="btn-duong2">+</button>
              <div class="giatiensp">
                  <span id="vl">172</span>,000 đ</div>
          </div>
      </div>
  </div>
  <hr>
  <div class="thanhtoan">
      <span>TỔNG TIỀN :</span>
      <div class="tien-shop">
          <span id="giatien-shop">${giaTien4 * giaTri}</span>
          <span style="color: red;">,000 đ</span>
      </div>
  </div>
  <a href="http://127.0.0.1:5501/Manh/index.html"><button class="nutcuoi btn">
  <span>XEM GIỎ HÀNG</span>
</button></a>
</div>`;

  boxShopi.style.display = "none";
};
let boxShopi = document.getElementById("box-shopi");
let btnShoping = document.getElementById("btn-shoping");
btnShoping.onclick = function () {
  if (boxShopi.style.display !== "block") {
    boxShopi.style.display = "block";
  } else {
    boxShopi.style.display = "none";
  }
};

let shoppingHead = document.getElementsByClassName("head")[0];

shoppingHead.onclick = function (e) {
  if (e.target.id === "btn-duong2") {
    let giaTien2 = e.target.parentElement.children[3].children[0].innerHTML;
    let giaTri = e.target.parentElement.children[1].innerHTML;
    giaTri = `${Number(giaTri) + 1}`;
    e.target.parentElement.children[1].innerHTML = giaTri;
    e.target.parentElement.parentElement.parentElement.parentElement.children[4].children[1].children[0].innerHTML =
      giaTien2 * giaTri;
  }
  if (e.target.id === "btn-am2") {
    let giaTien2 = e.target.parentElement.children[3].children[0].innerHTML;
    let giaTri = e.target.parentElement.children[1].innerHTML;
    giaTri = `${Number(giaTri) - 1}`;
    if (giaTri <= 0) {
      giaTri = 0;
      e.target.parentElement.children[1].innerHTML = giaTri;
      e.target.parentElement.parentElement.parentElement.parentElement.children[4].children[1].children[0].innerHTML =
        giaTien2 * giaTri;
    } else {
      e.target.parentElement.children[1].innerHTML = giaTri;
      e.target.parentElement.parentElement.parentElement.parentElement.children[4].children[1].children[0].innerHTML =
        giaTien2 * giaTri;
    }
  }
  if (e.target.id === "btn-close") {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.innerHTML =
      "";
  }
};
