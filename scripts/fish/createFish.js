
// Import the function that returns a copy of the fish array

import { mostHolyFish, nonHolyFish, soldierFish } from "./filterFish.js"


export const FishList = () => {
    // Invoke the function that you imported from the database module
    
    let godFish = mostHolyFish()
    let warriorFish= soldierFish()
    let peasentFish= nonHolyFish()
    var fishes = [...godFish, ...warriorFish, ...peasentFish]
    

    // Start building a string filled with HTML syntax
    var htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {
        // <div><img  class="fish__image image--card" src="${fish.image}" /></div>
        // Why is there a backtick used for this string? cause of string interpolation ya ding dong
        htmlString += `<section class="fishcard">
            <div><img  class="fish-image" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length} inch(es)</div>
            <div class="fish__location">Location: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}