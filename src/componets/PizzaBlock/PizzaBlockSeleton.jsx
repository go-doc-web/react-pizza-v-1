import React from 'react';
import css from './PizzaBlock.module.css';
const PizzaBlockSeleton = () => {
  return (
    <div className={css.wrapperSceleton}>
      <div className={css.wrapperCircle}>
        <div className={css.circle}></div>
      </div>
      <div className={css.title}></div>
      <div className={css.descr}></div>
      <div className={css.actionBlock}>
        <span className={css.price}></span>
        <span className={css.btn}></span>
      </div>
    </div>
  );
};

export default PizzaBlockSeleton;
