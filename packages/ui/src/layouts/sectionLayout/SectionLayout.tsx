import { cva, VariantProps } from "class-variance-authority";
import { FC, ReactNode } from "react";
import { cn } from "../../lib/utils";

const containerVariant = cva(
  "grid md:grid-cols-[1fr_1440px_1fr] grid-rows-1 grid-cols-1 md:px-0",
  {
    variants: {
      backgroundColor: {
        default: "bg-background",
        foreground: "bg-foreground",
      },
    },
    defaultVariants: {
      backgroundColor: "default",
    },
  }
);

const innerContainerVariant = cva("", {
  variants: {
    sectionVariant: {
      default: "md:col-start-2 md:col-span-1  md:mx-[40px] mx-[15px]",
      small: "md:col-start-2 md:col-span-1  md:mx-[253px] mx-[15px]",
      full: "md:col-start-1 md:col-span-3 w-full",
    },
  },
  defaultVariants: {
    sectionVariant: "default",
  },
});

export interface ISectionLayoutProps
  extends VariantProps<typeof containerVariant>,
    VariantProps<typeof innerContainerVariant> {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

const SectionLayout: FC<ISectionLayoutProps> = ({
  className,
  innerClassName,
  children,
  backgroundColor = "default",
  sectionVariant = "default",
}) => {
  return (
    <div
      className={cn(
        className,
        containerVariant({ backgroundColor }),
        "bg-orange-500"
      )}
    >
      <div
        className={cn(
          innerClassName,
          innerContainerVariant({ sectionVariant }),
          "bg-red-400"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
