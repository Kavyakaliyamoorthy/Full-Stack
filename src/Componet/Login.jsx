import './Login.css'
import { Link } from 'react-router-dom';
function Login() {
    return (
        <>
        <div className='arr'>
            <Link to='/'><i class="fa-solid fa-arrow-left"></i></Link>
        </div>
<div className="main">
        <form>
            <h1>Login</h1> 
            <table>
                <tr>
                    <td>
                        <input type="text" placeholder="Email"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password" placeholder="Password"/>
                    </td>
                </tr>
            </table>
            <h3 id="pass">Forgot Password?</h3>
            <button id="login">Login</button>
            <Link to='/Signup'><h3 class="acc">Don't have an account? Signup</h3></Link>
            <h2>Or</h2>
            <div className="google">
               <button><i class="fa-brands fa-google"></i> Login with Google</button>
            </div>
         <div className="link">
           <button><i class="fa-brands fa-linkedin"></i> Login with LinkedIn</button>
         </div>
        </form>
    </div>

        </>
    )
}

export default Login
