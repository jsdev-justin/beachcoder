
var html=""
var linkCol = document.querySelector(".link-col");
var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");

testimonials.forEach(t=>{
    html += `<div class='white p-2'><p class='p'>${t.comment}</p><h5>-${t.name}</h5><p class='p'>Rated:<span class='yellow margin-left'>${t.rated}</span></p></div>`
})

linkCol.innerHTML = html;


burger.onclick=()=>{
    console.log('fx fired')
    // menu.classList.toggle("active");
    // var content = this.nextElementSibling;
    if (menu.style.maxHeight){
      menu.style.maxHeight = null;
    } else {
      menu.style.maxHeight = "100px";
    }
}