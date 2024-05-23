import React, { useState, useEffect, useMemo } from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import Header from "./component/header";
import SideBar from "./component/sidebar";

const MessagesTable = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/users", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setMessages(data);
        } else {
          setMessages(null);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const openMessage = (id) => {
    alert(`Opening message with ID: ${id}`);
  };

  return (
    <div className="bg-white p-8 mt-6 rounded-lg shadow-lg max-w-full mx-auto">
      {messages ? (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            All Users
          </h2>
          {/* Table for larger screens */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Fullname
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Eegistration Date
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr key={message.user_id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="text-gray-900 whitespace-no-wrap">
                        {message.username}
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="text-gray-900 whitespace-no-wrap">
                        {message.first_name} {message.last_name}
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="text-gray-700 whitespace-no-wrap">
                        {message.email}
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="text-gray-500 whitespace-no-wrap">
                        {message.registration_date}
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        onClick={() => openMessage(message.user_id)}
                        className="text-indigo-600 hover:text-indigo-900 font-semibold"
                      >
                        Manage Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        "Loading"
      )}

      {/* Cards for smaller screens */}
      <div className="sm:hidden">
        {messages.map((message) => (
          <div
            key={message.user_id}
            className="p-4 bg-white rounded-lg shadow mb-4"
          >
            <div className="font-semibold">{message.username}</div>
            <div className="text-gray-500">
              {message.first_name} {message.last_name}
            </div>
            <div className="text-gray-400 text-xs">{message.email}</div>
            <div className="text-gray-400 text-xs">
              {message.registration_date}
            </div>
            <button
              onClick={() => openMessage(message.user_id)}
              className="mt-2 text-indigo-600 hover:text-indigo-900 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:bg-indigo-100"
            >
              Manage Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/users", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setMessages(data);
        } else {
          setMessages(null);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const openMessage = (id) => {
    alert(`Opening message with ID: ${id}`);
  };

  return (
    <>
      <Header />

      <div className="flex min-h-screen">
        <SideBar />

        <div className="flex-1 bg-gray-100 p-7">
          <h1 className="text-2xl font-semibold text-gray-800">
            Evendango Users
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <div className="relative bg-gray-800 p-5 rounded-lg shadow">
              <div className="flex items-center space-x-3">
                <UserGroupIcon className="h-8 w-8 text-white" />
                <div className="flex-1 min-w-0">
                  <p className="text-md font-medium text-white truncate">
                    Total Users
                  </p>
                  <p className="text-lg font-semibold text-gray-100">
                    {messages.length}
                  </p>
                </div>
              </div>
            </div>
            <a
              className="relative bg-gray-800 p-5 rounded-lg shadow"
              href="/dashboard/users/add"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-1 min-w-0">
                  <p className="text-md font-medium text-white truncate">
                    New User
                  </p>
                  <p className="text-lg font-semibold text-gray-100">
                    Click Here
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="bg-white p-8 mt-6 rounded-lg shadow-lg max-w-full mx-auto">
            {messages ? (
              <>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  All Users
                </h2>
                {/* Table for larger screens */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Username
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Fullname
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Eegistration Date
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.map((message) => (
                        <tr key={message.user_id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="text-gray-900 whitespace-no-wrap">
                              {message.username}
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="text-gray-900 whitespace-no-wrap">
                              {message.first_name} {message.last_name}
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="text-gray-700 whitespace-no-wrap">
                              {message.email}
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="text-gray-500 whitespace-no-wrap">
                              {message.registration_date}
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <button
                              onClick={() => openMessage(message.user_id)}
                              className="text-indigo-600 hover:text-indigo-900 font-semibold"
                            >
                              Manage Profile
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              "Loading"
            )}

            {/* Cards for smaller screens */}
            <div className="sm:hidden">
              {messages.map((message) => (
                <div
                  key={message.user_id}
                  className="p-4 bg-white rounded-lg shadow mb-4"
                >
                  <div className="font-semibold">{message.username}</div>
                  <div className="text-gray-500">
                    {message.first_name} {message.last_name}
                  </div>
                  <div className="text-gray-400 text-xs">{message.email}</div>
                  <div className="text-gray-400 text-xs">
                    {message.registration_date}
                  </div>
                  <button
                    onClick={() => openMessage(message.user_id)}
                    className="mt-2 text-indigo-600 hover:text-indigo-900 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:bg-indigo-100"
                  >
                    Manage Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
