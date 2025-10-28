task = 'task № 11.3';
console.log(task);

window.onload = function() {
    const img = document.querySelector('.img_velo');
    img.src = `img/${Math.floor(Math.random() * 10)}.jpg`;
    img.setAttribute('src', src);
}