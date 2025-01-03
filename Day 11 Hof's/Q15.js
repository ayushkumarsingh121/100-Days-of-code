// Q: 15
// Title:
// L2 - Inventory Management System: Tracking Low Stock and Reordering

// Problem Statement:
// You are building an Inventory Management System for a store. You have an array of product objects, where each product contains the following properties: name, category, stock, and pricePerUnit. Your task is to perform a series of operations to track and manage low-stock items and reorder supplies efficiently. Follow the steps below:

// Steps:

// Filter the products to find items where the stock is less than 100.
// Map these low-stock products to create an array that includes the product name, category, and the total reorder cost (which is pricePerUnit * (100 - current stock)). This represents how much it will cost to reorder enough stock to bring the item back to 100 units.
// Group the products by category and reduce the data to find the total reorder cost per category.
// Return an object where each key is the product category, and the value is the total reorder cost for that category.
// Extra Challenges:
// Ensure that only categories with at least one low-stock product are included.
// Sort the categories in descending order of total reorder costs.
// Example:

// Input: [
//   { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
//   { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
//   { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
//   { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
//   { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
// ]

// Output: {
//   "Electronics": 50000,   // Laptop needs 50 more units * $1000 per unit
//   "Clothing": 2000,       // T-shirt needs 60 more units * $20 + Jeans needs 10 more units * $40
//   "Accessories": 4500     // Watch needs 30 more units * $150
// }
// Explanation:

// Electronics: Only the laptop is low on stock, and it needs 50 more units, costing $50,000.
// Clothing: The T-shirt and Jeans are both low on stock. T-shirt needs 60 more units ($1,200), and Jeans need 10 more units ($400), so the total for "Clothing" is $2,000.
// Accessories: The Watch needs 30 more units, costing $4,500.




function manageInventory(products) {
  const lowStockProducts = products.filter(product => product.stock < 100);

  const reorderCostArray = lowStockProducts.map(product => ({
    name: product.name,
    category: product.category,
    reorderCost: product.pricePerUnit * (100 - product.stock)
  }));

  const totalReorderCost = reorderCostArray.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = 0;
    }
    acc[product.category] += product.reorderCost;
    return acc;
  }, {});

  const sortedCategories = Object.keys(totalReorderCost).sort((a, b) => totalReorderCost[b] - totalReorderCost[a]);

  const sortedReorderCost = {};
  sortedCategories.forEach(category => {
    sortedReorderCost[category] = totalReorderCost[category];
  });

  return sortedReorderCost;
}

const products = [
  { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
  { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
  { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
  { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
  { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
];

console.log(manageInventory(products));
