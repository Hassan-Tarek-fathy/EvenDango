import React, { useState } from 'react';
import NavbarPage from './Home/navbar/navbar';
import Footer from './Home/navbar/Footer';
const PersonalPage = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    phone: '123-456-7890',
    specialty: 'Software Engineering',
    email: 'john.doe@example.com',
    password: '123456' // This should be handled more securely in a real application
  });
  const [reservations, setReservations] = useState([
    { id: 1, eventName: 'Tech Conference', booked: true },
    { id: 2, eventName: 'Music Festival', booked: true },
    { id: 3, eventName: 'Music Festival', booked: true },
    { id: 4, eventName: 'Music Festival', booked: true },
  ]);

  const [inputPassword, setInputPassword] = useState('');

  const handleCancelReservation = (reservationId) => {
    if (inputPassword === userData.password) {
      setReservations(reservations.filter(reservation => reservation.id !== reservationId));
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  };

  return (
    <>
    <NavbarPage></NavbarPage>
    <div className="container mx-auto p-12">
      <h2 className="text-2xl font-bold mb-12">Personal Information</h2>
      <div className="mb-12">
        <p className="shadow border rounded w-full py-2 px-3 text-gray-700">
          Name: {userData.name}
        </p>
      </div>
      <div className="mb-12">
        <p className="shadow border rounded w-full py-2 px-3 text-gray-700">
          Phone: {userData.phone}
        </p>
      </div>
      <div className="mb-12">
        <p className="shadow border rounded w-full py-2 px-3 text-gray-700 ">
          Specialty: {userData.specialty}
        </p>
      </div>
      <div className="mb-12">
        <p className="shadow border rounded w-full py-2 px-3 text-gray-700">
          Email: {userData.email}
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 flex">Reservations</h2>
      <div className="space-y-4">
      {reservations.length > 1 ? (
        reservations.map((reservation) => (
          reservation.booked && (
            <div key={reservation.id} className="mb-4 bg-gray-100 p-4 rounded">
              <span>{reservation.eventName}</span>
              <div>
                <input
                  type="password"
                  placeholder="أدخل كلمة المرور للإلغاء"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  className="mr-2"
                />
                <button
                  onClick={() => handleCancelReservation(reservation.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
cancel                </button>
              </div>
            </div>
          )
        ))
      ) : (
        <p className='text-black'>no Reservations</p>
      )}
    </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default PersonalPage;
