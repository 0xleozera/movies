import React, { Fragment } from 'react';

import If from '../components/support/if';
import { noImage } from '../assets/images';

const renderImage = (image, title, isPoster) => (
  <Fragment>
    <If test={(!image || image === 'N/A') && !!isPoster}>
      <img src={noImage} alt={title} />
    </If>

    <If test={(!image || image === 'N/A') && !isPoster}>
      {null}
    </If>

    <If test={image && image !== 'N/A'}>
      <img src={image} alt={title} />
    </If>
  </Fragment>
)

export default renderImage;
