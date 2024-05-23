
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarPage from './Home/navbar/navbar';
import Footer from './Home/navbar/Footer';

const Label = ({ title, content }) => (
  <div className="mb-4">
    <p className="text-lg font-bold text-gray-700 dark:text-gray-400">
      {title}:
    </p>
    <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
      {content}
    </p>
  </div>
);

const EventDetail = ({ events = [] }) => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));
  const [password, setPassword] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleBooking = () => {
    if (password === '123456') {
      setIsBooked(true);
      alert('Booking confirmed');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <>
      <div className="min-h-screen w-screen bg-gray-100 dark:bg-gray-900 ">
        <NavbarPage />
        <div className="flex items-center justify-center ">
          <div className="w-full max-w-9xl mx-auto p-5">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="h-full w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
                <img
                  className="w-96 h-64 object-cover rounded-t-lg mb-4"
                  src={event.photo}
                  alt={event.title}
                />
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                  {event.title}
                </h2>
                <Label title="Description" content={event.description} />
                <Label title="Address" content={event.address} />
                <Label title="Number of Attendees" content={event.attendees} />
                <Label title="Date" content={event.date} />
                <Label title="Hour" content={event.hour} />
                <Label title="Organizer" content={event.organizer} />

                {isBooked ? (
                  <p className="text-lg font-bold text-green-500">You have booked this event</p>
                ) : (
                  <div>
                    <input
                      type="password"
                      placeholder="Enter your password to book"
                      className="mb-4 p-2 border border-gray-300 rounded"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      onClick={handleBooking}
                      className=" ml-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Book
                    </button>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Footer />
        </div>
     
    </>
  );
};

export default EventDetail;
