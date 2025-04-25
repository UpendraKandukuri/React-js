import React, { useState } from 'react';

const Registration = () => {
  const [step, setStep] = useState(1);
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

  const validateStep = () => {
    const newErrors = {};
    const { name, email, password, confirmPassword, gender, department } =
      formData;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org)$/;

    if (step === 1) {
      if (!name.trim()) newErrors.name = 'Name is required';
      if (!email.trim()) newErrors.email = 'Email is required';
      else if (!emailRegex.test(email))
        newErrors.email = 'Invalid email format';
    } else if (step === 2) {
      if (!password) newErrors.password = 'Password is required';
      else if (password.length < 6)
        newErrors.password = 'Password must be at least 6 characters';
      if (password !== confirmPassword)
        newErrors.confirmPassword = 'Passwords do not match';
    } else if (step === 3) {
      if (!gender) newErrors.gender = 'Select gender';
      if (!department) newErrors.department = 'Select department';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
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
      setStep(1);
      setErrors({});
    }
  };

  return (
    <div className="bg-white px-4 py-5 rounded-md shadow-md max-w-md mx-auto m-4">
      <h1 className="text-xl font-bold text-center mb-4">
        Multi-Step Registration Form
      </h1>

      <form onSubmit={handleSubmit} className="space-y-2">
        {step === 1 && (
          <>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 w-full focus:outline-none focus:ring-blue-400 focus:ring-2"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
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
          </>
        )}

        {step === 2 && (
          <>
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
          </>
        )}

        {step === 3 && (
          <>
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
                <option value="Operations">Operations</option>
              </select>
              {errors.department && (
                <p className="text-red-500 text-sm">{errors.department}</p>
              )}
            </div>
          </>
        )}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
            >
              Previous
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Registration;