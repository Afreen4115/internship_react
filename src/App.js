import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScreenTwo from "./components/Screentwo";
import ScreenOne from "./components/Screenone";
import ScreenThree from "./components/Screenthree";
// import BookingForm from './components/BookingForm';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/*" element={<ScreenOne />} />
          <Route path="/show/:id" element={<ScreenTwo />} />
          <Route path="/apply/:id" element={<ScreenThree />} />
          {/* <Route path="/book-ticket/:id" element={<BookingForm />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;