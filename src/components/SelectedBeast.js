import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




class SelectedBeast extends React.Component{

  render(){
    return (
      
      <Modal show={this.props.show} onHide={this.props.close}  size="lg" >
      <Modal.Dialog >
        <Modal.Body >
        <Card.Text style={{ textAlign: 'center', fontSize:'30px' }} > {this.props.details. title} </Card.Text> 
          <Card.Img    variant="top" src={this.props.details.image_url} />
          <Card.Text> {this.props.details.description} </Card.Text> 
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>Close Popup</Button>
        </Modal.Footer>

      </Modal.Dialog>
    </Modal>
   
    );
  }
}







export default SelectedBeast;