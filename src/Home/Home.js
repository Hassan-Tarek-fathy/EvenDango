import React, { useState } from 'react';
import EventCard from './component/EventCard';
import NavbarPage from './navbar/navbar';
import Footer from './navbar/Footer';

const HomePage = ({ events = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavbarPage />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 mb-8">
          <h1 className="text-2xl md:text-4xl  ">New Events</h1>
          <input
            type="text"
            placeholder="Search by title..."
            className="p-2 border border-gray-400 rounded w-full md:w-auto my-2 md:my-0"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  pl-4 pr-4  mb-8"> {/* إضافة mb-8 هنا */}
          {filteredEvents.map((event) => (
            <div key={event.id} className="w-full ">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      <Footer />
    </>
  );
};



export default HomePage;
