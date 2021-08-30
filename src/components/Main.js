import React from 'react';
import HornedBeast from './Hornedbeast';
import Data from './data.json';


class Main extends React.Component {

  render() {

    return (

      <div >
        {
        
        Data.map((item) => {

          return (
            <div>
              <HornedBeast 
                description={item.description}
                title={item.title}
                url={item.image_url} />

            </div>

          );

        })
        
        }



      </div>
    );

  }
}

export default Main;
