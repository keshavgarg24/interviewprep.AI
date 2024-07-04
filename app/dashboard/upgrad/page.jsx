import React from 'react';
import planData from '../../../utils/planData';
import PlanItemCard from './_components/PlanItemCard';

function Upgrade() {
  return (
    <div className='flex flex-col items-center justify-center p-10'>
        <h2 className='inline-block bg-blue-100 text-sm text-blue-600 mb-5 p-3 rounded-xl'>
          #UPGRADE - unlock unlimited interviews
        </h2>
      <h2 className='font-bold text-3xl text-center mt-2 mb-4'>Upgrade</h2>
      <p className='text-center text-gray-500 mb-8'>Upgrade to the monthly plan to access unlimited mock interviews.</p>

      <div className="max-w-3xl w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          {planData.map((plan, index) => (
            <PlanItemCard plan={plan} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
