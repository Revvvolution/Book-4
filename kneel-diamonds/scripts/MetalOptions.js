import { setMetalChoice } from "./TransientState.js"

const handleMetalChoice = (changeEvent) => {
    if (changeEvent.target.name === "metal") {
        const convertToInteger = parseInt(changeEvent.target.value)
        setMetalChoice(convertToInteger)
    }
}



export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", handleMetalChoice)

    let metalChoiceHTML = ""

    const divStringArray = metals.map(
        (metal) => {
            return `<div>
                <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal} 
            </div>`
        }
    )
    
    metalChoiceHTML += divStringArray.join("")
   

    return metalChoiceHTML
}


    /*  // The regular way. Replaced with map() array method above
    for (const metal of metals) {
        metalChoiceHTML += `<div>
            <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal} 
        </div>`
    }
    */