export const OrderList = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()


    let ordersHTML = ""
    const divStringArray = orders.map(
        (order) => {   
            const totalPrice = order.metal.price + order.style.price + order.size.price

            let orderPrice = totalPrice.toFixed(2)
       
            return `<div class='orderList'>Order #${order.id} Total: $${orderPrice}</div>`
        }
    )

    ordersHTML += divStringArray.join("")
    
    return ordersHTML
}