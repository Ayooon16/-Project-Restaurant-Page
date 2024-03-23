function createHomeCard(){
    const card = document.createElement('div')
    card.className = 'card'
    const cardTitle = document.createElement('h3')
    cardTitle.innerText = 'Do ut non adipisicing non ut elit.'
    const cardBody = document.createElement('p')
    cardBody.innerText='Lorem amet velit reprehenderit eu est excepteur ex officia. Et ea quis laboris ullamco.'
    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    return card
}
function createDescriptionCard(){
    const card = document.createElement('div')
    card.className = 'card'
    const cardBody = document.createElement('p')
    cardBody.innerText='Lorem amet velit reprehenderit eu est excepteur ex officia. Et ea quis laboris ullamco. Pariatur commodo labore tempor aute quis proident anim ipsum nulla.'
    card.appendChild(cardBody)
    return card
}
export function loadHome(){
    let content = document.getElementById('content')
    content.innerHTML=''
    content.appendChild(createHomeCard())
    content.appendChild(createDescriptionCard())
}