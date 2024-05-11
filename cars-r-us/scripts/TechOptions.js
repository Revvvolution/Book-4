import { setTechPackageChoice } from "./TransientState.js"

const handleTechPackageChoice = (changeEvent) => {
    if (changeEvent.target.id === "techPackage") {
       const chosenOption = parseInt(changeEvent.target.value)
       setTechPackageChoice(chosenOption)
    }
 }



 export const TechPackageOptions = async () => {
    const response = await fetch("http://localhost:8088/techPackages")
    const techPackages = await response.json()

    document.addEventListener("change", handleTechPackageChoice)

    let techPackageChoiceHTML = ""

    techPackageChoiceHTML += "<select id='techPackage'>"
    techPackageChoiceHTML += "<option value='0'>Select a tech package</option>"

    const optionsArray = techPackages.map(
        (techPackage) => {
            return `<option value="${techPackage.id}">${techPackage.type}</option>`
        }
    )
    
    techPackageChoiceHTML += optionsArray.join("")
    techPackageChoiceHTML += "</select>"

    return techPackageChoiceHTML
}