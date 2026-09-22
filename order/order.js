function createOrder(cart, coupon = null) {
  
  if (!cart || cart.length === 0) {
    return {
      success: false,
      message: "Cart is empty",
      items: 0,
      total: 0,
      coupon: null
    };
  }

  
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  
  let discount = 0;

  if (coupon) {
    if (coupon.type === "percentage") {
      discount = (subtotal * coupon.value) / 100;
    } else if (coupon.type === "fixed") {
      discount = coupon.value;
    }
  }

  const total = subtotal - discount;

  return {
    success: true,
    message: "Order created successfully",
    items: cart.length,
    subtotal,
    discount,
    total,
    coupon: coupon ? coupon.code : null
  };
}

module.exports = { createOrder };