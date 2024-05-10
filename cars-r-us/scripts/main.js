



const container = document.querySelector("#container")

const render = async () => {
    // const metalOptionsHTML = await MetalOptions()
   
    const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Select A Color:</h2>
                
            </section>

            <section class="choices__interiors options">
                <h2>Select An Interior:</h2>
                
            </section>

            <section class="choices__wheels options">
                <h2>Select Wheels:</h2>
                
            </section>

            <section class="choices__techPackage options">
            <h2>Select Tech Package:</h2>
            
            </section>
        </article>

        <article class="order">
            
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
                
        </article>
    `

    container.innerHTML = composedHTML
}

// document.addEventListener("newOrderPlaced", event => {
//     console.log("State of data has changed. Regenerating HTML...");
//     render()
// })

render()