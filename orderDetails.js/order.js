 function createOrder(items, coupon) {
    if (!items || items.length === 0) {
        return {
            success: false,
            message: "Cart is empty",
            order: null
        };
    }

    let total = items.reduce((sum, item) => {
        return sum + item.price + item.quantity;
    }, 0);

    if (coupon === "SAVE10") {
        total = total * 0.9;
    }

    return {
        success: true,
        message: "Order created successfully",
        order: {
            items,
            total,
            coupon: coupon
        }
    };
}

function getOrderStatus(order) {
    if (order.total > 1000) {
        return "PREMIUM";
    }

    return "STANDARD";
}

module.exports = {
    createOrder,
    getOrderStatus
};
