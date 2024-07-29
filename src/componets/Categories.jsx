import React from 'react';
import { useTranslation } from 'react-i18next';

const Categories = () => {
  const { t } = useTranslation();
  return (
    <div className="categories">
      <ul>
        <li className="active">{t('categories.all')}</li>
        <li>{t('categories.meat')}</li>
        <li>{t('categories.vegetarian')}</li>
        <li>{t('categories.grill')}</li>
        <li>{t('categories.spicy')}</li>
        <li>{t('categories.closed')}</li>
      </ul>
    </div>
  );
};

export default Categories;
