import Image from './ImageAdaptSize.styled';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

function StyledImage({
    src,
    alt,
    mobwidth,
    mobmargin,
    tabwidth,
    tabmargin,
    deskwidth,
    deskmargin
  }) {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <Image
          src={src}
          alt={alt}
          mobwidth={mobwidth}
          mobmargin={mobmargin}
          tabwidth={tabwidth}
          tabmargin={tabmargin}
          deskwidth={deskwidth}
          deskmargin={deskmargin}
        />
      </StyleSheetManager>
    );
  }
  
  export default StyledImage;