import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSceleton = props => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="141" cy="102" r="98" />

    <circle cx="141" cy="102" r="98" />
    <rect x="160" y="282" rx="0" ry="0" width="0" height="1" />
    <rect x="13" y="295" rx="0" ry="0" width="267" height="76" />
    <rect x="24" y="406" rx="0" ry="0" width="99" height="37" />
    <rect x="133" y="406" rx="18" ry="18" width="148" height="39" />
    <rect x="224" y="262" rx="0" ry="0" width="0" height="1" />
    <rect x="164" y="251" rx="0" ry="0" width="0" height="1" />
    <rect x="14" y="225" rx="0" ry="0" width="281" height="42" />
  </ContentLoader>
);

export default PizzaSceleton;
