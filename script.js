let longLink = document.querySelector('#long-link')
let shortenBtn = document.querySelector('#shorten-btn')

let emptyInputText = document.querySelector('.handle-empty-input')
let resultBox = document.querySelector('.result-box')
let flexResultBox =document.querySelector('.flex-result-box')
const listLinks = []

async function fetchShortLink(){
    const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${longLink.value}`)
    
    try{
    if(!data.ok){
        emptyInputText.style.display = 'block'
        resultBox.style.display = 'none'
    } else{ 
        emptyInputText.style.display = 'none'
        const jsonResult = await data.json()
        const  newLink = jsonResult.result.short_link2 

        listLinks.push(newLink)

        let htmlList = ''
        for(let i = 0; i < listLinks.length; i++){
            let singleLink = listLinks[i]
            html = `<section class="result-box">
                    <input type="text" class="generated-link" value= '${singleLink}' readonly>
                    <button class="copy">Copy</button>
                    </section>`
            htmlList += html
        }
        flexResultBox.innerHTML = htmlList
        let generatedLink = document.querySelector('.generated-link')

        function copy(){
            function copyNewUrl(){
                generatedLink.select()
                navigator.clipboard.writeText(generatedLink.value)
            }
            let copyBtn = document.querySelector('.copy')
            copyBtn.addEventListener('click', copyNewUrl)
            
        }

        copy()
        
   }}catch(error){
    console.error(error.message)
   } 
}
shortenBtn.addEventListener('click', fetchShortLink)


