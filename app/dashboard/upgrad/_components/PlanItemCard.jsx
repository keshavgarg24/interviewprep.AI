"use client"
import { useUser } from '@clerk/nextjs';
import React from 'react';

function PlanItemCard({ plan }) {
  const { user } = useUser();

  const handleGetStartedClick = () => {
    const email = user?.primaryEmailAddress.emailAddress;
    if (plan.paymentLink && email) {
      window.open(`${plan.paymentLink}?prefilled_email=${encodeURIComponent(email)}`, '_blank');
    }
  };

  return (
    <div className='flex justify-center'>
      <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-900">
            {plan.name}
            <span className="sr-only">Plan</span>
          </h2>
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> ${plan.cost} </strong>
            <span className="text-sm font-medium text-gray-700">/month</span>
          </p>
        </div>

        <ul className="mt-6 space-y-2">
          {plan.offering.map((item, index) => (
            <li key={index} className="flex items-center gap-1 mb-2">
              <h2 className="text-gray-700">{item.value}</h2>
            </li>
          ))}
        </ul>

        {user ? (
          <a
            href={plan.paymentLink ? `${plan.paymentLink}?prefilled_email=${encodeURIComponent(user.primaryEmailAddress.emailAddress)}` : '#'}
            target='_blank'
            onClick={handleGetStartedClick}
            className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-blue-600 hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring active:text-blue-500"
          >
            Get Started
          </a>
        ) : (
          <p className="mt-8 text-sm text-gray-500 text-center">Please sign in to get started.</p>
        )}
      </div>
    </div>
  );
}

export default PlanItemCard;
