import { useState } from 'react';
import './App.css'
import { Button, Form, Table } from 'react-bootstrap';

function App() {
  const [placa, setPlaca] = useState('')
  const [modelo, setModelo] = useState('')
  const [ano, setAno] = useState(2023)
  const [cor, setCor] = useState('')

  const [veiculos, setVeiculos] = useState([])

  
  function limpar() {
    setPlaca('')
    setModelo('')
    setAno(2023)
    setCor('')
  }

  function salvar() {
    const veiculo = {
      placa: placa,
      modelo: modelo,
      ano: ano,
      cor: cor
    }

    var regex = '[A-Z]{3}[0-9][0-9A-Z][0-9]{2}';
    
    if (!placa.match(regex)) {
      alert('Placa invalida!')
    } else {
      veiculos.push(veiculo)
      setVeiculos([...veiculos])
    }
  }

  return (
    <div className="container">
      <div className='title'>
        <h2>Cadastro de veiculos</h2>

      </div>
      <div>
        <div className='form'>
          <div className='form-left'>
            <Form.Label>Placa</Form.Label>
            <Form.Control onChange={(e)=>{setPlaca(e.target.value)}} value={placa} type="text"/>

            <Form.Label>Ano</Form.Label>
            <Form.Control onChange={(e)=>{setAno(e.target.value)}} value={ano} type="text"/>

          </div>
          <div className='form-rigth'>
            <Form.Label>Modelo</Form.Label>
            <Form.Control onChange={(e)=>{setModelo(e.target.value)}} value={modelo} type="text"/>
    
            <Form.Label>Cor</Form.Label>
            <Form.Select onChange={(e)=>{setCor(e.target.value)}} value={cor}>
              <option value="Preto">Preto</option>
              <option value="Branco">Branco</option>
              <option value="Vermelho">Vermelho</option>
            </Form.Select>
          </div>
        </div>
        <div className='form-buttons'>
          <Button onClick={limpar} variant="secondary">Limpar</Button>
          <Button onClick={salvar}>Salvar</Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Placa</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Cor</th>
            </tr>
          </thead>
          <tbody>
            {
              veiculos.map((veiculo)=>{
                return (
                  <tr key={veiculo.placa}>
                    <td>{veiculo.placa}</td>
                    <td>{veiculo.modelo}</td>
                    <td>{veiculo.ano}</td>
                    <td>{veiculo.cor}</td>
                  </tr>
                )
              })
            }
          </tbody>
      </Table>

      </div>
    </div>
  )
}

export default App
