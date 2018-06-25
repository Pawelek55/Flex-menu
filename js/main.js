/*document.addEventListener('DOMContentLoaded', function(){
    console.log('domek');
})*/

var subtitles = document.querySelectorAll('.box');

function toggleOpen(){
//    console.log(this);
    this.classList.toggle('open');
}

function toggleActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

subtitles.forEach(box => box.addEventListener('click', toggleOpen));
subtitles.forEach(box => box.addEventListener('transitionend', toggleActive));