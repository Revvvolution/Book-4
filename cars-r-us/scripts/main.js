import { PaintOptions } from "./PaintOptions.js"
import { InteriorOptions } from "./InteriorOptions.js"
import { WheelOptions } from "./WheelOptions.js"
import { TechPackageOptions } from "./TechOptions.js"
import { PlaceOrder } from "./PlaceOrder.js"
import { OrderList } from "./Orders.js"

const container = document.querySelector("#container")

const render = async () => {

    const paintOptionsHTML = await PaintOptions()
    const interiorOptionsHTML = await InteriorOptions()
    const wheelOptionsHTML = await WheelOptions()
    const techPackageOptionsHTML = await TechPackageOptions()
    const orderButtonHTML = await PlaceOrder()
    const orderListHTML = await OrderList()
   
    const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${paintOptionsHTML}
            </section>

            <section class="choices__interiors options">
                <h2>Interior</h2>
                ${interiorOptionsHTML}
            </section>

            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </section>

            <section class="choices__techPackages options">
            <h2>Technologies</h2>
            ${techPackageOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${orderButtonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
                ${orderListHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderPlaced", event => {
    console.log("State of data has changed. Regenerating HTML...");
    render()
})

render()