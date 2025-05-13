import React, { useState } from "react";
import vendors1 from "./Vendors.json";
import edit from "./assets/edit.svg";

const VendorsData = () => {
  const [vendors, setVendors] = useState(vendors1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editVendorIndex, setEditVendorIndex] = useState(null);
  const [editVendorData, setEditVendorData] = useState({
    name: "",
    url: "",
    performance: "",
    lastChecked: "",
    categories: [],
  });

  const [newVendor, setNewVendor] = useState({
    name: "",
    url: "",
    performance: "",
    lastChecked: "",
    categories: [],
  });

  const [errors, setErrors] = useState({});

  const validateVendor = (vendor) => {
    const errs = {};
    
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!vendor.name.trim()) errs.name = "Name is required";
    if (!vendor.url.trim()) errs.url = "URL is required";
    if (!vendor.performance || isNaN(vendor.performance)) errs.performance = "Valid performance is required";
    if (!vendor.lastChecked.trim()) errs.lastChecked = "Date is required";
    if(!regex.test(vendor.lastChecked.trim())) errs.lastChecked = "Provide Correct Date Format e.g: 2025-07-15"
    return errs;
  };

  const handleAddVendor = () => {
    const validationErrors = validateVendor(newVendor);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setVendors((prev) => [...prev, newVendor]);
    setNewVendor({
      name: "",
      url: "",
      performance: "",
      lastChecked: "",
      categories: [],
    });
    setErrors({});
    setShowModal(false);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setNewVendor((prev) => ({
      ...prev,
      categories: prev.categories.includes(value)
        ? prev.categories.filter((c) => c !== value)
        : [...prev.categories, value],
    }));
  };

  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="border border-gray-300 rounded-3xl space-y-4 overflow-x-auto m-3  p-3 sm:space-y-0">
      <div className="px-2 py-3 flex flex-col sm:flex-row justify-between">
        <div className="mb-2">
          <h1 className="font-bold">Vendor Activity History</h1>
          <h3>Here you can track your vendor’s performance everyday.</h3>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center space-x-2 ml-2 space-y-2 sm:space-y-0">
          <div className="flex space-x-2">
            <div className="flex justify-center items-center gap-5 h-7 px-2 py-1">
              <input
                type="text"
                placeholder="Search.."
                className="font-bold border border-gray-300 px-3 py-1 rounded-3xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="border border-gray-300 rounded-3xl  px-3 py-1 flex justify-center items-center">
              <h1 className="text-center">Filter</h1>
            </div>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setErrors({});
            }}
            className="cursor-pointer flex justify-center items-center gap-2 border border-gray-900 rounded-3xl bg-black text-white px-3 py-1"
          >
            <button className="font-plus">+ Add Vendor</button>
          </div>
        </div>
      </div>
      <div>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="text-left px-3 py-2">Vendor Name</th>
              <th className="text-left px-3 py-2">Performance</th>
              <th className="text-left px-3 py-2">Last Checked</th>
              <th className="text-left px-3 py-2">Categories</th>
              <th className="px-3 py-2">Edit Vendor</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((vendor, index) => (
              <tr className="border-b border-gray-300" key={index}>
                <td className="px-3 py-3">
                  <div className="flex items-center space-x-2">
                    <div className="text-xs font-plus flex flex-col">
                      <span className="font-semibold">{vendor.name}</span>
                      <span>{vendor.url}</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 flex justify-center items-center gap-2">
                  <div className="relative w-full h-3 bg-gray-300 rounded-3xl overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-blue-500 rounded-3xl"
                      style={{ width: `${vendor.performance}%` }}
                    />
                  </div>
                  <h1>{vendor.performance}%</h1>
                </td>
                <td className="px-3 py-3">
                  <span>{vendor.lastChecked}</span>
                </td>
                <td className="px-3 py-3">
                    <div className="flex space-x-2">
                      {vendor.categories.map((category, index) => {
                        return (
                          <div key={index}>
                            {(category === "Database" ||
                              category === "UI" ||
                              category === "Infrastructure") && (
                              <span className="bg-blue-50 px-2 py-0.5 rounded-3xl text-sm text-blue-500">
                                {category}
                              </span>
                            )}

                            {(category === "AI" ||
                              category === "Tech" ||
                              category === "Analytics") && (
                              <span className="bg-yellow-50 px-2 py-0.5 rounded-3xl text-sm text-yellow-500">
                                {category}
                              </span>
                            )}

                            {(category === "Consumer" ||
                              category === "Machine Learning" ||
                              category === "Visualization") && (
                              <span className="bg-red-50 px-2 py-0.5 rounded-3xl text-sm text-red-500">
                                {category}
                              </span>
                            )}

                            {(category === "Security" ||
                              category === "Design" ||
                              category === "Cloud") && (
                              <span className="bg-green-50 px-2 py-0.5 rounded-3xl text-sm text-green-500">
                                {category}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </td>
                <td className="px-3 py-3">
                  <img
                    src={edit}
                    alt="edit"
                    className="h-5 w-5 cursor-pointer sm:ml-10"
                    onClick={() => {
                      setEditVendorIndex(index);
                      setEditVendorData(vendor);
                      setErrors({});
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
          <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-3xl w-96 space-y-4">
              <h2 className="text-lg font-bold">Add New Vendor</h2>
              <div>
                <input
                  type="text"
                  placeholder="Vendor Name"
                  className="w-full border border-gray-300 rounded-3xl px-3 py-1"
                  value={newVendor.name}
                  onChange={(e) =>
                    setNewVendor({ ...newVendor, name: e.target.value })
                  }
                />
                {errors.name && (
                  <p className="text-red-500 text-xs pl-2">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="URL"
                  className="w-full border border-gray-300 rounded-3xl px-3 py-1"
                  value={newVendor.url}
                  onChange={(e) =>
                    setNewVendor({ ...newVendor, url: e.target.value })
                  }
                />
                {errors.url && (
                  <p className="text-red-500 text-xs pl-2">{errors.url}</p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Performance %"
                  className="w-full border border-gray-300 rounded-3xl px-3 py-1"
                  value={newVendor.performance}
                  onChange={(e) =>
                    setNewVendor({ ...newVendor, performance: e.target.value })
                  }
                />
                {errors.performance && (
                  <p className="text-red-500 text-xs pl-2">
                    {errors.performance}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Checked (e.g. 2025-05-10)"
                  className="w-full border border-gray-300 rounded-3xl px-3 py-1"
                  value={newVendor.lastChecked}
                  onChange={(e) =>
                    setNewVendor({
                      ...newVendor,
                      lastChecked: e.target.value,
                    })
                  }
                />
                {errors.lastChecked && (
                  <p className="text-red-500 text-xs pl-2">
                    {errors.lastChecked}
                  </p>
                )}
              </div>

              <div className="text-sm font-semibold">Categories:</div>
              <div className="flex flex-wrap gap-2">
                {["Database", "UI", "AI", "Tech", "Security", "Cloud"].map(
                  (cat) => (
                    <label
                      key={cat}
                      className="flex items-center space-x-1 text-sm"
                    >
                      <input
                        type="checkbox"
                        value={cat}
                        checked={newVendor.categories.includes(cat)}
                        onChange={handleCategoryChange}
                      />
                      <span>{cat}</span>
                    </label>
                  )
                )}
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="border border-gray-400 px-3 py-1 rounded-3xl"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddVendor}
                  className="bg-black text-white px-3 py-1 rounded-3xl"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
        {editVendorIndex !== null && (
          <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-3xl w-96 space-y-4">
              <h2 className="text-lg font-bold">Edit Vendor</h2>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-3xl px-3 py-1"
                  value={editVendorData.name}
                  onChange={(e) =>
                    setEditVendorData({
                      ...editVendorData,
                      name: e.target.value,
                    })
                  }
                />
                {errors.name && (
                  <p className="text-red-500 text-xs pl-2">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-3xl px-3 py-1"
                  value={editVendorData.url}
                  onChange={(e) =>
                    setEditVendorData({
                      ...editVendorData,
                      url: e.target.value,
                    })
                  }
                />
                {errors.url && (
                  <p className="text-red-500 text-xs pl-2">{errors.url}</p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-3xl px-3 py-1"
                  value={editVendorData.performance}
                  onChange={(e) =>
                    setEditVendorData({
                      ...editVendorData,
                      performance: e.target.value,
                    })
                  }
                />
                {errors.performance && (
                  <p className="text-red-500 text-xs pl-2">
                    {errors.performance}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-3xl px-3 py-1"
                  value={editVendorData.lastChecked}
                  onChange={(e) =>
                    setEditVendorData({
                      ...editVendorData,
                      lastChecked: e.target.value,
                    })
                  }
                />
                {errors.lastChecked && (
                  <p className="text-red-500 text-xs pl-2">
                    {errors.lastChecked}
                  </p>
                )}
              </div>

              <div className="text-sm font-semibold">Categories:</div>
              <div className="flex flex-wrap gap-2">
                {["Database", "UI", "AI", "Tech", "Security", "Cloud"].map(
                  (cat) => (
                    <label
                      key={cat}
                      className="flex items-center space-x-1 text-sm"
                    >
                      <input
                        type="checkbox"
                        value={cat}
                        checked={editVendorData.categories.includes(cat)}
                        onChange={(e) => {
                          const value = e.target.value;
                          setEditVendorData((prev) => ({
                            ...prev,
                            categories: prev.categories.includes(value)
                              ? prev.categories.filter((c) => c !== value)
                              : [...prev.categories, value],
                          }));
                        }}
                      />
                      <span>{cat}</span>
                    </label>
                  )
                )}
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  onClick={() => setEditVendorIndex(null)}
                  className="border border-gray-400 px-3 py-1 rounded-3xl"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const validationErrors = validateVendor(editVendorData);
                    if (Object.keys(validationErrors).length > 0) {
                      setErrors(validationErrors);
                      return;
                    }
                    const updated = [...vendors];
                    updated[editVendorIndex] = editVendorData;
                    setVendors(updated);
                    setEditVendorIndex(null);
                    setErrors({});
                  }}
                  className="bg-black text-white px-3 py-1 rounded-3xl"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorsData;
