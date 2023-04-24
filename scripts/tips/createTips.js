//yo dis where the HT meets the ML... as far as tips concerned yee

import { getTips } from "../database.js"

export const tipsList = () =>{
    
    let tipslist = getTips()


    var htmlTips = `<h3>Fish Maintenance Tips</h3>
    `

    for (const tip of tipslist) {
        htmlTips += `<li>${tip.description}</li><br>
        `
        
    }
    return htmlTips
}