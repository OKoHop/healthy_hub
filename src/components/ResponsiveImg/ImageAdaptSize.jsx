import Image from './ImageAdaptSize.styled';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

function StyledImage({
    src,
    alt,
    widthMob,
    marginMob,
    widthTab,
    marginTab,
    widthDesk,
    marginDesk
  }) {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <Image
          src={src}
          alt={alt}
          widthMob={widthMob}
          marginMob={marginMob}
          widthTab={widthTab}
          marginTab={marginTab}
          widthDesk={widthDesk}
          marginDesk={marginDesk}
        />
      </StyleSheetManager>
    );
  }
  
  export default StyledImage;