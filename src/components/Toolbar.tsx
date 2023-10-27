import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setCurrentStyle, setStyle } from '../store/features/cellSlice';

function Toolbar() {
  const { currentCell, currentStyle } = useAppSelector((state) => state.cellReducer);
  const { group } = useAppSelector((state) => state.groupSelectReducer);
  const dispatch = useAppDispatch();

  const [styles] = useState({
    fontWeight: false,
    fontStyle: false,
    textDecoration: false,
  });

  const clickHandler = (style: string, value: string) => {
    return () => {
      const updateStyle = (style: any, value: any) => {
        const updatedStyle = { ...currentStyle, [style]: value };
        dispatch(setCurrentStyle({ style: updatedStyle }));

        const targetCell = group.length ? group : [currentCell];
        targetCell.forEach((cell) => {
          dispatch(setStyle({ styleObj: { cell, style, value } }));
        });
      };

      if (currentStyle[style as keyof typeof styles]) {
        updateStyle(style, '');
      } else {
        updateStyle(style, value);
      }
    };
  };

  return (
    <div className="[&>*]:ml-3 [&>*]:p-1 [&>*]:cursor-pointer [&>*]:rounded hover:[&>*]:bg-slate-200">
      <FontAwesomeIcon
        data-testid="bold"
        style={currentStyle?.fontWeight ? { backgroundColor: 'gray' } : {}}
        onClick={clickHandler('fontWeight', 'bold')}
        icon={faBold}
      />
      <FontAwesomeIcon
        data-testid="italic"
        style={currentStyle?.fontStyle ? { backgroundColor: 'gray' } : {}}
        onClick={clickHandler('fontStyle', 'italic')}
        icon={faItalic}
      />
      <FontAwesomeIcon
        data-testid="underline"
        style={currentStyle?.textDecoration ? { backgroundColor: 'gray' } : {}}
        onClick={clickHandler('textDecoration', 'underline')}
        icon={faUnderline}
      />
    </div>
  );
}

export default Toolbar;
