//there once was an html who made locations

import { getLocations } from "../database.js";

export const locationsList = () =>{
    let locationsArray = getLocations()

    var htmlLocations = `<p>"The sea, the great unifier, is man's only hope. Now, as never before, the old phrase has a literal meaning: we are all in the same boat." - Jacques Yves Cousteau</p>
    <p>"The ocean is a central image. It is the symbolism of a great journey." - Enric Sala</p>
    <p>"Fishing is not just an escape, it is a portal to an ancient place. We're privileged to be able to go there." - Tred Barta</p>
    <p>"The sea, the great unifier, is man's only hope. Now, as never before, the old phrase has a literal meaning: we are all in the same boat." - Jacques Yves Cousteau</p>
    <br>`

    for (const location of locationsArray) {
        
        htmlLocations += `<br><b>${location.place}</b><li>${location.description}</li>`
        
    }
    return htmlLocations
}