import React from 'react';
import "./ClientLayout.scss";

export function ClientLayout(props) {
  //children es el contenido del layout
  const {children} = props;
  return (
    <div>
      <p>Client Layout</p>
      {children}
    </div>
  );
}
