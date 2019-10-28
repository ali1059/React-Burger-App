import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformIngredient = Object.keys(props.ingredient)
  .map(igkey =>{
    return [...Array(props.ingredient[igkey])].map((_,i)=>{
      return <BurgerIngredient key={igkey+i} type={igkey} />
    });
  })
  .reduce((pvalue,cvalue)=>{
    return pvalue.concat(cvalue);
  },[]);

  console.log(transformIngredient);

  if(transformIngredient.length === 0){
    transformIngredient = <p>Please insert Ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
       {transformIngredient}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
