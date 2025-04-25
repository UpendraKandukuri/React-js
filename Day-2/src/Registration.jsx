import React, { useState } from 'react';
import validator from 'validator';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    department: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, password, confirmPassword, gender, department } =
      formData;

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org)$/;

    if (!name.trim()) newErrors.name = 'Name is required';

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!regex.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!gender) newErrors.gender = 'Select gender';

    if (!department) newErrors.department = 'Select department';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Collected Data:', formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        department: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="bg-white px-4 py-3 rounded-md shadow-md max-w-md mx-auto m-2">
      <h1 className="text-xl font-bold text-center mb-2">Registration Form</h1>

      <form onSubmit={handleSubmit} className="space-y-1">
        <div className="flex flex-col">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 focus:outline-none focus:ring-blue-400 focus:ring-2"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 w-full focus:outline-none focus:ring-blue-400 focus:ring-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 w-full focus:outline-none focus:ring-blue-400 focus:ring-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 w-full focus:outline-none focus:ring-blue-400 focus:ring-2"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        <div>
          <label>Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              <span>Male</span>
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              <span>Female</span>
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
        </div>

        <div>
          <label>Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 w-full focus:outline-none focus:ring-blue-400 focus:ring-2"
          >
            <option value="">Select department</option>
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="Finance">Finance</option>
          </select>
          {errors.department && (
            <p className="text-red-500 text-sm">{errors.department}</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
