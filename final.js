/**
 * WEB222 – Final Assessment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: <Krishna Patel>
 *      Student ID: <104097217>
 *      Date: <17/04/2022>
 */

function getNow(){
  let date=new Date();
  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  mm = mm < 10 ? "0" + mm : mm;
  let dd = date.getDate();
  dd = dd < 10 ? "0" + dd : dd;
  let stringDate = mm + "/" + dd + "/" + yyyy;
  return stringDate;
}

function start() {
  let dateNode = document.createTextNode(getNow());

  let showResumeBtn = document.querySelector("#resume");
  let hidden= document.querySelector("#options-hiring");

  let showContactMeBtn = document.querySelector("#contact-me");
  let insertDate = document.querySelector("#now");
  showResumeBtn.addEventListener("click", function(){window.open("https://www.linkedin.com/in/krishna-patel-8796b81ab/");});
  showContactMeBtn.addEventListener("click", function(){window.open("#contactmeform",'_self');});

  hidden.addEventListener("click",hiddenOtherOptions);
  insertDate.appendChild(dateNode);
}
window.onload = start();


let form = document.querySelector('#contactme-form');
let submitBtn = document.querySelector('#send');
let resetBtn = document.querySelector('#reset');

submitBtn.onclick = (event) => {
    form.classList.add('was-validated');
};

resetBtn.onclick = (event) => {
   form.classList.remove('was-validated');
};

form["postal-code"].oninput = (event) => {
  let postalCode = form['postal-code'].value;
  let r = /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/;
  if (r.test(postalCode)) form['postal-code'].setCustomValidity('');
  else form['postal-code'].setCustomValidity('Please input a valid Canadian postal code.');
    };

form.phone.oninput = (event) => {
  let phone = form.phone.value;
  let r = /^((\(\d{3}\))|(\d{3}))\s?\d{3}[\s-]?\d{4}$/;
  if (r.test(phone)||phone==null) form.phone.setCustomValidity('');
  else form.phone.setCustomValidity('Please input a valid phone number.');
};

function hiddenOtherOptions() {
  let formoption1 = document.querySelector('.formoption1');
  let formoption2 = document.querySelector('.formoption2');
  let formoption3 = document.querySelector('.formoption3');
  let formoption4 = document.querySelector('.formoption4');
  let salary1 = document.querySelector('.salary1');
  let salary2 = document.querySelector('.salary2');
  formoption1.style.visibility="hidden";
  formoption2.style.visibility="hidden";
  formoption3.style.visibility="hidden";
  formoption4.style.visibility="hidden";
  salary1.style.visibility="visible";
  salary2.style.visibility="visible";
}
