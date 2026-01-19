import '../Login.css'

function Login(){
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
                    <button className='login-request'>Acessar</button>
                    <p className='new-account'>Criar conta</p>
                </div>
            </div>
        </main>
    </>
}

export default Login;