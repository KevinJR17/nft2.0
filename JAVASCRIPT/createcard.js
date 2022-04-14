export function createcard(){
        const container = document.createElement('div')
        container.className = "container"

        const wrapper = document.createElement('div')
        wrapper.className = "wrapper"
        container.appendChild(wrapper)

        const img_top = document.createElement('div')
        img_top.className = "img-top"
        wrapper.appendChild(img_top)

        const img_top1 = document.createElement('img')
        img_top1.src='./images/image-equilibrium.jpg'
        img_top1.alt=''
        img_top.appendChild(img_top1)

        const app = document.querySelector('#app')
        app.appendChild(container)

        const img_overlay = document.createElement('div')
        img_overlay.className="img-overlay"
        img_top.appendChild(img_overlay)

        const img_overlay1 = document.createElement('img')
        img_overlay1.src='./images/icon-view.svg'
        img_overlay1.alt=''
        img_overlay.appendChild(img_overlay1)

        const box_text = document.createElement('div')
        box_text.className = "box-text"
        wrapper.appendChild(box_text)

        const box_text1 = document.createElement('a')
        box_text1.textContent = "Equilibrium #3429"
        box_text.appendChild(box_text1)

        const box_text2 = document.createElement('p')
        box_text2.textContent = "Our Equilibrium collection promotes balance and calm."
        box_text.appendChild(box_text2)

        const flex = document.createElement('div')
        flex.className="flex"
        box_text.appendChild(flex)

        const eth = document.createElement('div')
        eth.className="eth"
        flex.appendChild(eth)

        const img_icon = document.createElement('img')
        img_icon.src='./images/icon-ethereum.svg'
        img_icon.alt=''
        eth.appendChild(img_icon)

        const eth_text = document.createElement('p')
        eth_text.textContent = "0.041 ETH"
        eth.appendChild(eth_text)

        const days = document.createElement('div')
        days.className="days"
        flex.appendChild(days)

        const img_days = document.createElement('img')
        img_days.src='./images/icon-clock.svg'
        img_days.alt=''
        days.appendChild(img_icon)

        const days_text = document.createElement('p')
        days_text.textContent = "3 days left"
        days.appendChild(days_text)

        const author = document.createElement('div')
        author.className="author"
        box_text.appendChild(author)

        const img_author = document.createElement('img')
        img_author.src='./images/image-avatar.png'
        img_author.alt=''
        author.appendChild(img_author)

        const text_author = document.createElement('p')
        text_author.textContent = "Creation of"
        author.appendChild(text_author)
        
        const name1 = document.createElement('div')
        name1.className="name"
        author.appendChild(name1)

        const text_author2 = document.createElement('a')
        text_author2.textContent = "Jules Wyvern"
        name1.appendChild(text_author2)

}