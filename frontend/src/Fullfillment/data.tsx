import React from 'react';
const fulfillmentData = [
  { id: 1, order: "Order 1", status: "shipped" },
  { id: 2, order: "Order 2", status: "unshipped" },
  { id: 3, order: "Order 3", status: "shipped" },
  { id: 4, order: "Order 4", status: "unshipped" },
];

function Fulfillment() {
  return (
    <div className="fulfillment">
      <h2>Fulfillment</h2>
      <ul>
        {fulfillmentData.map((item) => (
          <li key={item.id} className={item.status === "unshipped" ? "unshipped" : "shipped"}>
            {item.order} - {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Fulfillment;