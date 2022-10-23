let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let reset = document.querySelector('.reset')

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

reset.onclick = function(){
    one.disabled = false;
    two.disabled = false;
    three.disabled = false;
    one.checked = false;
    two.checked = false;
    three.checked = false;
}