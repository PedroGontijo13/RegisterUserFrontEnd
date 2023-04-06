import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const RegisterContainer = styled.div`
  padding: 1rem 2rem;
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
    input {
      outline: none;
      border: none;
      height: 2.4rem;
      padding: 0 1rem;
      border-radius: 4px;
      font-size: 1rem;
    }
    button {
      height: 2.4rem;
      margin-top: 1rem;
      border: none;
      outline: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

const FormController = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/user/signup", {
        fullName,
        username,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <RegisterContainer>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <FormController>
          <label htmlFor="username">Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" placeholder="username" />
        </FormController>
        <FormController>
          <label htmlFor="fullName">Full Name</label>
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" id="fullName" placeholder="fullName" />
        </FormController>
        <FormController>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="email" />
        </FormController>
        <FormController>
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="password" />
        </FormController>

        <button type="submit">Register</button>
      </form>
    </RegisterContainer>
  );
};

export default Register;
