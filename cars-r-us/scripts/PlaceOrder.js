import { saveOrder } from "./TransientState.js"


const handleOrderSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "placeOrder") {
        saveOrder()
    }
}



export const PlaceOrder = () => {

    document.addEventListener("click", handleOrderSubmissionClick)

    return "<div><button id='placeOrder'>Place Custom Car Order</button></div>"
}