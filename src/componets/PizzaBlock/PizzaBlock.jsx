import React from 'react';
import { useTranslation } from 'react-i18next';
import Currency from '../Currency';
import { pizzaThickness } from '../../config/pizzaThickness';

const PizzaBlock = ({
  title = 'Default Pizza',
  price = 0,
  imageUrl,
  sizes,
  types,
}) => {
  const { t } = useTranslation();
  const [activeSizeIndex, setActiveSizeIndex] = React.useState(0);
  const [activeTypesIndex, setActiveTypesIndex] = React.useState(0);

  const handleClickSize = index => {
    setActiveSizeIndex(index);
  };
  const handleClickTypes = index => {
    setActiveTypesIndex(index);
  };
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={title} />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, index) => (
            <li
              onClick={() => handleClickTypes(index)}
              key={index}
              className={activeTypesIndex === index ? 'active' : ''}
            >
              {t(pizzaThickness[type])}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              onClick={() => handleClickSize(index)}
              key={index}
              className={activeSizeIndex === index ? 'active' : ''}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          от {price} <Currency currency="UAH" />
        </div>
        <button className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>0</i>
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
