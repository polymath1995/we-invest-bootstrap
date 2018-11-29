import React from 'react';

import {Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class CardContent extends React.Component {

    render(){
        return (
            <div style={{width: '25%', padding: 8}}>

            <Panel >
                <Panel.Heading>
                    <Panel.Title componentClass="h3">
                    Growth
                    <i class="glyphicon glyphicon-pencil"></i>
                    </Panel.Title>
                    <span> 10 Years</span>
                    
                </Panel.Heading>
                    <ListGroup>
  <ListGroupItem>Invested
      <strong style={{float: 'right'}}>SGD 7,794</strong>
  </ListGroupItem>
  <ListGroupItem>WIthdrawn
       <strong style={{float: 'right'}}>SGD 0</strong>
  </ListGroupItem>
  <ListGroupItem>Current Value
       <strong style={{float: 'right'}}>SGD 2,839</strong>
  </ListGroupItem>
  <ListGroupItem>Returns
       <strong style={{float: 'right'}}>-100.0%
       <i class="glyphicon glyphicon-arrow-down"></i>
       </strong>
       
  </ListGroupItem>
  <ListGroupItem>ProtFolio health
      <i style={{float: 'right'}} class="glyphicon glyphicon-signal"></i>
  </ListGroupItem>
</ListGroup>
            </Panel>
            </div>
        );
    }
}
export default CardContent;