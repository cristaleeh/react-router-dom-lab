import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LetterForm({ addLetter, mailboxes }) {
  const [formData, setFormData] = useState({
    mailboxId: mailboxes[0]?._id || "",
    recipient: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({
      mailboxId: Number(formData.mailboxId),
      recipient: formData.recipient,
      message: formData.message,
    });
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Send to Mailbox:
        <select
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
        >
          {mailboxes.map((box) => (
            <option key={box._id} value={box._id}>
              Box #{box._id} ({box.boxOwner})
            </option>
          ))}
        </select>
      </label>

      <label>
        Recipient Name:
        <input
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Send Letter</button>
    </form>
  );
}
