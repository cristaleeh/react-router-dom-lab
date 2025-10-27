import { Link } from "react-router-dom";

export default function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailboxes</h2>
      <div className="mailbox-grid">
        {mailboxes.map((box) => (
          <Link
            key={box._id}
            to={`/mailboxes/${box._id}`}
            className="mail-box"
            style={{
              display: "inline-block",
              border: "1px solid black",
              padding: "20px",
              margin: "10px",
              width: "100px",
              textAlign: "center",
            }}
          >
            Box #{box._id}
          </Link>
        ))}
      </div>
    </div>
  );
}
