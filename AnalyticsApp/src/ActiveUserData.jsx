import React from "react";
import customers from "./Activites.json";

import alice from "./assets/alice.png";
import clara from "./assets/clara.png";
import bob from "./assets/bob.png";
import frank from "./assets/frank.png";
import ema from "./assets/ema.png";
import david from "./assets/david.png";
import grace from "./assets/grace.png";
import clark from "./assets/clark.png";

const ActiveUserData = () => {
  const imageMap = {
    1: alice,
    2: bob,
    3: clara,
    4: david,
    5: ema,
    6: frank,
    7: grace,
    8: clark,
    9: clara,
    10: bob
  };

  return (
    <div>
      <table>
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left px-3 py-2 text-blue-500">Activities</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr className="border-b border-gray-300" key={customer.id}>
              <td className="px-3 py-3">
                <div className="flex items-center space-x-2">
                  <img
                    src={imageMap[customer.id]}
                    alt={customer.name}
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="text-xs font-plus flex flex-col">
                    <span className="font-semibold">{customer.name}</span>
                    <span>
                      {customer.activity} {customer.value}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveUserData;
