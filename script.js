let menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click', function (){
    document.getElementById('navLinks').classList.toggle('show');
})

console.log(menuIcon);
console.log(document.getElementById('navLinks'));