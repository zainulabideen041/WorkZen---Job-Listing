import { useState } from "react";
import GirlImg from "../assets/girl.png";

const Plan = () => {
  const [branches, setBranches] = useState(0);
  const [managers, setManagers] = useState(0);
  const [workers, setWorkers] = useState(0);
  const [addOns, setAddOns] = useState({
    monthlyUploads: false,
    customizeDashboard: false,
    googleCalendar: false,
  });

  const toggleAddOn = (key) => {
    setAddOns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate total price dynamically
  const calculateTotalPrice = () => {
    const branchCost = branches * 5;
    const managerCost = managers * 2;
    const workerCost = workers * 1;
    const addOnCost = Object.values(addOns).filter(Boolean).length * 2;
    return branchCost + managerCost + workerCost + addOnCost;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="flex flex-col justify-center items-center py-16 px-4 md:px-8">
      {/* Header Section */}
      <h1 className="text-4xl md:text-7xl text-black mb-4 text-center">
        Choose Your Plan
      </h1>
      <p className="text-gray-600 text-base mb-12 max-w-2xl text-center">
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </p>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 w-full max-w-7xl">
        {/* Left Side - Build Your Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex-1 w-full">
          <h2 className="text-3xl md:text-6xl font-bold text-black mb-2">
            Build Your Plan
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-black mb-1">
            ${totalPrice.toFixed(2)}
          </p>
          <p className="text-gray-400 text-base md:text-lg mb-8">
            Flexible plans for every team size
          </p>

          {/* Sliders Section */}
          <div className="space-y-6 mb-8">
            {/* Branches Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium text-base md:text-lg">
                  $5/Branches
                </label>
                <span className="text-gray-500 text-base md:text-lg">5</span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                value={branches}
                onChange={(e) => setBranches(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4FD1C5]"
              />
            </div>

            {/* Managers Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium text-base md:text-lg">
                  $2/Managers
                </label>
                <span className="text-gray-500 text-base md:text-lg">5</span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                value={managers}
                onChange={(e) => setManagers(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4FD1C5]"
              />
            </div>

            {/* Workers Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium text-base md:text-lg">
                  $1/Workers
                </label>
                <span className="text-gray-500 text-base md:text-lg">5</span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                value={workers}
                onChange={(e) => setWorkers(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4FD1C5]"
              />
            </div>
          </div>

          {/* Add-ons Section */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Add-ons</h3>
            <div className="space-y-3">
              {/* Monthly Uploads */}
              <div
                className={`flex justify-between items-center p-3 rounded ${
                  addOns.monthlyUploads ? "bg-[#E6F9F7]" : ""
                }`}
              >
                <label className="text-gray-700 font-medium text-base md:text-lg">
                  10 GB monthly uploads
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">$2</span>
                  <input
                    type="checkbox"
                    checked={addOns.monthlyUploads}
                    onChange={() => toggleAddOn("monthlyUploads")}
                    className="w-5 h-5 accent-[#4FD1C5] cursor-pointer"
                  />
                </div>
              </div>

              {/* Customize Dashboard */}
              <div
                className={`flex justify-between items-center p-3 rounded ${
                  addOns.customizeDashboard ? "bg-[#E6F9F7]" : ""
                }`}
              >
                <label className="text-gray-700 text-sm md:text-lg">
                  Customize Home dashboard
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">$2</span>
                  <input
                    type="checkbox"
                    checked={addOns.customizeDashboard}
                    onChange={() => toggleAddOn("customizeDashboard")}
                    className="w-5 h-5 accent-[#4FD1C5] cursor-pointer"
                  />
                </div>
              </div>

              {/* Google Calendar */}
              <div
                className={`flex justify-between items-center p-3 rounded ${
                  addOns.googleCalendar ? "bg-[#E6F9F7]" : ""
                }`}
              >
                <label className="text-gray-700 text-sm md:text-lg">
                  Connect primary Google Calendar account
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">$2</span>
                  <input
                    type="checkbox"
                    checked={addOns.googleCalendar}
                    onChange={() => toggleAddOn("googleCalendar")}
                    className="w-5 h-5 accent-[#4FD1C5] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="bg-white rounded-lg p-6 md:p-8 flex-1 w-full flex flex-col md:flex-row gap-8">
          {/* Features List */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-2">
              Features
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-6">
              Limitless possibilities
            </p>
            <ul className="space-y-3">
              {[...Array(10)].map((_, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="text-[#4FD1C5] text-xl md:text-2xl">✓</span>
                  <span>Feature label goes here</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Girl Image */}
          <div className="flex items-end justify-center md:justify-end">
            <img
              src={GirlImg}
              alt="girl"
              className="object-contain w-full max-w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
