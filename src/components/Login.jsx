import React, {useState} from "react"
import {Link} from "react-router-dom"
import LoginForm from "./LoginForm"
import Download from "./Download"

export default function Login() {

    const [login, setLogin] = useState({
        login: "",
        password: ""
    })

    function handleClick(event) {
        const {name, value} = event.target
        setLogin(prevLogin => ({
            ...prevLogin,
            [name]: value
        }))
    }

    function refreshPage(event) {
        event.preventDefault()
        window.location.reload(false);
        alert("Login: " + login.login + "\nPassword: " + login.password)
    }

    return (
        <div className="login-section">
            <img className="image" src="./src/images/home.png"/>
            <div className="main-sec">
                <main>
                    <h1>Instagram</h1>
                    <form className="form" onSubmit={refreshPage}>
                        <LoginForm password={login.password} login={login.login} handle={handleClick}/>
                        <button className="login-btn" type="submit">Zaloguj się</button>
                    </form>
                    <div className="divider">
                        <hr/>
                        <p className="line">LUB</p>
                        <hr/>
                    </div>
                    <a className="blue" href="https://www.facebook.com/">
                        <i className="fa-brands fa-square-facebook"></i> Zaloguj się przez Facebooka
                    </a>
                    <a className="black forgot" href="#">Nie pamiętasz hasła?</a>
                </main>
                <div className="no-acc">
                    <p>Nie masz konta?
                        <Link to="/register">
                            <span className="lightblue"> Zarejestruj się</span>
                        </Link>
                    </p>
                </div>
                <p>Pobierz aplikację.</p>
                <Download/>
            </div>
        </div>
    )
}
