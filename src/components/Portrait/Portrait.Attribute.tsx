import React, { createElement, useMemo } from 'react';

import { PortraitContext } from '../../contexts';

import * as portraitAttributes from './Attributes';

/**
 * Attribute component for rendering portrait attributes based on the specified attribute key.
 *
 * @component
 * @param {object} props - The properties for the Attribute component.
 * @param {string} props.attribute - The attribute key specifying which portrait attribute to render.
 * @returns {JSX.Element} An Attribute component that renders portrait attributes.
 */
interface AttributeProps {
  attribute: keyof PortraitContext.AssembledPortrait;
}

export function Attribute({ attribute }: AttributeProps) {
  const {
    actions: { SET_SINGLE_ATTRIBUTE },
    state: { attributes, view, currentColor },
  } = PortraitContext.usePortraitContext();
  const { type, fill } = attributes[attribute];

  // Construct id and key for given attribute.
  const elementId = useMemo(
    () => `${attribute}${type ? `-${type}` : ''}`,
    [attribute, type]
  );

  // Call function to return elements with casting for type safety.
  const elements = useMemo(() => {
    const constructElements = portraitAttributes[
      attribute
    ] as PortraitContext.CreateElements<
      PortraitContext.AttributeTypeAssociation<typeof attribute>
    >;
    return constructElements({
      type,
      fill,
      state: view,
      colorAction: (key: keyof PortraitContext.AttributeFills) => {
        SET_SINGLE_ATTRIBUTE({
          [attribute]: {
            type: attributes[attribute].type,
            fill: { ...attributes[attribute].fill, [key]: currentColor },
          },
        });
      },
    });
  }, [SET_SINGLE_ATTRIBUTE, attribute, attributes, currentColor, fill, type, view]);

  return (
    <g id={elementId} key={elementId}>
      {elements.map((element, i) =>
        createElement(element.type, {
          ...element.props,
          key: i,
        })
      )}
    </g>
  );
}
