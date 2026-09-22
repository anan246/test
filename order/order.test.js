const { createOrder } = require("./order");

describe("Order Tests", () => {

  // 1. Valid Order
  test("Valid order should be created successfully", () => {
    const cart = [
      { name: "Laptop", price: 50000, quantity: 1 }
    ];

    const result = createOrder(cart);

    expect(result.success).toBe(true);
    expect(result.message).toBe("Order created successfully");
    expect(result.total).toBe(50000);
  });


  // 2. Empty Cart
  test("Empty cart should fail", () => {
    const result = createOrder([]);

    expect(result.success).toBe(false);
    expect(result.message).toBe("Cart is empty");
    expect(result.items).toBe(0);
    expect(result.total).toBe(0);
  });


  // 3. Multiple Products
  test("Multiple products should have correct number of items", () => {
    const cart = [
      { name: "Laptop", price: 50000, quantity: 1 },
      { name: "Mouse", price: 1000, quantity: 2 },
      { name: "Keyboard", price: 2000, quantity: 1 }
    ];

    const result = createOrder(cart);

    expect(result.success).toBe(true);
    expect(result.items).toBe(3);
  });


  // 4. Coupon Applied
  test("Coupon should calculate discounted total correctly", () => {
    const cart = [
      { name: "Laptop", price: 50000, quantity: 1 }
    ];

    const coupon = {
      code: "SAVE10",
      type: "percentage",
      value: 10
    };

    const result = createOrder(cart, coupon);

    expect(result.discount).toBe(5000);
    expect(result.total).toBe(45000);
    expect(result.coupon).toBe("SAVE10");
  });


  // 5. No Coupon
  test("Without coupon, coupon value should be null", () => {
    const cart = [
      { name: "Mouse", price: 1000, quantity: 1 }
    ];

    const result = createOrder(cart);

    expect(result.coupon).toBeNull();
    expect(result.discount).toBe(0);
    expect(result.total).toBe(1000);
  });

});