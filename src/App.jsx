import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import LetterForm from "./components/LetterForm/LetterForm";

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);


  const addBox = (newBoxData) => {
    const newBox = {
      _id: mailboxes.length + 1,
      ...newBoxData,
    };
    setMailboxes([...mailboxes, newBox]);
  };


  const addLetter = (newLetterData) => {
    setLetters([...letters, newLetterData]);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} />}
        />
        <Route
          path="/new-letter"
          element={<LetterForm addLetter={addLetter} mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={
            <MailboxDetails mailboxes={mailboxes} letters={letters} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
