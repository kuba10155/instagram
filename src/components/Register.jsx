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
                <p className="desc">Zarejestruj si??, aby przegl??da?? zdj??cia i filmy znajomych</p>
                <button><a className="white" href="https://facebook.com"><i className="fa-brands fa-square-facebook"></i> Zaloguj si?? przez Facebooka</a></button>
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
                        <input onChange={handleClick} value={login.name} name="name" type="text" placeholder="Imi?? i nazwisko" required/>
                        <div className="checked-value">{checked.name}</div>
                    </div>
                    <LoginForm password={login.password} checkedP={checked.password} login={login.login} checkedL={checked.login} handle={handleClick}/>
                    <p className="text">Osoby korzystaj??ce z naszej us??ugi mog??y przes??a?? Twoje informacje kontaktowe do Instagramu. <br/><span>Dowiedz si?? wi??cej</span></p>
                    <p className="text">Rejestruj??c si??, akceptujesz <span>Regulamin</span>. Informacje o tym, jak zbieramy, wykorzystujemy i udost??pniamy Twoje dane, zawieraj?? nasze <span>Zasady dotycz??ce plik??w cookie</span>. O wykorzystaniu plik??w cookie i podobnych technologii informuj?? <span>Zasady dotycz??ce plik??w cookie</span>.</p>
                    <button type="submit">Dalej</button>
                </form>
            </main>
            <div className="no-acc">
                    <p>Masz konto?
                        <Link to="/">
                            <span className="lightblue"> Zaloguj si??</span>
                        </Link>
                    </p>
            </div>
            <p>Pobierz aplikacj??.</p>
            <Download/>
        </div>
    )
}
