import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const CustomSwitch = ({ isAnnually, setToMonthly, setToAnnually }) => {
  return (
    <div className="flex justify-center mt-10">
      <div
        id="pricing"
        className="bg-gray-200 text-black rounded-[8.33%_/_34.2857%] shadow-md h-10 w-44 flex items-center justify-center p-1 cursor-pointer transition-all duration-300"
      >
        <div
          onClick={setToMonthly}
          className={`flex-1 text-center py-1 rounded-full transition-colors duration-300 ${
            !isAnnually ? 'bg-gray-400 text-white' : 'bg-white'
          }`}
        >
          Monthly
        </div>
        <div
          className="absolute bg-transparent rounded-full h-9 w-20 transition-transform duration-300"
          style={{ transform: isAnnually ? 'translateX(80px)' : 'translateX(0)' }}
        />
        <div
          onClick={setToAnnually}
          className={`flex-1 text-center py-1 rounded-full transition-colors duration-300 ${
            isAnnually ? 'bg-gray-400 text-white' : 'bg-white'
          }`}
        >
          Annually
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({ planName, price, isAnnually, features, color }) => {
  return (
    <div className="w-5/6 h-screen m-4 flex justify-center mt-6">
      <div className="max-w-[90%] border border-gray-200 rounded-lg overflow-hidden p-6 shadow-lg h-4/5">
        <div
          className={`w-max h-6 bg-${color} text-sm py-2 px-4 text-center rounded-full font-semibold mb-4`}
        >
          {planName}
        </div>
        <p className="text-gray-500 mt-2 text-base">
          So you can see how incredible our tool is.
        </p>
        <div className="flex items-baseline">
          <p className="text-5xl font-bold mt-4">{price}</p>
          <p className="ml-1 text-sm">/mo</p>
        </div>
        <p className="text-lg text-gray-500">
          {isAnnually ? 'Billed annually' : 'Billed monthly'}
        </p>
        <div className="flex justify-center">
          <button className="bg-black text-white mt-4 py-2 px-8 rounded hover:bg-opacity-80 transform hover:scale-110 transition-transform duration-300">
            Get Started
          </button>
        </div>
        <div className="flex justify-center">
          <p className="text-sm text-gray-500 mt-2">
            Includes 7 days free trial No credit card needed
          </p>
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-lg font-bold">What's included:</p>
          {features.map((feature, index) => (
            <div className="flex items-center" key={index}>
              <FaCheck className="text-purple-400 mr-2" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isAnnually, setIsAnnually] = useState(false);

  const setToMonthly = () => {
    setIsAnnually(false);
  };

  const setToAnnually = () => {
    setIsAnnually(true);
  };

  const freeFeatures = [
    'A cool feature',
    'A basic feature',
    'A top feature with limitations',
    'An incredible feature so useful',
    'A cool feature',
  ];
  const starterFeatures = [...freeFeatures, 'Another top feature'];
  const proFeatures = [...starterFeatures, 'A premium feature', 'You need this feature'];

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 text-sm py-2 px-4 text-center rounded-full font-semibold mb-4">
            Pricing and plans 💰
          </div>
          <div>
            <p className="font-plus-jakarta-sans text-3xl font-extrabold text-center">
              Find the best plan for your needs
            </p>
          </div>
        </div>
      </div>

      <CustomSwitch isAnnually={isAnnually} setToMonthly={setToMonthly} setToAnnually={setToAnnually} />

      <div className="flex justify-around">
        <PricingCard planName="Free" price="$0" isAnnually={isAnnually} features={freeFeatures} color="gray-300" />
        <PricingCard planName="Starter" price={isAnnually ? '$15' : '$19'} isAnnually={isAnnually} features={starterFeatures} color="yellow-100" />
        <PricingCard planName="Pro" price={isAnnually ? '$45' : '$49'} isAnnually={isAnnually} features={proFeatures} color="red-100" />
      </div>
    </div>
  );
};

export default Pricing;
