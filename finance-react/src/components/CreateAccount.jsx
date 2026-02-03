function CreateAccount(){
    return (
        <>
        <main>
            
            <div className='div-login'>
                <div className='input-div'>
                    <h4>Informe seu e-mail</h4>
                    <input type="text" name='e-mail' />
                </div>
                <div className='input-div'>
                    <h4>Crie sua senha</h4>
                    <input type="password" />
                </div>
                <div className='input-div'>
                    <h4>Informe sua senha novamente</h4>
                    <input type="password" />
                </div>
                <div className='login-account'>
                    <button className='login-request'>Criar conta</button>
                </div>
            </div>
        </main>
        </>
    )
}

export default CreateAccount;