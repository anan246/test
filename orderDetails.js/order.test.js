const { createOrder, getOrderStatus } = require("./order");

describe("Order Tests", () => {

  // 1. Valid Order
  test("Valid order should be created successfully", () => {
    const items = [
      { name: "Laptop", price: 50000, quantity: 1 }
    ];

    const result = createOrder(items);

    expect(result.success).toBe(true);
    expect(result.message).toBe("Order created successfully");
    expect(result.order.items).toEqual(items);

    // Expected correct total = 50000
    expect(result.order.total).toBe(50000);
  });


  // 2. Empty Cart
  test("Empty cart should fail", () => {
    const result = createOrder([]);

    expect(result.success).toBe(false);
    expect(result.message).toBe("Cart is empty");
    expect(result.order).toBeNull();
  });


  // 3. Multiple Products
  test("Multiple products should have correct number of items", () => {
    const items = [
      { name: "Laptop", price: 50000, quantity: 1 },
      { name: "Mouse", price: 1000, quantity: 2 },
      { name: "Keyboard", price: 2000, quantity: 1 }
    ];

    const result = createOrder(items);

    expect(result.success).toBe(true);
    expect(result.order.items).toHaveLength(3);
  });


  // 4. Coupon Applied
  test("Coupon should calculate discounted total correctly", () => {
    const items = [
      { name: "Laptop", price: 1000, quantity: 2 }
    ];

    const result = createOrder(items, "SAVE10");

    // Correct total = 1000 × 2 = 2000
    // After 10% discount = 1800
    expect(result.order.total).toBe(1800);
    expect(result.order.coupon).toBe("SAVE10");
  });


  // 5. No Coupon
  test("Without coupon, coupon value should be null", () => {
    const items = [
      { name: "Mouse", price: 1000, quantity: 1 }
    ];

    const result = createOrder(items);

    expect(result.order.coupon).toBeNull();
  });


  // Additional: Order Status
  test("Order above 1000 should be PREMIUM", () => {
    const order = {
      total: 1500
    };

    expect(getOrderStatus(order)).toBe("PREMIUM");
  });


  test("Order of 1000 or less should be STANDARD", () => {
    const order = {
      total: 1000
    };

    expect(getOrderStatus(order)).toBe("STANDARD");
  });

});