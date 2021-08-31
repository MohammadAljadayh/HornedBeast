import React from 'react';
import HornedBeast from './Hornedbeast';



class Main extends React.Component {

  render() {

    return <>
        {this.props.data.map((item) => 
       {

          return <HornedBeast  
              description={item.description}
                title={item.title}
                image_url={item.image_url} 
                showBeast={this.props.showBeast}
                close={this.props.close} />;
        

        }
        )     
        }
</>;

   

  }
}

export default Main;
