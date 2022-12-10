import "./register.css";

export default function Register() {
    return (
        <div className="register-window">
            <h1>Register</h1>
            <p>Already registered, <a href="/login">sign in</a></p>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="E-Mail"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Password"/>
            <button>Register</button>
        </div>
    );
}
