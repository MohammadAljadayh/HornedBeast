
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import Data from './components/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: Data,
      show: false,
      details: {}
    };
  }


showBeast=(cardDetails) => {

    this.setState(
      {
        show: true,
        details: cardDetails
      });

  }

  close = () => {
    this.setState({
      show: false,
      details: {}
    });
  }


  render() {
    return (
      <div>
      <Header />
      <SelectedBeast show={this.state.show} close={this.close} details={this.state.details} />
      <Main data={this.state.data} showBeast={this.showBeast} />
      <Footer />
    </div>
    )
  }
}

export default App;
