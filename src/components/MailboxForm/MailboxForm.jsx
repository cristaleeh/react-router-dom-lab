import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MailboxForm({ addBox }) {
  const [formData, setFormData] = useState({ boxOwner: "", boxSize: "Small" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    navigate("/mailboxes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Owner Name:
        <input
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Box Size:
        <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </label>
      <button type="submit">Create Mailbox</button>
    </form>
  );
}
