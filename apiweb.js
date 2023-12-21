

let dataHere = document.getElementsByClassName('data-here')[0];
let btns = document.getElementsByClassName('btn-choice');

function handleClick(event) { 
    let num = event.target.textContent;
    fetchPlanet(num);
    console.log(event.target.textContent);
}

for ( let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', handleClick);
}



function render(name, value){
    if (typeof(value) == 'object') {
        const keys = Object.keys(value);
        keys.forEach(key => {
            render(key, value[key]);
        })
    } else {
        document.body.innerHTML += name + ' : ' + value + '<br>';
    }
}

function renderPlanet(name, value){
    if (typeof(value) == 'object') {
        const keys = Object.keys(value);
        keys.forEach(key => {
            renderPlanet(key, value[key]);
        })
    } else {
        dataHere.innerHTML += name + ' : ' + value + '<br>';
    }
}
let urls = {
    users: 'https://randomuser.me/api/?results=2',
    planets: 'https://swapi.dev/api/planets/10/',
    wookiee: 'https://swapi.dev/api/planets/10/?format=wookiee'
}



function clear(el){
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

function fetchPlanet(num){
    let path = `https://swapi.dev/api/planets/${num}/`
    fetch(path)
        .then(res => res.json())
        .then(data => { 
          clear(dataHere);
          renderPlanet('user', data);   
    })

}

    