"use client";

import { FormEvent, useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col"}>
      <label htmlFor="email">Email</label>
      <input
        type={"text"}
        id="email"
        name="email"
        onChange={(event) => setEmail(event.target.value)}
        className={
          "flex-grow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }
      />
      <div className={"flex flex-col"}>
        <label htmlFor={"password"}>Password</label>
        <input
          type={"password"}
          id="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          className={
            "flex-grow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          }
        />
      </div>
      <button>Login</button>
    </form>
  );
}
