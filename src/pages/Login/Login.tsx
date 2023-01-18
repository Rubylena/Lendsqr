import { Link } from 'react-router-dom'
import logo from '../../assets/icon/logo.svg'
import loginImg from '../../assets/images/pablo-sign-in.svg'
import './login.scss'

const Login = () => {
    return (
        <>
        <div className="login">
            <section className="login-left">
                <div className="login-left-img">
                    <img src={logo} alt='logo' />
                </div>
                <div className="login-left-display">
                    <img src={loginImg} alt='login display' />
                </div>
            </section>

            <section className="login-right">
                <h1>Welcome!</h1>
                <p className='login-subtitle'>Enter details to login.</p>
                <form>
                    <div>
                        <input type='text' placeholder='Email' required />
                    </div>
                    <div className='password-input'>
                        <input type='text' placeholder='Password' required />
                        <span className='show'>SHOW</span>
                    </div>
                    <p className='forgot-password'>Forgot PASSWORD?</p>
                    <Link to='/dashboard'><button type='submit' className='login-btn'>Log in</button></Link>
                </form>
            </section>
        </div>
        </>
    )
}

export default Login