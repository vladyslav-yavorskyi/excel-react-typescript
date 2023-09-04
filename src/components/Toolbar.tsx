import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faItalic,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setStyle } from '../store/features/cellSlice';
import { setCurrentStyle } from '../store/features/localSlice';

function Toolbar() {
  const { currentCell, currentStyle } = useAppSelector(
    (state) => state.localReducer
  );
  const dispatch = useAppDispatch();

  const [styles, setStyles] = useState({
    fontWeight: false,
    fontStyle: false,
    textDecoration: false,
  });

  const clickHandler = (style: string, value: string) => {
    return () => {
      if (currentStyle[style as keyof typeof styles]) {
        dispatch(setCurrentStyle({ style: { ...currentStyle, [style]: '' } }));
        dispatch(
          setStyle({ styleObj: { cell: currentCell, style, value: '' } })
        );
      } else {
        dispatch(
          setCurrentStyle({ style: { ...currentStyle, [style]: value } })
        );
        dispatch(setStyle({ styleObj: { cell: currentCell, style, value } }));
      }
    };
  };

  return (
    <div className="[&>*]:ml-3 [&>*]:p-1 [&>*]:cursor-pointer [&>*]:rounded hover:[&>*]:bg-slate-200">
      <FontAwesomeIcon
        style={currentStyle?.fontWeight ? { backgroundColor: 'gray' } : {}}
        onClick={clickHandler('fontWeight', 'bold')}
        icon={faBold}
      />
      <FontAwesomeIcon
        style={currentStyle?.fontStyle ? { backgroundColor: 'gray' } : {}}
        onClick={clickHandler('fontStyle', 'italic')}
        icon={faItalic}
      />
      <FontAwesomeIcon
        style={currentStyle?.textDecoration ? { backgroundColor: 'gray' } : {}}
        onClick={clickHandler('textDecoration', 'underline')}
        icon={faUnderline}
      />
    </div>
  );
}

export default Toolbar;
