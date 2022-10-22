let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');

one.onclick = function(){
    if(one.checked === true){
        one.disabled = 'true';
    }
}

two.onclick = function(){
    if(two.checked === true){
        two.disabled = 'true';
    }
}

three.onclick = function(){
    if(three.checked === true){
        three.disabled = 'true';
    }
}