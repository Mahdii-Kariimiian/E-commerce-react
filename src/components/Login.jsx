import React, { useRef, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    console.log(userRef.current);

    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [err, setErr] = React.useState("");
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErr("");
    }, [user, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("logged in ");
        setIsLoggedIn(true);
        setUser("");
        setPassword("");
    };

    return (
        <div className="text-text bg-background flex flex-col items-center justify-center h-[80vh]">
            {isLoggedIn ? (
                <section className="flex flex-col items-center justify-center">
                    <h1 className="text-secondary font-bold text-2xl mb-4">Welcome to CodeCart</h1>
                    <button className="mt-3 bg-primary text-lg text-text p-2 rounded-md">
                        <Link to="/products">Go to Products</Link>
                    </button>
                </section>
            ) : (
                <section className="sm:w-[500px]">
                    <p
                        ref={errRef}
                        aria-live="assertive" // announce immediately when the focus set to this paragraph
                    >
                        {err}
                    </p>

                    <h1 className="text-text text-2xl font-bold">Sign in</h1>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <label className="mt-3" htmlFor="username">Username:</label>
                        <input
                            className="border-2 border-gray-300 p-2 rounded-md mt-3"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <label className="mt-3" htmlFor="password">Password:</label>
                        <input
                            className="border-2 border-gray-300 p-2 rounded-md mt-3"
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button className="bg-primary text-text text-xl rounded-md py-2 mt-6">Sign in</button>
                    </form>
                    <p className="mt-5 text-secondary">
                        Don't have an account? {" "}
                        <span>
                            <Link className="bg-primary text-text text-sm rounded-md p-1 mt-4" to="/signup">Sign up</Link>
                        </span>
                    </p>
                </section>
            )}
        </div>
    );
}

export default Login;
