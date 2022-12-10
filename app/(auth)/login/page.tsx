import "./login.css";

const logIn = () => {};

const LoginPage = () => {
    return (
        <div>
            <form>
                <div className="login">
                    <h1>Login</h1>
                    <p>Noch keinen Login? Hier registrieren</p>
                    <input type="email" placeholder="E-Mail"/>
                    <input type="password" placeholder="Passwort"/>
                    <button>Anmelden</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
