window.addEventListener(type:`load`, setup);
    const width = 640;
    const height = 404;
    const columns = 8;
    const rows = 3;

function setup(){
    const container = document.createElement;
    document.body.appendChild(container);
    container.classList.add('container');   
    for(let i = 0; i < columns * rows; i++) {
        console.log('i', i);
        const card = createCard();
        document.body
    } 
}

function createCard() {
    const card = document.createElement( `div`);
    card.classList.add('char');
    return card;
}
