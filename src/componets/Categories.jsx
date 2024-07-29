import React from 'react';
import { useTranslation } from 'react-i18next';
import { categories } from '../config/categories';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { t } = useTranslation();

  const handleClickCategories = categoryIndex => {
    setActiveIndex(categoryIndex);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleClickCategories(index)}
            className={activeIndex === index ? 'active' : ''}
          >
            {t(category)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
