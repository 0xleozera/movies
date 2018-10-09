import React from 'react';

import { spinner } from '../../../assets/images';
import styles from './styles';

const Loadable = ({ children, loading, className }) => (
  <div className={className}>
    { children }

    <div className={loading ? "show-loader" : "do-not-show-loader"}>
      <div className="loader">
        <img src={spinner} alt="Carregando" />
      </div>
    </div>
  </div>
)

export default styles(Loadable);
