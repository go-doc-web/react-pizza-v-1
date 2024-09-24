import React from 'react';
import { useTranslation } from 'react-i18next';

import css from './NotFoundBlock.module.scss';

console.log(css);
const NotFoundBlock = () => {
  const { t } = useTranslation();

  return (
    <div className={css.root}>
      <h1>
        <span>😕</span>
        <br />
        {t('notfound.title')}
      </h1>
      <p className={css.description}>{t('notfound.titleDescr')}</p>
    </div>
  );
};

export default NotFoundBlock;
