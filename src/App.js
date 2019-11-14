import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFess from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodeDiscount from './components/PromoCodeDiscount/PromoCodeDiscount';
import './App.css';

class App extends Component {
  state = {
    total: 100,
    PickupSavings:-3.85,
    taxes: 0,
    EstimataedTotal: 0,
    disablePromoCodeButton: false
    }

    componentDidMount =() => {
      this.setState ({
        taxes: (this.state.total + this.state.PickupSavings) * 0.0875
      }, 
      function() {
        this.setState({ 
          EstimataedTotal: this.state.total + this.state.PickupSavings + this.state.taxes
        }); 
      })
    }


  render() { 
    return ( 
      <div className="card">
        <Container className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)}></SubTotal>
          <PickupSavings price = {this.state.PickupSavings}></PickupSavings>
          <TaxesFess taxes={this.state.taxes.toFixed(2)}></TaxesFess>
          <hr />
          <EstimatedTotal price={this.state.EstimataedTotal.toFixed(2)}></EstimatedTotal>
          <ItemDetails price={this.state.EstimataedTotal.toFixed(2)} />
          <hr />
          <PromoCodeDiscount giveDiscount={() => this.giveDiscountHandler()} isDisable={this.state.disablePromoCodeButton}/>
        </Container>
      </div>
     );
  }
}
 
export default App;