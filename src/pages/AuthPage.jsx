import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { ButtonUp, ButtonIn, StyledAuth, Row, Form } from "../styles/Auth";

export default function AuthPage() {
  let auth = useContext(AuthContext);

  const { loading, request, error } = useHttp();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      let data = await request(
        `${process.env.REACT_APP_URL}users/registration`,
        "POST",
        { ...form }
      );

      auth.login(data.token, data.userId);
    } catch (error) {
      alert(error.message);
    }
  };

  const loginHandler = async () => {
    try {
      let data = await request(
        `${process.env.REACT_APP_URL}users/login`,
        "POST",
        { ...form }
      );

      auth.login(data.token, data.userId);
    } catch (error) {}
  };
  return (
    <StyledAuth>
      <Row>
        <h2 className="">Authorization</h2>
        <Form>
          <input
            placeholder="Enter email"
            type="text"
            name="email"
            value={form.email}
            onChange={changeHandler}
          />
          <input
            placeholder="Enter password"
            type="password"
            name="password"
            className="yellow-input"
            value={form.password}
            onChange={changeHandler}
          />

          {error ? <p>{error}</p> : <p></p>}

          <div>
            <ButtonIn disabled={loading} onClick={loginHandler}>
              Sign In
            </ButtonIn>
            <ButtonUp
              type="button"
              disabled={loading}
              onClick={registerHandler}
            >
              Sign Up
            </ButtonUp>
          </div>
        </Form>
      </Row>
    </StyledAuth>
  );
}
