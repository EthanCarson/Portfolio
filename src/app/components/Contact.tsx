import { useState } from "react";
import Header from "../components/Header";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    // Send POST request to the API route
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, message })
    });

    // Check if the response is successful and set the status accordingly
    if (response.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus("Failed to send message. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div id="Contact">
      <Header HImage="#" Heading="Ethan Carson" />
      <aside>
        <img src="" alt="" />
        <p>Stuff</p>
      </aside>
      <section>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Email"}
          </button>
        </form>
        {status && <p>{status}</p>}
        <button>Call Instead</button>
      </section>
    </div>
  );
}
