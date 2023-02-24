import React, { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    occupation: '',
    state: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Full Name: </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
          title="Password must be 4 or more characters containing at least one number, one uppercase letter, and one lowercase letter"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
