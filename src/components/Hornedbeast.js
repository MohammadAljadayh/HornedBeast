import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     totalLike: 0
    };
  }

 NumberOFlikes = () => {
    this.setState({
        totalLike: this.state.totalLike + 1
    });
  }

  render() {
    return (
      <div>


        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top"  src={this.props.url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>   {this.props.description} </Card.Text>
            <Button onClick={this.NumberOFlikes }  variant="primary">Like Me</Button>
           
            <Card.Text>   Number of likes 💙 {this.state.totalLike} </Card.Text>

          
          </Card.Body>
        </Card>

  
    
      </div>
    );
  }
}


export default HornedBeast;