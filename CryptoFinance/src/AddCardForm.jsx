import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "./store";
import { useNavigate } from "react-router-dom";

const AddCardForm = () => {

   const dispathch = useDispatch()
   const navigate = useNavigate()
  const [form, setForm] = useState({
    walletName: "",
    amount: "",
    cardNumber: "",
    gradient: "",
  });

  const [errors, setErrors] = useState({});

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "cardNumber" ? formatCardNumber(value) : value;
    setForm({ ...form, [name]: newValue });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.walletName.trim()) {
      newErrors.walletName = "Wallet name is required.";
    }

    if (!form.amount.trim()) {
      newErrors.amount = "Amount is required.";
    }

    const rawCardNumber = form.cardNumber.replace(/\s+/g, "");
    if (!/^\d{16}$/.test(rawCardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    }

    if (!form.gradient) {
      newErrors.gradient = "Gradient selection is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const maskCardNumber = (num) => {
    const digits = num.replace(/\s+/g, "");
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)} ***`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const maskedNumber = maskCardNumber(form.cardNumber);
      const formData = {
        walletName: form.walletName,
        amount: '$' + form.amount,
        cardNumber: maskedNumber,
        gradient: form.gradient,
      };

      dispathch(addCard(formData))
      navigate('/cardlist')

      console.log("Form Submitted:", formData);

      setForm({
        walletName: "",
        amount: "",
        cardNumber: "",
        gradient: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-4 rounded-lg shadow-lg flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-2 text-center">Add New Card</h2>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Wallet Name</label>
          <input
            type="text"
            name="walletName"
            value={form.walletName}
            onChange={handleChange}
            className={`w-full px-3 py-1 h-7 border ${
              errors.walletName ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {errors.walletName && <p className="text-red-500 text-sm mt-1">{errors.walletName}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Amount</label>
          <input
            type="text"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="$0.00"
            className={`w-full px-3 py-1 h-7 border ${
              errors.amount ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            maxLength="19"
            className={`w-full h-7 px-3 py-1 border ${
              errors.cardNumber ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Gradient</label>
          <select
            name="gradient"
            value={form.gradient}
            onChange={handleChange}
            className={`w-full h-9 px-3 py-1 border ${
              errors.gradient ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 focus:ring-purple-500`}
          >
            <option value="">Select Gradient</option>
            <option value="bg-gradient-to-r from-green-400 to-green-600">Green</option>
            <option value="bg-gradient-to-r from-pink-500 to-purple-500">Pink to Purple</option>
            <option value="bg-gradient-to-r from-blue-500 to-indigo-600">Blue to Indigo</option>
          </select>
          {errors.gradient && <p className="text-red-500 text-sm mt-1">{errors.gradient}</p>}
        </div >
        <div className="flex justify-center items-center">
            <button
          type="submit"
          className="w-auto bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
        >
          Add Card
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddCardForm;
