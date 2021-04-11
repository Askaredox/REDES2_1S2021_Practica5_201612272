import './App.scss';
import { Nav, Icon, Grid, Row, Col, Panel, Placeholder } from 'rsuite';
import tejido1 from './assets/tejido1.jpg';
import tejido2 from './assets/tejido2.jpg';
import React from 'react';

class App extends React.Component{
  constructor(prop){
    super(prop);
    this.state={
      data:{
        curso:'-',
        nombre:'-',
        carnet:'-',
        fecha:'-'
      }
    }
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    return (
      <div>
        <Nav className='menu'>
          <Nav.Item icon={<Icon icon="home" />}><strong>Guatemalan Hands</strong></Nav.Item>
          <Nav.Item icon={<Icon icon="newspaper-o" />}>Novedades</Nav.Item>
          <Nav.Item icon={<Icon icon="creative" />}>Servicios</Nav.Item>
          <Nav.Item icon={<Icon icon="shopping-cart" />}>Productos</Nav.Item>
          <Nav.Item icon={<Icon icon="info" />}>Acerca de</Nav.Item>
        </Nav>
        <Grid fluid className='content'>
          <Row className="show-grid">
            <Col className='image' xs={12}><img src={tejido1} alt="" width={400}/></Col>
            <Col className='text' xs={12}>
              <Panel header="Guatemalan Hands" shaded>
                <p>Se dedica a la fabricación y venta de artesanía y textiles a nivel nacional, con el objetivo de expandir la cultura guatemalteca.</p>
                <Placeholder.Paragraph/>
              </Panel>  
            </Col>
          </Row>
          <Row className="show-grid">
            <Col className='text' xs={12}>
              <Panel header="Contacto" shaded>
                <p>Curso: {this.state.data.curso}</p>
                <p>Nombre: {this.state.data.nombre}</p>
                <p>Carnet: {this.state.data.carnet}</p>
                <p>Fecha: {this.state.data.fecha}</p>
              </Panel>  
            </Col>
            <Col className='image' xs={12}><img src={tejido2} alt="" width={400}/></Col>
          </Row>
        </Grid>
      </div>
    );
  }

  getData=async()=>{
    try{
      const res = await fetch('http://localhost:5000/');
      const data = await res.json();
      this.setState({
        data:{
          curso:data.curso,
          nombre:data.nombre,
          carnet:data.carnet,
          fecha:data.fecha
        }
      });
      console.log();
    }catch(error){
      console.log(error);
    }
  }

}

export default App;
