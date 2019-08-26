console.log("hello Nick, you sexy bearded man")

let name = "Nick"

console.log("My name is " + name)

console.warn("Get out of here, its gonna blow!!")

/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
const sectionEl = document.querySelector(".article__section")

/*
    This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer")

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
const smallTextEl = document.querySelector(".smallText")
console.log("What is smallText?" ,smallTextEl)
smallTextEl.classList.remove("smallText")
smallTextEl.classList.add("largeText")

