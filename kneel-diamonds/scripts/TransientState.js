const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0
}

//"setter" Functions for transient state modification
export const setMetalChoice = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setSizeChoice = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const setStyleChoice = (chosenStyle) => {
    transientState.styleId = chosenStyle
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

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)

}