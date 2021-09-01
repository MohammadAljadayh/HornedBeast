import React from 'react';
import HornedBeast from './Hornedbeast';
import Form from 'react-bootstrap/Form';
import Data from './data.json';


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      filterData:Data,
    };

  }



  newFilterdData = (event) => {

    let hornes = event.target.value;



    let newArr = this.props.data.filter(a => {
      if (hornes === 'All') {
        return a;
      } else if ( parseInt(hornes) === parseInt(a.horns)) {

        return a;
      }
    });
    this.setState({
      filterData:newArr,
    });

  }




  render() {

    return (
    <>

<Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Hornes Number</Form.Label>
            <Form.Control as="select" name="hornes" onChange={this.newFilterdData} >
              <option value='All'>All</option>
              <option value='1' >1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='100'>100</option>
            </Form.Control>
          </Form.Group>


        </Form>

<br />
        {this.state.filterData.map((item) => 
       {

          return (
          <>
          < HornedBeast  
              description={item.description}
                title={item.title}
                image_url={item.image_url} 
                showBeast={this.props.showBeast}
                close={this.props.close} />;

              
                
               
                </>
          );
        }
        )     
        }
</>

    );

  }
}

export default Main;
