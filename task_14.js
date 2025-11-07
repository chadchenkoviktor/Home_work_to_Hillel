task = 'task № 14';
console.log(task);

const parent = document.querySelector('.card-3')
const butNext = document.querySelector('.next');
const butPrev = document.querySelector('.prev');
const img = document.querySelector('.img');
const wrapper = document.querySelector('.wrapper');
const bul1 = document.querySelector('.bul1');
const bul2 = document.querySelector('.bul2');
const bul3 = document.querySelector('.bul3');
const bul4 = document.querySelector('.bul4');
let n = 0;
butNext.addEventListener('click', function(event) {
    img.src = `img/${n+=1}.jpg`;
    butPrev.style.visibility ='visible';
    n > 3 ? butNext.style.visibility ='hidden' : butNext.style.visibility ='visible';
      
})

butPrev.addEventListener('click', function() {
    img.src = `img/${n-=1}.jpg`;
    butNext.style.visibility ='visible';
    n < 1 ?  butPrev.style.visibility ='hidden': butPrev.style.visibility ='visible';     
})

bul1.addEventListener('click', function() {
    bul3.style.backgroundColor = '#7a7878';
    bul2.style.backgroundColor = '#7a7878';    
    bul4.style.backgroundColor = '#7a7878';    
    img.src = 'img/1.jpg';
    bul1.style.backgroundColor = 'blue'; 
})

bul2.addEventListener('click', function() {
    bul1.style.backgroundColor = '#7a7878';
    bul3.style.backgroundColor = '#7a7878';
    bul4.style.backgroundColor = '#7a7878';
    img.src = 'img/2.jpg';
    bul2.style.backgroundColor = 'blue'; 
})

bul3.addEventListener('click', function() {
    bul1.style.backgroundColor = '#7a7878';
    bul2.style.backgroundColor = '#7a7878';
    bul4.style.backgroundColor = '#7a7878';
    img.src = 'img/3.jpg';
    bul3.style.backgroundColor = 'blue'; 
})

bul4.addEventListener('click', function() {
    bul1.style.backgroundColor = '#7a7878';
    bul2.style.backgroundColor = '#7a7878';
    bul3.style.backgroundColor = '#7a7878';
    img.src = 'img/4.jpg';
    bul3.style.backgroundColor = 'blue'; 
})
