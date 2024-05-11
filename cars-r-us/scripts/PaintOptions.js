import { setPaintChoice } from "./TransientState.js"

const handlePaintChoice = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
       const chosenOption = parseInt(changeEvent.target.value)
       setPaintChoice(chosenOption)
    }
 }



 export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    document.addEventListener("change", handlePaintChoice)

    let paintChoiceHTML = ""

    paintChoiceHTML += "<select id='paint'>"
    paintChoiceHTML += "<option value='0'>Select a paint color</option>"

    const optionsArray = paints.map(
        (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )
    
    paintChoiceHTML += optionsArray.join("")
    paintChoiceHTML += "</select>"

    return paintChoiceHTML
}