import { useState } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title';

import { FiPlusCircle } from 'react-icons/fi';
import './new.css';

export default function New(){

    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Em Aberto');
    const [complemento, setComplemento] = useState('');

    function handleRegister(e){
        e.preventDefault();

        alert("Clicou")
    }

    function handleChangeSelect(e){
        setAssunto(e.target.value);
    }

    function handleOptionChange(e){
        setStatus(e.target.value);
        alert(e.target.value);
    }

    return(
        <div>
            <Header />

            <div className='content'>
                <Title name="Novo Chamado">
                    <FiPlusCircle size={25}/>
                </Title>

                <div className='container'>
                    <form className='form-profile' onSubmit={handleRegister}>
                        <label>Cliente</label>
                        <select>
                            <option key={1} value={1}>Sujeito Programador</option>
                        </select>

                        <label>Assunto</label>
                        <select value={assunto} onChange={handleChangeSelect}>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita Tecnica">Visita Técnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label>Status</label>
                        <div className='status'>
                            <input type="radio" name='radio' value="Em Aberto" onChange={handleOptionChange} checked={status === 'Em Aberto'}/>
                            <span>Em Aberto</span>
                            
                            <input type="radio" name='radio' value="Progresso" onChange={handleOptionChange} checked={status === 'Progresso'}/>
                            <span>Progresso</span>
                            
                            <input type="radio" name='radio' value="Atendido" onChange={handleOptionChange} checked={status === 'Atendido'}/>
                            <span>Atendido</span>
                        </div>

                        <label>Complemento</label>
                        <textarea type="text" placeholder="Descreva seu problema (Opcional)" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>

                        <button type="submit">Salvar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}