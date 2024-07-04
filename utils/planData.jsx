// planData.js

const planData = [
    {
        id: 0,
        name: 'Free',
        cost: 0,
        Link: '/dashboard', 
        offering: [
            {
                value: '❌ Create unlimited Mock Interview'
            },
            {
                value: '✔️ Unlimited Retake Interview'
            },
        ]
    },
    {
        id: 1,
        name: 'Monthly',
        cost: 15.00,
        paymentLink: 'https://buy.stripe.com/test_00gbLQ5pE12Q3GE7st',
        offering: [
            {
                value: '✔️ Create unlimited Mock Interview'
            },
            {
                value: '✔️ Unlimited Retake Interview'
            },
        ]
    }
];

export default planData;
