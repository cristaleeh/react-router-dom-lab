import { useParams } from "react-router-dom";

export default function MailboxDetails({ mailboxes, letters }) {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((box) => box._id === Number(mailboxId));

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  return (
    <div>
      <h2>Mailbox #{selectedBox._id}</h2>
      <p><strong>Owner:</strong> {selectedBox.boxOwner}</p>
      <p><strong>Size:</strong> {selectedBox.boxSize}</p>

      <h3>Letters:</h3>
      {selectedLetters.length > 0 ? (
        <ul>
          {selectedLetters.map((letter, i) => (
            <li key={i}>
              <strong>To:</strong> {letter.recipient} <br />
              <em>{letter.message}</em>
            </li>
          ))}
        </ul>
      ) : (
        <p>No letters yet.</p>
      )}
    </div>
  );
}
