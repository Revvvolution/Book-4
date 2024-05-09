import { setStyleChoice } from "./TransientState.js"

const handleStyleChoice = (changeEvent) => {
    if (changeEvent.target.name === "style") {
        const convertToInteger = parseInt(changeEvent.target.value)
        setStyleChoice(convertToInteger)
    }
}



export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChoice)
    

    let styleChoiceHTML = ""

    const divStringArray = styles.map(
        (style) => {
            return `<div>
            <input type='radio' name='style' value='${style.id}' /> ${style.style} 
        </div>`
        }
    )

        styleChoiceHTML += divStringArray.join("")
    
        return styleChoiceHTML
}


    /*  // The regular way. Replaced with map() array method above
    for (const style of styles) {
        styleChoiceHTML += `<div>
            <input type='radio' name='style' value='${style.id}' /> ${style.style} 
        </div>`
    }
    */