import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

const Scrollable = () => {
  const [display, setDisplay] = useState(true);

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Card>
            <CardHeader>
              <h5>Example of Horizontal & vertical ScrollBar</h5>
            </CardHeader>
            <CardBody>
              <div className='scrollbar-container'>
                <div>
                  <img src='/assets/images/scrollabel.jpg' alt='' height='800' />
                </div>
              </div>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Scrollable;
