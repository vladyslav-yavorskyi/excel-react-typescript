import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faItalic,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons';

function Toolbar() {
  return (
    <div>
      <FontAwesomeIcon icon={faBold} />
      <FontAwesomeIcon icon={faItalic} />
      <FontAwesomeIcon icon={faUnderline} />
    </div>
  );
}

export default Toolbar;
