const burger = document.querySelector('.burger');
const linksContainer = document.querySelector('.links-container');
const show = document.querySelector('.show');
const nav = document.querySelector('.navbar');


burger.addEventListener('click', function(){
 linksContainer.classList.toggle('show');
 burger.classList.toggle('burger-color')
});


// scroll
const scrollLinks = document.querySelectorAll('.nav-link');


scrollLinks.forEach(function(link){
 link.addEventListener('click', function(e){
  e.preventDefault();
  const id = e.currentTarget.getAttribute('href').slice(1);
  const element = document.getElementById(id);
  const navHeight = nav.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  let position = element.offsetTop - navHeight;


  window.scrollTo({
   left:0, top: position,
  })
 });
});

// highlight

const sections = document.querySelectorAll('.section');

window.addEventListener('scroll',function(){
 let current = '';
 sections.forEach(function(section){
  const sectionTop = section.offsetTop;
  const sectionHeight = section.clientHeight;
  if(pageYOffset >= (sectionTop)-sectionHeight/3){
   current = section.getAttribute('id');
  }
 })
 

 scrollLinks.forEach(function(link){
  link.classList.remove('active');
  if(link.classList.contains(current)){
   link.classList.add('active')
  }
 });
});


scrollLinks.forEach(function(link){
 link.addEventListener('click', function(){
  linksContainer.classList.remove('show')
  burger.classList.remove('burger-color')
 })
});