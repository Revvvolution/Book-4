import { setInteriorChoice } from "./TransientState.js"

const handleInteriorChoice = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
       const chosenOption = parseInt(changeEvent.target.value)
       setInteriorChoice(chosenOption)
    }
 }



 export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener("change", handleInteriorChoice)

    let interiorChoiceHTML = ""

    interiorChoiceHTML += "<select id='interior'>"
    interiorChoiceHTML += "<option value='0'>Select an interior material</option>"

    const optionsArray = interiors.map(
        (interior) => {
            return `<option value="${interior.id}">${interior.type}</option>`
        }
    )
    
    interiorChoiceHTML += optionsArray.join("")
    interiorChoiceHTML += "</select>"

    return interiorChoiceHTML
}