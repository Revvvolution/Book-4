import { setWheelChoice } from "./TransientState.js"

const handleWheelChoice = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
       const chosenOption = parseInt(changeEvent.target.value)
       setWheelChoice(chosenOption)
    }
 }



 export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", handleWheelChoice)

    let wheelChoiceHTML = ""

    wheelChoiceHTML += "<select id='wheel'>"
    wheelChoiceHTML += "<option value='0'>Select a wheel color</option>"

    const optionsArray = wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    )
    
    wheelChoiceHTML += optionsArray.join("")
    wheelChoiceHTML += "</select>"

    return wheelChoiceHTML
}