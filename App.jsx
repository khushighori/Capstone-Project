// import RegistrationForm from "./features/registrations/RegistrationForm";
// import RegistrationList from "./features/registrations/RegistrationList";
// import SummaryWidget from "./components/SummaryWidget";
import { useState } from 'react'

import './App.css'
import Registration from "./Registration";
import RegistrationList from "./RegistrationList";
import Summary from "./Summary";
function App() {
  return (
    <>
     <h1>Event Registration System</h1>
      <Summary />
      <Registration />
      <RegistrationList />
    </>
  );
}

export default App;
