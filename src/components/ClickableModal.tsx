"use client";

import Image from "next/image";
import {
  ReactElement,
  cloneElement,
  useState,
  MouseEventHandler,
  useEffect,
} from "react";
type PropType = {
  children: ReactElement<{ onClick?: MouseEventHandler }>;
  content: ReactElement;
};

export default function ClickableModal({ content, children }: PropType) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.document.body.style.overflow = visible ? "hidden" : "visible";
  }, [visible]);

  if (!visible)
    return cloneElement(children, {
      onClick: () => setVisible(true),
    });

  return (
    <>
      {children}
      <section className="section overlay" onClick={() => setVisible(false)}>
        <Image
          src="/close.svg"
          height={50}
          width={50}
          alt="close-icon"
          onClick={() => setVisible(false)}
          className="overlay-close"
        />
        <div onClick={(e) => e.stopPropagation()} className="size-full">
          {content}
        </div>
      </section>
    </>
  );
}
