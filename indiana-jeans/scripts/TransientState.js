// Set up the transient state data structure and provide initial values
const transientState = {
    "ownsBlueJeans": false,        // can be true or false
    "socioLocationId": 0
}


// Functions to modify each property of transient state
// This is the mechanism in which other modules can change the state without reaching directly into the above state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
    console.log(transientState)
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
    console.log(transientState)
}


// Function to convert transient state to permanent state
// POST in software development means "CREATE"
// The key name "Content-Type" in the headers object must be surrounded in quotations because it has a dash in the name
// How we describe json encoded data when we make a request over the internet
// body - where we send the data with the POST request.  *** Must convert data types to string to send to the API by using JSON.stringify() ***
export const saveSurveySubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/submissions", postOptions)

    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
    
}