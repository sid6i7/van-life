import React, { useState, useEffect } from "react";
import "../../css/Login.css";
import { login } from "../../api/userApi";
import { Link, Navigate, useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { CircularLoadingIndicator } from "../../components/CircularLoadingIndicator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from "../../utils/auth";

export const loginLoader = ({ request }) => {
    if(isAuthenticated()) {
        throw redirect("/profile");
    }
  const params = new URL(request.url).searchParams;
  console.log(params.toString());
  const message = params?.get("message");
  return message;
};

export const loginAction = (userContext) => async ({ request }) => {
    const {setIsLoggedIn} = userContext;
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    try {
        await login(email, password);
        setIsLoggedIn(true);
        const redirectTo = new URL(request.url).searchParams.get('redirectTo') || "/profile";
        return redirect(redirectTo);
    } catch(err) {
        return err.message;
    }
}

export const Login = () => {
  const [error, setError] = useState(null);
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();

  useEffect(() => {
    if(errorMessage) {
        toast.error(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    if(message) {
        toast.warning(message);
    }
  }, [message])

  return (
    <div className="login">
      <ToastContainer/>
      <h1 className="login--title">
        Sign in to your account
      </h1>
      <Form
        className="login--form"
        method="post" 
        replace
        >
        <input
          className="login--input"
          type="email"
          name="email"
          placeholder="Email address"
        />
        <input
          className="login--input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
            className="login--btn"
            disabled={navigation.state==="submitting"}
            >
          Sign in
        </button>
        {navigation.state==="submitting" && <CircularLoadingIndicator />}
        <p className="login--no-account">
          Don't have an account? <Link to={"../register"}>Create one now</Link>
        </p>
      </Form>
    </div>
  );
};
