export const generateSources = (basePath, format, imagePaths) => {
  const mediaQuery =
    format === 'mob'
      ? '(max-width: 833px)'
      : `(min-width: ${getMinWidth(format)})`;

  return Object.keys(imagePaths[format]).map((extension, index) => (
    <source
      key={index}
      media={mediaQuery}
      srcSet={`${basePath}/${imagePaths[format][extension][0]} 1x, ${basePath}/${imagePaths[format][extension][1]} 2x`}
      type={`image/${extension}`}
    />
  ));
};

export const getMinWidth = (format) => {
  switch (format) {
    case 'desk':
      return '1440px';
    case 'tab':
      return '834px';
    case 'mob':
      return '833px';
    default:
      return '1440px';
  }
};
