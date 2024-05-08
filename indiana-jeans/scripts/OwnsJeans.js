import { setOwnsBlueJeans } from "./TransientState.js"

/* 
    Responsibility: Provide UI controls for survey taker to choose
        'yes' or 'no' for ownership of blue jeans

    Strategy:
        1. A component function that produces HTML for two radio
            buttons for 'Yes' and 'No'
*/


 /* -----------------------------------------------------------------------------------------------------
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}
    

        /*  name attribute being the same groups choices together to only allow one to be selected at a time.
            making different names will allow multiple selections. */
export const OwnJeansChoices = () => {

    document.addEventListener("change", handleOwnershipChange)

    let html = "<h2>Do you own a pair of blue jeans?</h2>"
    html += "<input type='radio' name='ownsJeans' value='true' /> Yes"
    html += "<input type='radio' name='ownsJeans' value='false' /> No"
    return html
}
// each individual question/choice function is considered a *** component function ***. This will prepare me for React





/*
                                                Tracking Transient State
            There are two kinds of state to track when you are developing an application. Transient state and permanent state.

            Transient State
            When your customer is interacting with input fields in your user interface - text fields, dropdowns, radio buttons,
            text buttons, etc. - you need to store their current choice in temporary, or transient state. This kind of state changes
            every time they type a character into a field, or make a choice on a group of radio buttons.

            Permanent State
            The moment the user clicks a Save or Send or Order button, it is the signal that choices are done being made and it is time 
            to make their current transient state into permanent state. All of the choices are saved in a database. In your case, you will 
            send their transient state to be stored in the database.json file in the API running on your machine.

            Think of permanent state as completed, and unchanging.
*/