import Link from "next/link";
import { ReactNode } from "react";
import PortableText from "react-portable-text";
type PropType = {
  content: object[];
  maxWidth?: string;
};
export function TextHead({ content, maxWidth }: PropType) {
  return (
    <div style={{ maxWidth }}>
      <PortableText
        content={content}
        serializers={{
          h1: ({ children }: { children: ReactNode }) => (
            <h1 className="h1">{children}</h1>
          ),
          h2: ({ children }: { children: ReactNode }) => (
            <h2 className="h2"> {children}</h2>
          ),
          normal: ({ children }: { children: ReactNode }) => (
            <p className="head">{children}</p>
          ),
          link: ({ children, href }: { children: ReactNode; href: string }) => (
            <Link className="underline" href={href}>
              {children}
            </Link>
          ),
        }}
      />
    </div>
  );
}

export function TextMain({ content, maxWidth }: PropType) {
  return (
    <div style={{ maxWidth }}>
      <PortableText
        content={content}
        serializers={{
          h1: ({ children }: { children: ReactNode }) => (
            <h1 className="h1">{children}</h1>
          ),
          h2: ({ children }: { children: ReactNode }) => (
            <h2 className="h2"> {children}</h2>
          ),
          normal: ({ children }: { children: ReactNode }) => (
            <p className="main">{children}</p>
          ),
          link: ({ children, href }: { children: ReactNode; href: string }) => (
            <Link className="underline" href={href}>
              {children}
            </Link>
          ),
        }}
      />
    </div>
  );
}
