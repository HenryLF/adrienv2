"use client";

import  { ReactElement, cloneElement, useState, MouseEventHandler } from "react";
type PropType = {
  children: ReactElement<{ onClick?: MouseEventHandler }>;
  content: ReactElement;
};

export default function ClickableModal({ content, children }: PropType) {
  const [visible, setVisible] = useState(false);
  if (!visible)
    return cloneElement(children, {
      onClick: () => setVisible(true),
    });

  return (
    <>
      {children}
      <section className="section overlay" onClick={() => setVisible(false)}>
         {content}
      </section>
    </>
  );
}
