function createAboutCard(){
    const card = document.createElement('div')
    card.className = 'card'
    const cardTitle = document.createElement('h3')
    cardTitle.innerText = 'Ad sit aliqua aute quis veniam qui aute tempor commodo magna id nulla ullamco. Enim velit esse enim ad. '
    const cardBody = document.createElement('p')
    cardBody.innerText='Lorem amet velit reprehenderit eu est excepteur ex officia. Et ea quis laboris ullamco. Officia tempor voluptate esse enim consequat amet.'
    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    return card
}
function createDescriptionCard(){
    const card = document.createElement('div')
    card.className = 'card'
    const cardBody = document.createElement('p')
    cardBody.innerText='Enim esse anim sunt nostrud in pariatur quis. Amet non esse dolor incididunt aliqua. Lorem amet velit reprehenderit eu est excepteur ex officia. Et ea quis laboris ullamco. Pariatur commodo labore tempor aute quis proident anim ipsum nulla.'
    card.appendChild(cardBody)
    return card
}
function createSecondDescriptionCard(){
    const card = document.createElement('div')
    card.className = 'card'
    const cardBody = document.createElement('p')
    cardBody.innerText='Dolore amet laboris irure sunt in est. Dolore ex aliqua fugiat id magna. Enim esse anim sunt nostrud in pariatur quis. Amet non esse dolor incididunt aliqua. Lorem amet velit reprehenderit eu est excepteur ex officia. Et ea quis laboris ullamco. Pariatur commodo labore tempor aute quis proident anim ipsum nulla.'
    card.appendChild(cardBody)
    return card
}
export function loadAbout(){
    let content = document.getElementById('content')
    content.innerHTML=''
    content.appendChild(createAboutCard())
    content.appendChild(createDescriptionCard())
    content.appendChild(createSecondDescriptionCard())
}