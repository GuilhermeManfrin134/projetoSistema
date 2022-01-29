import { useState } from "react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Title from "../../components/Title";

import './dashboard.css';
import { FiMessageSquare, FiPlus } from "react-icons/fi";

export default function Dashboard(){
    
    const [chamados, setChamados] = useState([]);

    return(
        <div>
            <Header />
            <div className="content">
                <Title name="Atendimentos">
                    <FiMessageSquare size={25}/>
                </Title>

                {chamados.length === 0 ? (
                    <div className="container dashboard">
                    <span>Nenhum chamado registrado...</span>

                    <Link to="/new" className="new">
                        <FiPlus size={25} color="#FFF"/>
                        Novo Chamado
                    </Link>
                    </div>
                )   : (
                <>
                    <Link to="/new" className="new">
                        <FiPlus size={25} color="#FFF"/>
                        Novo Chamado
                    </Link>
                </>
                )}

                
            </div>
        </div>
    )
}