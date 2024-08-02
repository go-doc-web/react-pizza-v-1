import { Suspense } from 'react';
import './scss/app.scss';
import { useTranslation } from 'react-i18next';
import Header from './componets/Header';
import Categories from './componets/Categories';
import Sort from './componets/Sort';
import PizzaBlock from './componets/PizzaBlock';
import pizzas from './db.json';

// https://66aced6ef009b9d5c733de24.mockapi.io/items

function App() {
  const { i18n } = useTranslation();
  const getCurrentLanguage = () => i18n.language;
  const currentLanguage = getCurrentLanguage();

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
              {pizzas?.map(pizza => (
                <PizzaBlock
                  key={pizza.id}
                  title={currentLanguage === 'ua' ? pizza.nameUa : pizza.nameEn}
                  {...pizza}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
