import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login";
import Register from "./Register";
import EventForm from "./EventForm";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Invitations from "./Invitations";
import Profile from "./Profile";
import Dashboard from "./dashboard";
import LoginDashboard from "./dashboard/login";
import Users from "./dashboard/users";
import AddUsers from "./dashboard/users/add";
import EventDetail from './EventDetils';
import image2 from './img/2.jpg';
import image3 from './img/1.jpg';
import image4 from './img/3.jpg';
import image6 from './img/gra.jpg';
import image from './img/p.jpg';
import image7 from './img/show.jpg';


const events = [
  {
    id: 1,
    title: 'graduation party',
    description: 'Join us as we celebrate the remarkable achievements of the graduating class at our Science College! This special event marks the culmination of years of hard work, dedication, and academic excellence.',
    address: '123 Main St',
    organizer: 'Organizer 1',
    attendees: 100,
    date: '2024-06-01',
    hour: '10:00 AM',
    photo:image6  , // Add the URL or path to the photo
  },
  {
    id: 7,
    title: 'Stage show',
    description: 'Description for Event 1',
    address: '123 Main St',
    organizer: 'Organizer 1',
    attendees: 100,
    date: '2024-06-01',
    hour: '10:00 AM',
    photo:image7, // Add the URL or path to the photo
  },
 
  {
    id: 2,
    title: 'University conference',
    description: 'We are thrilled to invite you to our upcoming College Conference, a premier event designed to foster intellectual growth, collaboration, and innovation within our academic community. This conference brings together students, faculty, and industry experts to share insights, research, and developments across various disciplines.',
    address: '456 Elm St',
    organizer: 'Organizer 2',
    attendees: 50,
    date: '2024-06-02',
    hour: '2:00 PM',
    photo: image3, 
  },
  {
    id: 3,
    title: 'College conference',
    description: 'We are thrilled to invite you to our upcoming College Conference, a premier event designed to foster intellectual growth, collaboration, and innovation within our academic community. This conference brings together students, faculty, and industry experts to share insights, research, and developments across various disciplines.',
    address: '123 Main St',
    organizer: 'Organizer 1',
    attendees: 100,
    date: '2024-06-01',
    hour: '10:00 AM',
    photo:image2, // Add the URL or path to the photo
  },
  {
    id: 4,
    title: 'Research seminar',
    description: 'Description for Event 1',
    address: '123 Main St',
    organizer: 'Organizer 1',
    attendees: 100,
    date: '2024-06-01',
    hour: '10:00 AM',
    photo:image4, // Add the URL or path to the photo
  },
  {
    id: 5,
    title: 'Student party',
    description: 'Description for Event 1',
    address: '123 Main St',
    organizer: 'Organizer 1',
    attendees: 100,
    date: '2024-06-01',
    hour: '10:00 AM',
    photo:image, // Add the URL or path to the photo
  },{
    id: 6,
    title: 'Social activity',
    description: 'Description for Event 1',
    address: '123 Main St',
    organizer: 'Organizer 1',
    attendees: 100,
    date: '2024-06-01',
    hour: '10:00 AM',
    photo:image4, // Add the URL or path to the photo
  },
  
 
  // Add more events as needed
];


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home events={events} />} />
        <Route path="/events/:id" element={<EventDetail events={events} />} />
        <Route path="/event" element={<EventForm />} />
        <Route path="/invit" element={<Invitations />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/login" element={<LoginDashboard />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/users/add" element={<AddUsers />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
