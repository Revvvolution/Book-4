const transientState = {
    "paintId": 0,
    "interiorId": 0,
    "wheelId": 0,
    "techPackageId": 0
}


    // Setter Functions for Each State's Property
export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setWheelChoice = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

export const setTechPackageChoice = (chosenTechPackage) => {
    transientState.techPackageId = chosenTechPackage
    console.log(transientState)
}


export const saveOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)

}