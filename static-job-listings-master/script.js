
const data = fetch('./data.json')
.then(res=> res.json())
.then(data => {

    for(let i = 0; i < imgElem.length; i++){
        imgElem[i].src = data[i].logo
        role[i].innerHTML = data[i].role
        level[i].innerHTML = data[i].level
        h4[i].innerHTML = data[i].position
        h6[i].innerHTML = data[i].company

        if(data[i].new !== true){
            new_[i].setAttribute('id','don2')
        }
        else {
            new_[i].innerHTML = 'NEW!'
        }
        if(data[i].featured !== true){
            featured[i].setAttribute('id','don2')
        }
        else{
            featured[i].innerHTML= 'FEATURED'
        }

        for(let j =0; j< data[i].languages.length; j++){
            let lang = document.createElement('p')
            lang.innerHTML = data[i].languages[j]
            col4[i].appendChild(lang)
            lang.className = 'languages'

            lang.addEventListener('click', (e)=> {
                searchbox.style.display = 'block'
                let filter = e.target.innerHTML
                let filter_ = document.createElement('p')
                filter_.innerHTML = filter
                searchbox.appendChild(filter_)

                for(let i=0; i< col4.length; i++){
                    if(!col4[i].innerText.includes(searchbox.innerText)){
                        card[i].setAttribute('id', 'don2')
                    }
                }
                searchbox.setAttribute('class', 'search-items')
                clear.style.display = 'block'
            })
        }
        for(let k= 0; k < data[i].tools.length; k++){
            let tools = document.createElement('p')
            tools.innerHTML = data[i].tools[k]
            col4[i].appendChild(tools)
            tools.className = 'languages'

            tools.addEventListener('click', (e)=> {
                searchbox.style.display = 'block'
                let filter = e.target.innerHTML
                let filter_ = document.createElement('p')
                filter_.innerHTML = filter
                searchbox.appendChild(filter_)

                for(let i=0; i< col4.length; i++){
                    if(!col4[i].innerText.includes(searchbox.innerText)){
                        card[i].setAttribute('id', 'don2')
                    }
                }
                searchbox.setAttribute('class', 'search-items')
                clear.style.display = 'block'
            })
        }
     
        let li = document.createElement('li')
        li.innerHTML = data[i].postedAt
        itemsBelow[i].append(li)
        let li2 = document.createElement('li')
        li2.innerHTML = data[i].contract
        itemsBelow[i].append(li2)
        let li3 = document.createElement('li')
        li3.innerHTML = data[i].location
        itemsBelow[i].append(li3)
    }})


let imgElem = document.getElementsByTagName('img')

let role = document.getElementsByClassName('role')
let level = document.getElementsByClassName('level')
let itemsBelow = document.getElementsByClassName('item-below')

const h4 = document.querySelectorAll('h4')
const h6 = document.querySelectorAll('h6')
const new_ = document.getElementsByClassName('new')
const featured = document.getElementsByClassName('featured')
const col4 = document.getElementsByClassName('col-4')

const searchbox = document.getElementById('searchbox')
const clear = document.getElementById('clear')

clear.addEventListener('click', ()=> {
    searchbox.innerText = ''
    clear.style.display = 'none'
    searchbox.style.display = 'none'
    for(let i=0; i< col4.length; i++){
        card[i].removeAttribute('id','don2')
    }
})

const card = document.getElementsByClassName('card')
//search filter code


