////////////// start javascript untuk animasi yang berada di home \\\\\\\\\\\\\\\\\\\\\

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000)

/////////////// End javascript untuk animasi yang berada di home \\\\\\\\\\\\\\\









////////////// Start Professional skill untuk animasi digital \\\\\\\\\\\\\\\\\

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots*marked/100);
  var points = "";
  var rotate = 360 / dots;

  for(let i = 0; i < dots ; i++){
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll('.points');
  for(let i = 0; i<percent; i++){
    pointsMarked[i].classList.add('marked')
  }
})
////////////// End Professional skil animasi digital \\\\\\\\\\\\\\\\\\\\\\\\\\





/////////////////// Start mixitup taxbar skill section portofolio section \\\\\\\\\\\\\\\\\\\\\\\\\\

document.addEventListener('DOMContentLoaded', function() {
  var mixer = mixitup('.portfolio-gallery');
});
/////////////////// End mixitup portofolio section \\\\\\\\\\\\\\\\\\\\\\\\\\







///////////////////////// Start Active Menu \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Kode JavaScript ini mengatur menu navigasi untuk menandai link sebagai "aktif" berdasarkan posisi scroll halaman. Fungsi activeMenu() menentukan link mana yang harus di-highlight dengan menghapus kelas "active" dari semua link dan menambahkannya ke link yang sesuai dengan bagian halaman yang sedang dilihat. Kode ini juga memperbarui link aktif setiap kali pengguna melakukan scroll. Ada kesalahan penulisan pada event listener untuk scroll, yang seharusnya ditulis sebagai window.addEventListener("scroll", activeMenu)

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
  let len = section.length;
  while(--len && window.scrollY + 97 < section [len].offsetTop){}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

///////////////////////// End Active Menu \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\





///////////////////////// Start Toggle icon Navbar \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}
  window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

///////////////////////// End Toggle icon Navbar \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




///////////////////////// Start parallax/otomatis animasi \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show-items");
    }else{
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

///////////////////////// End parallax/otomatis animasi \\\\\\\\\\\\\\\\\\\\\\\\