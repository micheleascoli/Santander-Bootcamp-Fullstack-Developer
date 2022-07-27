//Usando outra API, pois a do curso estava com problema.

const BASE_URL = 'https://cataas.com/cat?json=true';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return 'https://cataas.com/'+json.url; 
    } catch (e){
        console.log(e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};


catBtn.addEventListener('click', loadImg);

loadImg();


// API do curso 
/**
 * const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl; 
    } catch (e){
        console.log(e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};


catBtn.addEventListener('click', loadImg);

loadImg();

*/

// Outra maneira  

/**

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');


const getCats = async () => {
    const data = await fetch(BASE_URL)
        .then( res => res.json())
        .catch(e => console.log(e))

    return data.webpurl;
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats(); 
};


catBtn.addEventListener('click', loadImg);

loadImg(); */
