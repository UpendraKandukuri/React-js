import React, { useState, useEffect } from 'react';
import data from './walletData.json';
import { ArrowDown, ArrowUp } from 'lucide-react';
const WalletHistory = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [filteredData, setFilteredData] = useState(data);


  const months = [
    'January',
    'February',
    'March',
    'April',
    'May'
  ];


  useEffect(() => {
    if (selectedMonth) {
      const newData = data.filter((item) => item.month === selectedMonth);
      setFilteredData(newData);
    } else {
      setFilteredData(data); 
    }
  }, [selectedMonth]);

  return (
    <div className='overflow-y-auto flex justify-center items-center '>
    <div className="bg-white rounded-xl p-6 shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">Wallet Activity</h2>
      <p className="text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur</p>

      <div className="flex space-x-4 mb-4 relative">
        <select
          className="px-4 py-1 rounded-full bg-white text-black border"
          onChange={(e) => setSelectedMonth(e.target.value)}
          value={selectedMonth}
        >
          <option value="">Select Month</option>
          {months.map((month, idx) => (
            <option key={idx} value={month}>
              {month}
            </option>
          ))}
        </select>

        <button
          className="px-4 py-1 rounded-full bg-[#2F1C6A] text-white"
          onClick={() => setSelectedMonth('')}
        >
          Today
        </button>
      </div>

      {selectedMonth && (
        <div className="mb-4 text-sm text-gray-600">
          Showing data for: <strong>{selectedMonth}</strong>
        </div>
      )}

      <div className="space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 rounded-xl shadow-sm border hover:shadow-2xl hover:cursor-pointer transition"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-gray-100">
                  {item.type === 'Topup' ? (
                    <ArrowUp className="text-[#2F1C6A]" />
                  ) : (
                    <ArrowDown className="text-[#2F1C6A]" />
                  )}
                </div>
                <div>
                  <div className="font-medium">{item.type}</div>
                  <div className="text-sm text-gray-500">{item.time}</div>
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`font-medium ${item.amount < 0 ? 'text-red-500' : 'text-green-600'}`}
                >
                  {item.amount < 0 ? `-$${Math.abs(item.amount)}` : `+$${item.amount}`}
                </div>
                <div
                  className={`text-sm ${
                    item.status === 'Completed'
                      ? 'text-green-600'
                      : item.status === 'Pending'
                      ? 'text-gray-400'
                      : 'text-red-500'
                  }`}
                >
                  {item.status}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No data found for selected month.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default WalletHistory;