// page.jsx

import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div>
      <div className='flex justify-end'>
    <div className='inline-block bg-blue-100 text-md text-blue-600 mt-4 mb-4 p-3 rounded-xl'>
    <h2>#How it works?</h2>
    </div>
    </div>
    <div className='flex flex-col items-center'>
      
      <div className='mt-4 grid grid-cols-1 gap-8'>
      <div className='border border-gray-300 bg-gray-100 p-4 rounded-xl flex flex-col items-center'>
      <div className='w-full flex justify-center mt-4'>
            <Image
              src='/image1.png'
              alt='Image 1'
              width={600}
              height={400}
              className='rounded-xl'
            />
          </div>
          <div className='mt-2'>
            <div className='text-gray-600 mt-4 p-2'>
              <ul>
                <li><strong>Data Flow:</strong> The flow of data starts from the generation of Q/A pairs by the AI, moving through the display and recording of user's answers, converting speech to text, evaluating the answers, and finally storing everything in a database.</li>
                <li><strong>Feedback Loop:</strong> User answers are not only evaluated but also given feedback, which implies a mechanism for continuous learning or user improvement.</li>
                <li><strong>Database Storage:</strong> Storing data in the database indicates that the system is designed to keep a record of interactions, potentially for performance tracking or further analysis.</li>
                <li><strong>Automated Processing:</strong> The entire process from question generation to feedback is automated, showcasing an integrated AI-driven workflow.</li>
              </ul>
              </div>
          </div>
        </div>

        <div className='border border-gray-300 bg-gray-100 p-4 rounded-xl flex flex-col items-center mb-8'>
          <div className='w-full flex justify-center mt-4'>
                <Image
                  src='/image2.png'
                  alt='Image 2'
                  width={600}
                  height={400}
                  className='rounded-xl'
                />
          </div>
          <div className='mt-2'>
            <div className='text-gray-600 mt-4 p-2'>
            <ul>
              <li><strong>Queryless DB:</strong> The label "Queryless DB" suggests that the interaction between the application and the database is abstracted through the ORM, reducing the need for explicit SQL queries in the application code.</li>
              <li><strong>ORM (Object-Relational Mapping):</strong> Drizzle ORM is responsible for managing database operations, making it easier to handle database interactions in a more object-oriented way.</li>
              <li><strong>Data Flow:</strong> The data flow involves the application sending data operations to Drizzle ORM, which then interacts with the PostgreSQL database, and the responses flow back through the ORM to the application.</li>
              <li><strong>Efficiency and Abstraction:</strong> Using an ORM like Drizzle can enhance efficiency and maintainability by abstracting the complexities of direct database interactions and allowing developers to work with more intuitive data models.</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Page;
