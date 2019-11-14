import React, { Component } from 'react';
import {Container, Collapse, Well, Form, Row, Col, FormGroup, FormControl, Button,} from 'react-bootstrap';

class PromoCodeDiscount extends Component {
    state = { 
        open: false,
        value: ''
     }
    render() { 
        return ( 
            <div>
                <Container 
                className="promo-code-button"
                bsStyle="link" 
                onClick={()=> this.setState({open: !this.state.open})}
                >
                {this.state.open == false ? `Apply ` : `Hide`}
                promo code
                {this.state.open === false ? ' +' : ` -`}
                </Container>
                <Collapse
                in ={this.state.open}
                >
                    <div>
                        <Row className="show-grid">
                            <Col md={12}>
                                <Form>
                                    <FormGroup controlId="formInLineName">
                                        <Form.Label>Promo Code</Form.Label>
                                        <FormControl type="text"
                                        placeholder="Enter Promo code"
                                        value={this.props.promoCode}
                                        onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                    <Button block
                                    bsStyle="success"
                                    className="btn-round"
                                    disabled={this.props.isDisabled}
                                    onClick={this.props.giveDiscount}
                                    >Apply</Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                
                </Collapse>
            </div>
         );
    }
}
 
export default PromoCodeDiscount;
