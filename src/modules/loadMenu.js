import Icon from './bread.jpeg'
function createMenuCard(){
    const card = document.createElement('div')
    card.className = 'card'
    const img = document.createElement('img')
    img.src=Icon
    const cardTitle = document.createElement('h3')
    cardTitle.innerText = 'Dolor consectetur commodo sit amet enim ipsum. Do ut non adipisicing non ut elit.'
    const cardBody = document.createElement('p')
    cardBody.innerText='Lorem amet velit reprehenderit eu est excepteur ex officia. Et ea quis laboris ullamco. Mollit nostrud cupidatat cupidatat tempor reprehenderit anim ipsum labore esse ex laboris laborum ut.'
    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    return card
}

export function loadMenu(){
    let content = document.getElementById('content')
    content.innerHTML=''
    content.appendChild(createMenuCard())
}