import { useState } from 'react';
import { Link } from 'react-router-dom';


import logo from '../../assets/logo.png';

function Signup() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
      e.preventDefault();
      alert('Clicou!')
    }

    return (
      <div className='container-center'>
        <div className='login'>
          <div className='logo-area'>
            <img src={logo} alt='Logo do Sistema'/>
          </div>

          <form onSubmit={handleSubmit}>
            <h1>Cadastrar uma conta</h1>
            <input type='text' placeholder='Seu nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
            <input type='text' placeholder='nome@email.com' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type='password' placeholder='*********' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Cadastar</button>
          </form>

          <Link to="/">Já possui uma conta?</Link>
        </div>
      </div>
    );
  }
  
  export default Signup;