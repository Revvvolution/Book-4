import { MetalOptions } from './MetalOptions.js'
import { PlaceOrder } from './PlaceOrder.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'
import { OrderList } from './Orders.js'

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()
    const placeOrderHTML = await PlaceOrder()
    const orderListHTML = await OrderList()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Select A Metal:</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Select A Size:</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Select A Style:</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${placeOrderHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
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