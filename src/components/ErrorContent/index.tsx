import React from 'react';

import styles from './ErrorContent.module.scss';

const ErrorContent: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2>Произошала ошибка.</h2>
      <p>Не удалось получить пиццы.</p>
    </div>
  );
};

export default ErrorContent;
