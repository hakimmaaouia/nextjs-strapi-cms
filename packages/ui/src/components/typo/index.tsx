import { cn } from "./../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, Fragment } from "react";

type asType = "h1" | "h2" | "h3" | "p" | "span" | "blockquote";

export interface ITypoProps
  extends React.ButtonHTMLAttributes<HTMLBaseElement>,
    VariantProps<typeof typoVariants>,
    VariantProps<typeof highlightVariants> {
  as: asType;
  highlightedIndex?: number[];
  children: string;
}

const typoVariants = cva("tracking-tight text-primary", {
  variants: {
    size: {
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      p: "text-lg",
      span: "text-base",
      blockquote: "text-xl",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
      semibold: "font-semibold",
      thin: "font-thin",
      light: "font-light",
    },
  },
  defaultVariants: {
    size: "p",
    weight: "normal",
  },
});

const highlightVariants = cva("", {
  variants: {
    highlight: {
      italic: "font-italic",
      underline: "text-underline",
      highlight: "text-yellow-500",
    },
  },
  defaultVariants: {
    highlight: "highlight",
  },
});

const Typo: FC<ITypoProps> = ({
  as: Tag = "span",
  size,
  weight,
  className,
  highlightedIndex,
  children,
  highlight,
}) => {
  if (!highlightedIndex?.length) {
    return (
      <Tag className={cn(typoVariants({ size, weight }), className)}>
        {children}
      </Tag>
    );
  }
  const words = typeof children === "string" ? children.split(" ") : [children];
  return (
    <Tag className={cn(typoVariants({ size, weight }), className)}>
      {words.map((word, index) => (
        <Fragment key={index}>
          {highlightedIndex?.includes(index) ? (
            <span className={cn(highlightVariants({ highlight }))}>{word}</span>
          ) : (
            word
          )}
          {index < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
  );
};

export { Typo };
