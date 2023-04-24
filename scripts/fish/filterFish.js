import { getFish } from "../database.js";

var fishlist =getFish()

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    var holyFish = []
    
    for (let fish of fishlist) {
        
        if(fish.length %3 ===0){
            holyFish.push(fish)
        }
    }
    
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    var soldiers = []
    for (const fish of fishlist) {
        if(fish.length %5 === 0 && fish.length != 15){
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    var regularFish = []
    for (const fish of fishlist) {
        if(fish.length %3 != 0 && fish.length%5 != 0){
            regularFish.push(fish)
        }
    }
    return regularFish
}