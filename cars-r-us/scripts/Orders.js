export const OrderList = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=wheel&_expand=techPackage")
    const orders = await fetchResponse.json()


    let ordersHTML = ""
    const divStringArray = orders.map(
        (order) => {   
            const totalPrice = order.paint.price + order.interior.price + order.wheel.price + order.techPackage.price

            let orderPrice = totalPrice.toFixed(2)
       
            return `<div class='orderList'>
                Order #${order.id} <br> 
                ${order.paint.color} car with ${order.wheel.type} wheels, ${order.interior.type} interior, and the ${order.techPackage.type}.<br> 
                Total Cost: $${orderPrice}
            </div>`
        }
    )

    ordersHTML += divStringArray.join("")
    
    return ordersHTML
}