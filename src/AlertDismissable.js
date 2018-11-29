import React from "react";
import {Grid, Row, Col, Button , Panel,
Tabs, Tab} from "react-bootstrap";
import CardContent from './component/CardContent';

const styles = {
  borderMain: {
    height: '30%',
    width: '100%',
    borderStyle: 'groove',
  },
  borderFooter: {
    height: 40,
    borderStyle: 'groove',
    textAlign: 'center',
  },
  footerText: {
    position: 'relative',
    top: 6,
  }
}
class AlertDismissable extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  

  render() {
    
      return (
        <div>
          <Grid>
            <Row className="show-grid">
            <div style={styles.borderMain}>
                <h1 style={{color: 'white'}}>
                  <span class="glyphicon glyphicon-home"></span> 
                  Your Account Summary
                  </h1>
<Col sm={6} md={6} mdPush={6}>
<div style={{float: 'right', paddingRight: 24}}>
    <ul >
      <li class="active"><a href="#">Equity</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
              </Col>
              <Col sm={6} md={6} mdPull={6}>
              <Panel>
    <Panel.Body>
      <Row className="show-grid">
        <Col sm={6} md={3}>
        <code>
          Investment Funds
        </code>
        <br />
        
      </Col>
      <Col sm={6} md={3}>
        <code>
          Current Value
        </code>
        <br />
        
      </Col>
      <Col sm={6} md={3}>
        <code>
          Annual Returns
        </code>
        <br />
      </Col>
      <Col sm={6} md={3}>
        <code>
          Cash balance
        </code>
        <br />
    </Col>
      </Row>
    </Panel.Body>
  </Panel>
                
              </Col>
            </div>
              
            </Row>
            <Row className="show-grid">
            <div style={styles.borderFooter}>  
            <span style={styles.footerText} class="glyphicon glyphicon-bell" ></span>
            <span style={styles.footerText}>You have cash availabele on investing</span>
            <Button bsStyle="danger" bsSize="small" >Allow Funds</Button>
             </div>
            </Row>
            <Row>
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="1 Investments">
                  <CardContent/>
                </Tab>
                <Tab eventKey={2} title="1 Goal(s) Planning ">
                  Tab 2 content
                </Tab>
              </Tabs>
            </Row>
          </Grid>
        </div>
      );
   
  }
}

export default AlertDismissable;