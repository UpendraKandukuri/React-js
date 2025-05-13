import React, { useState } from "react";
import customers1 from "./Customer.json";

import filter from "./assets/filter.svg";
import download from "./assets/download.svg";
import settings from "./assets/settings.svg";
import dots from "./assets/dots.svg";
import delete1 from "./assets/delete1.svg";
import visa from "./assets/visa.png";
import alice from "./assets/alice.png";
import mastercard from "./assets/mastercard.svg";
import clara from "./assets/clara.png";
import bob from "./assets/bob.png";
import frank from "./assets/frank.png";
import ema from "./assets/ema.png";
import david from "./assets/david.png";
import grace from "./assets/grace.png";
import clark from "./assets/clark.png";

import * as XLSX from "xlsx";

const CustomersData = () => {
  const [customers, setCustomers] = useState(customers1);
  const [percentage, setPercentage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inputCardNumber, setInputCardNumber] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    paymentMethod: "VISA",
    cardEnding: "",
    categories: [ ],
    clickthroughPercentage: "",
    image: "alice",
  });
  const [errors, setErrors] = useState({});

  const imageMap = {
    alice,
    bob,
    clara,
    david,
    ema,
    frank,
    grace,
    clark,
  };

  const handleClick = (customerId) => {
    setCustomers((prev) => prev.filter((c) => c.id !== customerId));
  };

  const handleDownload = (customer) => {
    const formattedCustomer = {
      ...customer,
      categories: customer.categories.join(", "),
    };
    const worksheet = XLSX.utils.json_to_sheet([formattedCustomer]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "CustomerData");
    XLSX.writeFile(workbook, "CustomerData.xlsx");
  };

  const dataToRender = percentage
    ? customers.filter((c) => c.clickthroughPercentage >= percentage)
    : customers;

  const validate = () => {
    const errs = {};
    if (!formData.fullName) errs.fullName = "Full Name is required";
    if (!formData.username) errs.username = "Username is required";
    if (!formData.cardEnding) errs.cardEnding = "Card Number is required";
    if (formData.cardEnding.length < 8)
      errs.cardEnding = "Card Number must conatin 8 numbers";
    if (formData.categories.length === 0)
      errs.categories = "At least one category is required"; 
    if (
      !formData.clickthroughPercentage ||
      isNaN(formData.clickthroughPercentage)
    )
      errs.clickthroughPercentage = "Valid percentage required";
    return errs;
  };

  const handleAddCustomer = () => {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setSubmitted(true);
      return;
    } else {
      setSubmitted(false);
    }

    
const newCustomer = {
  id: Date.now(),
  ...formData,
 
  categories: formData.categories.map((cat) => cat.trim()) ,
  clickthroughPercentage: Number(formData.clickthroughPercentage),
};

console.log(newCustomer)

    setCustomers([...customers, newCustomer]);
    console.log(customers)
    setFormData({
      fullName: "",
      username: "",
      paymentMethod: "VISA",
      cardEnding: "",
      categories: [ ],
      clickthroughPercentage: "",
      image: "alice",
    });
    setErrors({});
    setIsModalOpen(false);
  };

  return (
    <div className="border border-gray-300 rounded-3xl space-y-4 overflow-x-auto ">
      <div className="sm:px-3 py-2 flex flex-col sm:flex-row justify-between sm:space-y-0 space-y-3">
        <div className="flex sm:justify-center sm:items-center justify-start sm:pl-0 pl-3 space-x-2">
          <h1 className="font-plus font-bold text-xl">Your Customers</h1>
          <h1 className="px-2 rounded-3xl text-blue-600 border border-blue-500 font-medium">
            New
          </h1>
        </div>
        <div className="flex sm:w-auto sm:space-x-4 space-x-1 sm:pl-0 pl-3 w-full justify-between">
          <div className="flex justify-center items-center border border-gray-300 rounded-3xl space-x-2 w-auto px-4 py-1 cursor-pointer">
            <img src={filter} className="h-6 w-6" />
            <select
              className="outline-none bg-transparent text-sm font-plus cursor-pointer"
              onChange={(e) => setPercentage(Number(e.target.value))}
              defaultValue=""
            >
              <option value="" disabled>
                Filter
              </option>
              {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
                <option key={value} value={value}>
                  {value}% and above
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center items-center space-x-2 w-auto border border-gray-300 rounded-3xl px-4 py-1">
            <img src={settings} className="h-6 w-6" />
            <h1 className="font-medium font-plus">Settings</h1>
          </div>
          <div className="flex justify-center items-center space-x-1 w-auto border border-gray-50 bg-blue-500 text-white rounded-3xl px-4 py-1">
            <button
              className="text-xl font-medium cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Add New
            </button>
          </div>
        </div>
      </div>

      {dataToRender.length > 0 ? (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="text-left px-3 py-2">Full Name</th>
              <th className="text-left px-3 py-2">Payment Methods</th>
              <th className="text-left px-3 py-2">Category</th>
              <th className="text-left px-3 py-2">Clickthrough Percentage</th>
              <th className="px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {dataToRender.map((customer, index) => {
              return (
                <tr className="border-b border-gray-300" key={index}>
                  <td className="px-3 py-3">
                    <div className="flex items-center space-x-2">
                      <img
                        src={imageMap[customer.image]}
                        alt={customer.fullName}
                        className="h-8 w-8 rounded-full"
                      />
                      <div className="text-xs font-plus flex flex-col">
                        <span className="font-semibold">
                          {customer.fullName}
                        </span>
                        <span>{customer.username}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center space-x-2">
                      {customer.paymentMethod === "VISA" && (
                        <img src={visa} alt="Visa" className="h-4 w-6" />
                      )}
                      {customer.paymentMethod === "MasterCard" && (
                        <img
                          src={mastercard}
                          alt="mastercard"
                          className="h-4 w-6"
                        />
                      )}
                      <span className="font-plus font-medium">
                        {customer.cardEnding}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex space-x-2">
                      {customer.categories.map((category, index) => {
                        return (
                          <div key={index}>
                            {(category === "Arts" ||
                              category === "Books" ||
                              category === "Computers") && (
                              <span className="bg-blue-50 px-2 py-0.5 rounded-3xl text-sm text-blue-500">
                                {category}
                              </span>
                            )}

                            {(category === "Business" ||
                              category === "Kitchen" ||
                              category === "Apparel") && (
                              <span className="bg-yellow-50 px-2 py-0.5 rounded-3xl text-sm text-yellow-500">
                                {category}
                              </span>
                            )}

                            {(category === "Travel" ||
                              category === "Sale" ||
                              category === "Fashion") && (
                              <span className="bg-red-50 px-2 py-0.5 rounded-3xl text-sm text-red-500">
                                {category}
                              </span>
                            )}

                            {(category === "Health" ||
                              category === "Fitness" ||
                              category === "Automotive") && (
                              <span className="bg-green-50 px-2 py-0.5 rounded-3xl text-sm text-green-500">
                                {category}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </td>
                  <td className="px-4 py-3 flex justify-center items-center gap-2">
                    <div className="relative w-full h-3 bg-gray-300 rounded-3xl overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded-3xl"
                        style={{ width: `${customer.clickthroughPercentage}%` }}
                      ></div>
                    </div>
                    <h1>{customer.clickthroughPercentage}</h1>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center space-x-2 justify-center">
                      <img
                        src={delete1}
                        alt="Delete"
                        className="h-5 w-5 cursor-pointer"
                        onClick={() => handleClick(customer.id)}
                      />
                      <img
                        src={download}
                        alt="Download"
                        className="h-5 w-5 cursor-pointer"
                        onClick={() => handleDownload(customer)}
                      />
                      <img
                        src={dots}
                        alt="More Options"
                        className="h-5 w-5 cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="text-center py-10 text-gray-500 font-plus font-medium">
          No customers found
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl w-96 space-y-4">
            <h2 className="text-xl font-bold font-plus">Add New Customer</h2>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border px-3 py-2 rounded-lg text-sm"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
              {submitted && errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}

              <input
                type="text"
                placeholder="Username"
                className="w-full border px-3 py-2 rounded-lg text-sm"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
              {submitted && errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}

              <select
                className="w-full border px-3 py-2 rounded-lg text-sm"
                value={formData.paymentMethod}
                onChange={(e) =>
                  setFormData({ ...formData, paymentMethod: e.target.value })
                }
              >
                <option value="VISA">VISA</option>
                <option value="MasterCard">MasterCard</option>
              </select>

              <input
                type="text"
                placeholder="Enter Card Number"
                maxLength={10}
                className="w-full border px-3 py-2 rounded-lg text-sm"
                value={inputCardNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setInputCardNumber(value);

                  if (value.length >= 2) {
                    const masked =
                      "*".repeat(value.length - 2) + value.slice(-2);
                    setFormData({ ...formData, cardEnding: masked });
                  } else {
                    setFormData({ ...formData, cardEnding: value });
                  }
                }}
              />

              {submitted && errors.cardEnding && (
                <p className="text-red-500 text-sm">{errors.cardEnding}</p>
              )}

              <input
                type="text"
                placeholder="Categories (comma separated)"
                className="w-full border px-3 py-2 rounded-lg text-sm"
                value={formData.categories.join(", ")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    categories: e.target.value
                      .split(",")
                      .map((item) => item.trim()),
                  })
                }
              />
              
              {submitted && errors.categories && (
                <p className="text-red-500 text-sm">{errors.categories}</p>
              )}

              <input
                type="number"
                placeholder="Clickthrough %"
                className="w-full border px-3 py-2 rounded-lg text-sm"
                value={formData.clickthroughPercentage}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    clickthroughPercentage: e.target.value,
                  })
                }
              />
              {submitted && errors.clickthroughPercentage && (
                <p className="text-red-500 text-sm">
                  {errors.clickthroughPercentage}
                </p>
              )}
            </div>

            <div className="flex justify-between pt-4">
              <button
                className="bg-gray-200 px-4 py-2 rounded-lg text-sm"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
                onClick={handleAddCustomer}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomersData;
