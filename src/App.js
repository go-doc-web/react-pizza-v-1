import React from 'react';
import { Suspense } from 'react';
import './scss/app.scss';
import { useTranslation } from 'react-i18next';
import Header from './componets/Header';
import Categories from './componets/Categories';
import Sort from './componets/Sort';
import PizzaBlock from './componets/PizzaBlock';
import PizzaBlockSeleton from './componets/PizzaBlock/PizzaBlockSeleton';

// import pizzas from './db.json';

// http://localhost:4444/pizzas

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const { i18n } = useTranslation();
  const getCurrentLanguage = () => i18n.language;
  const currentLanguage = getCurrentLanguage();

  React.useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:4444/pizzas')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('data', data);
        setItems(data.pizzas);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

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
              {isLoading && [...new Array(8)].map((_, index) => <PizzaBlockSeleton key={index} />)}
              {!isLoading &&
                items?.map(pizza => (
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
