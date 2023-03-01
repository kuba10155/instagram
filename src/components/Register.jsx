import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import LoginForm from "./LoginForm"
import Download from "./Download"

export default function Register() {

    const [login, setLogin] = useState({
        email: "",
        name: "",
        login: "",
        password: ""
    })

    const [checked, setChecked] = useState({
        email: ``,
        name: ``,
        login: ``,
        password: ``
    })

    useEffect(() => {
        check()
    }, [login])

    function check() {
      const bad = <i class="fa-regular fa-circle-xmark icon"></i>
      const good = <i className="fa-solid fa-circle-check icon"></i>
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(login.email.match(validRegex)) {
            setChecked(prevValue => ({...prevValue, email: good}))
        } else if(login.email.length > 0) {
            setChecked(prevValue => ({...prevValue, email: bad}))
        }

        if(login.name.length > 0) {
          setChecked(prevValue => ({...prevValue, name: good}))
        }

        if(login.login.length > 0) {
          setChecked(prevValue => ({...prevValue, login: good}))
        }

        if(login.password.length >= 8) {
            setChecked(prevValue => ({...prevValue, password: good}))
        } else if(login.password.length > 0 && login.password.length < 8) {
            setChecked(prevValue => ({...prevValue, password: bad}))
        }
    }

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
        alert("E-mail: " + login.email + "\nName: " + login.name + "\nLogin: " + login.login + "\nPassword: " + login.password)
    }

    return (
        <div className="main-sec center">
            <main>
                <h1>Instagram</h1>
                <p className="desc">Zarejestruj się, aby przeglądać zdjęcia i filmy znajomych</p>
                <button><a className="white" href="https://facebook.com"><i className="fa-brands fa-square-facebook"></i> Zaloguj się przez Facebooka</a></button>
                <div className="divider">
                    <hr/>
                    <p className="line">LUB</p>
                    <hr/>
                </div>
                <form onSubmit={refreshPage}>
                    <div className="input-container">
                        <input onChange={handleClick} value={login.email} name="email" type="email" placeholder="Adres e-mail" required/>
                        <div className="checked-value">{checked.email}</div>
                    </div>
                    <div className="input-container">
                        <input onChange={handleClick} value={login.name} name="name" type="text" placeholder="Imię i nazwisko" required/>
                        <div className="checked-value">{checked.name}</div>
                    </div>
                    <LoginForm password={login.password} checkedP={checked.password} login={login.login} checkedL={checked.login} handle={handleClick}/>
                    <p className="text">Osoby korzystające z naszej usługi mogły przesłać Twoje informacje kontaktowe do Instagramu. <br/><span>Dowiedz się więcej</span></p>
                    <p className="text">Rejestrując się, akceptujesz <span>Regulamin</span>. Informacje o tym, jak zbieramy, wykorzystujemy i udostępniamy Twoje dane, zawierają nasze <span>Zasady dotyczące plików cookie</span>. O wykorzystaniu plików cookie i podobnych technologii informują <span>Zasady dotyczące plików cookie</span>.</p>
                    <button type="submit">Dalej</button>
                </form>
            </main>
            <div className="no-acc">
                    <p>Masz konto?
                        <Link to="/">
                            <span className="lightblue"> Zaloguj się</span>
                        </Link>
                    </p>
            </div>
            <p>Pobierz aplikację.</p>
            <Download/>
        </div>
    )
}
