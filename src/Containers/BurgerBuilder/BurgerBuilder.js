import React,{Component} from 'react';
import Burger from "../../Components/Burger/Burger";
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const IngredientsPrice={
  salad:0.3,
  cheese:0.7,
  bacon:1,
  meat:1.7
};

export default class BurgerBuilder extends Component{

  state={
    ingredients:{
      salad:0,
      bacon:0,
      meat:0,
      cheese:0
    },
    totalPrice:4
  };

addIngredientsHandler=(type)=>{
  let oldValue = this.state.ingredients[type];
  const updatedValue = oldValue+1;
  const updatedIngredients = {
    ...this.state.ingredients
  };
  updatedIngredients[type] = updatedValue;
  const priceAddition = IngredientsPrice[type];
  const oldPrice = this.state.totalPrice;
  const newPrice = oldPrice+priceAddition;
  this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
}

removeIngredientsHandler=(type)=>{
  let oldValue = this.state.ingredients[type];
  if(oldValue <= 0){
    return;
  }
  const updatedValue = oldValue-1;
  const updatedIngredients = {
    ...this.state.ingredients
  };
  updatedIngredients[type] = updatedValue;
  const priceDeduction = IngredientsPrice[type];
  const oldPrice = this.state.totalPrice;
  const newPrice = oldPrice-priceDeduction;
  this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
}

  render(){
    const disabledInfo ={
      ...this.state.ingredients
    };

for(let key in disabledInfo){
  disabledInfo[key] = disabledInfo[key] <=0 ;
}
    console.log("=>",disabledInfo);
    return(
      <>
       <Burger ingredient={this.state.ingredients} />
       <BuildControls ingredientAdded={this.addIngredientsHandler}
        ingredientRemoved={this.removeIngredientsHandler}
        disabled={disabledInfo} price={this.state.totalPrice} />

      </>
    );
  }
}
