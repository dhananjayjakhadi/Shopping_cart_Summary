import React, { Component } from 'react';
import {Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap';

var styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight:800
    }
};

class PickupSavings extends Component {
    state = {  }
    render() {
        const tooltip = (
            <Tooltip id ='tooltip'>
            <p>Picking up your order in the store helps cut costs, and we pass the saving on to you.</p>
        </Tooltip> 
        );

        return ( 
            <Row className="show-grid">
                <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={StyleSheet.PickupSavings}>Pickup Savings</div>
                    </OverlayTrigger>
                </Col>
        <Col style={styles.totalSavings} md={6}>{`$${this.props.price}`}</Col>
            </Row>
         );
    }
}
 
export default PickupSavings;