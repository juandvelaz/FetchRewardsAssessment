import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    const sendFormData = async () => {
      try {
        const response = await axios.post(
          'https://frontend-take-home.fetchrewards.com/form',
          form
        );
      } catch (error) {
        console.log(error);
      }
    };
    sendFormData();

    setForm({
      name: '',
      email: '',
      password: '',
      occupation: '',
      state: '',
    });
  };

  const [data, setData] = useState();
  useEffect(() => {
    const fetchRewardsData = async () => {
      try {
        const response = await axios.get(
          `https://frontend-take-home.fetchrewards.com/form`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRewardsData();
  }, []);

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

      <div>
        <label htmlFor="occupation">Occupation: </label>
        <select
          id="occupation"
          value={form.occupation}
          onChange={handleChange}
          required
        >
          <option value="">Please Select</option>
          {data ? (
            Object.values(data.occupations).map((element, index) => (
              <option value={element} key={index}>
                {element}
              </option>
            ))
          ) : (
            <option value="Loading">Loading</option>
          )}
        </select>
      </div>

      <div>
        <label htmlFor="state">Location: </label>
        <select id="state" value={form.state} onChange={handleChange} required>
          <option value="">Please Select</option>
          {data ? (
            Object.values(data.states).map((element, index) => (
              <option value={element.name} key={index}>
                {element.name}
              </option>
            ))
          ) : (
            <option value="Loading">Loading</option>
          )}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
