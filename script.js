let longLink = document.querySelector('#long-link')
let shortenBtn = document.querySelector('#shorten-btn')
let generatedLink = document.querySelector('#generated-link')
let copyBtn = document.querySelector('.copy')
let emptyInputText = document.querySelector('.handle-empty-input')

async function fetchShortLink(){
    const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${longLink.value}`)

    if(!data.ok){
        emptyInputText.style.display = 'block'
    } else{ 
        emptyInputText.style.display = 'none'
        const jsonResult = await data.json()
        const  newLink = jsonResult.result.short_link2
        generatedLink.value = newLink 
   }    
}

