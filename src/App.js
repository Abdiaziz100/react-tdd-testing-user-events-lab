import React, { useState } from "react";

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: {
      sports: false,
      tech: false,
      music: false,
    },
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: {
          ...prev.interests,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData(formData);
  }

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img src="https://via.placeholder.com/350" alt="My profile pic" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>

      {/* Newsletter Signup Form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input id="email" name="email" value={formData.email} onChange={handleChange} />

        <fieldset>
          <legend>Interests:</legend>
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={formData.interests.sports}
              onChange={handleChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="tech"
              checked={formData.interests.tech}
              onChange={handleChange}
            />
            Tech
          </label>
          <label>
            <input
              type="checkbox"
              name="music"
              checked={formData.interests.music}
              onChange={handleChange}
            />
            Music
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <p>
            Thanks {submittedData.name}! You've signed up with email {submittedData.email}.
          </p>
          <p>
            Interests:{" "}
            {Object.entries(submittedData.interests)
              .filter(([_, v]) => v)
              .map(([k]) => k)
              .join(", ") || "None"}
          </p>
        </div>
      )}
    </main>
  );
}

export default App;
