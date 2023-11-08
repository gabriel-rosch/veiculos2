import './App.css'
import { Button, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="container">
      <div className='title'>
        <h2>Cadastro de veiculos</h2>
      </div>
      <div>
        <div className='form'>
          <div className='form-left'>

            <Form.Label>Placa</Form.Label>
            <Form.Control type="text"/>

            <Form.Label>Ano</Form.Label>
            <Form.Control type="number"/>

          </div>
          <div className='form-rigth'>
            <Form.Label>Modelo</Form.Label>
            <Form.Control type="text"/>

            <Form.Label>Cor</Form.Label>
            <Form.Select>
              <option value="1">Preto</option>
              <option value="2">Branco</option>
              <option value="3">Vermelho</option>
            </Form.Select>
          </div>
        </div>




      

       

        <Button>Salvar</Button>
      </div>
    </div>
  )
}

export default App
