import { Suspense } from 'react';
import './scss/app.scss';
import Header from './componets/Header';
import Categories from './componets/Categories';
import Sort from './componets/Sort';
import PizzaBlock from './componets/PizzaBlock';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock title="Мексіканська" price={500} />
              <PizzaBlock title="Мексіканська" price={500} />
              <PizzaBlock title="Мексіканська" price={500} />
              <PizzaBlock title="Мексіканська" price={500} />
              <PizzaBlock title="Мексіканська" price={500} />
              <PizzaBlock title="Мексіканська" price={500} />
              <PizzaBlock title="Мексіканська" price={500} />
              <PizzaBlock title="Мексіканська" price={500} />
              <PizzaBlock />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
