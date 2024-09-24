import React from 'react';
import { useTranslation } from 'react-i18next';
import Categories from '../componets/Categories';
import Sort from '../componets/Sort';
import PizzaBlock from '../componets/PizzaBlock';
import PizzaBlockSeleton from '../componets/PizzaBlock/PizzaBlockSeleton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const { t, i18n } = useTranslation();
  const getCurrentLanguage = () => i18n.language;
  const currentLanguage = getCurrentLanguage();

  React.useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:8888/pizzas')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setItems(data.pizzas);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">{t('home.title')}</h2>
      <div className="content__items">
        {isLoading &&
          [...new Array(8)].map((_, index) => (
            <PizzaBlockSeleton key={index} />
          ))}
        {!isLoading &&
          items?.map(pizza => (
            <PizzaBlock
              key={pizza.id}
              title={currentLanguage === 'ua' ? pizza.nameUa : pizza.nameEn}
              {...pizza}
            />
          ))}
      </div>
      ;
    </>
  );
};

export default Home;
