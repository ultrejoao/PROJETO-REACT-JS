import React, { useState } from 'react';
import './style.css'
function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });
    const [dadosArmazenados, setDadosArmazenados] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Armazenar os dados no localStorage
        localStorage.setItem('formDados', JSON.stringify(formData));

        // Exibir os dados armazenados
        setDadosArmazenados(formData);

        // Limpar os campos do formulário após o envio (opcional)
        setFormData({
            nome: '',
            email: '',
            mensagem: ''
        });
    };

    // Recuperar os dados do localStorage quando o componente é montado
    React.useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formDados'));
        if (storedData) {
            setDadosArmazenados(storedData);
        }
    }, []);

    return (
        <section className="contato">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="main title">Contato</h3>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nome">Nome:</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensagem">Mensagem:</label>
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    value={formData.mensagem}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="form-control"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                        {dadosArmazenados && (
                            <div>
                                <h4>Dados Armazenados:</h4>
                                <p>Nome: {dadosArmazenados.nome}</p>
                                <p>Email: {dadosArmazenados.email}</p>
                                <p>Mensagem: {dadosArmazenados.mensagem}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contato;
