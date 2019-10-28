import React from 'react';
import classes from './App.module.css';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className={`${classes.App}`}>
     <Layout>
      <BurgerBuilder />
     </Layout>
    </div>
  );
}

export default App;
