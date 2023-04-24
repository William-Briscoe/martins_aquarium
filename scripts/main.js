import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}


// Import the FishList function from the correct module
import { FishList } from "./fish/createFish.js"
import { tipsList } from './tips/createTips.js'
import { locationsList } from './locations/createLocations.js'
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
var parentHTMLElement = document.querySelector('#fish-collection')
parentHTMLElement.innerHTML = FishList()

parentHTMLElement = document.querySelector('#sideTipsList')
parentHTMLElement.innerHTML = tipsList()

parentHTMLElement = document.querySelector('#locations-gohere')
parentHTMLElement.innerHTML = locationsList()