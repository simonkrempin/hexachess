import "./login.css";

const logIn = () => {};

const LoginPage = () => {
    return (
        <div>
            <form>
                <div className="login-window">
                    <h1>Login</h1>
                    <p>Noch keinen Login? <a href="/register">Hier registrieren</a></p>
                    <input type="email" placeholder="E-Mail"/>
                    <input type="password" placeholder="Passwort"/>
                    <button>Anmelden</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
