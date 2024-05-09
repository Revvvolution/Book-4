import { setSizeChoice } from "./TransientState.js"

const handleSizeChoice = (changeEvent) => {
    if (changeEvent.target.name === "gemSize") {
        const convertToInteger = parseInt(changeEvent.target.value)
        setSizeChoice(convertToInteger)
    }
}



export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleSizeChoice)


    let sizeChoiceHTML = ""

    const divStringArray = sizes.map(
        (size) => {
            return `<div>
            <input type='radio' name='gemSize' value='${size.id}' /> <strong>${size.carats}</strong> carat(s) 
        </div>`
        }
    )
    
        sizeChoiceHTML += divStringArray.join("")

        return sizeChoiceHTML
}


    /*  // The regular way. Replaced with map() array method above
    for (const size of sizes) {
        sizeChoiceHTML +=`<div>
            <input type='radio' name='gemSize' value='${size.id}' /> <strong>${size.carats}</strong> carat(s) 
        </div>`
    }
    */