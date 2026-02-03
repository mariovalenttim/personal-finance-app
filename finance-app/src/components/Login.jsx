import '../Login.css'
import { Navigate, useNavigate } from 'react-router-dom'

function Login(){
    
    const navigate = useNavigate()

    function CreateAccountjs(){
        navigate('/CreateAccount')
    }

    function Validationjs(){
        alert('Não é possivel acessar sua conta!')
    }   
    
    return <>
        <main>
            <div className='div-login'>
                <div className='input-div'>
                    <h4>Informe seu e-mail</h4>
                    <input type="text" name='e-mail' />
                </div>
                <div className='input-div'>
                    <h4>Informe sua senha</h4>
                    <input type="password" />
                    <p className='new-password'>esqueceu a senha?</p>
                </div>
                <div className='login-account'>
                    <button className='login-request' onClick={() => Validationjs()}>Acessar</button>
                    <p className='new-account' onClick={() => CreateAccountjs()}>Criar conta</p>
                </div>
            </div>
        </main>
    </>
}

export default Login;