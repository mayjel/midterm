import {func} from "./img.js"
import {func2} from "./info.js"
import {func3} from "./card.js"

let a = document.getElementById("sectionOne")

let Obj1 ={
    title: "THE FOREST",
    desc: " A dense expanse of towering trees, undergrowth, and diverse flora, forests are vital ecosystems that teem with life. Characterized by a rich tapestry of greenery, they provide habitats for countless species of animals, birds, and insects. ",
    btn:"Contact Me",
    myImg: "act2/js/img5.jpg"
}

let b = document.getElementById("sectionTwo")

let Obj2={
    title2: "FLOWER'S",
    img1: "js/a.jpg",
    desc1: "A flower's existence is a dance of ephemeral grace, fleeting yet eternally imprinting the soul with its colors, scents, and the promise of new beginnings. ",
    btn1: "Know More",
    img2: "js/b.jpg",
    desc2: "In every petal of a flower lies a story of resilience, as they endure storms yet emerge vibrant and triumphant, reminding us of the strength within fragility. ",
    btn2: "Know More",
    img3: "js/c.jpg",
    desc3: "Flowers are nature's poetry, blooming with beauty and whispering tales of love and renewal amidst their delicate petals.",
    btn3: "know More"
}

let {title, desc, btn, myImg} = Obj1
a.append(func2(title,desc,btn))
a.append(func(myImg))


let {title2, img1, desc1, btn1, img2, desc2, btn2, img3, desc3, btn3} = Obj2
b.append(func3(title2,img1,desc1,btn1,img2,desc2,btn2,img3,desc3,btn3)) 


