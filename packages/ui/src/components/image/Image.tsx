import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import ImageNext from "next/image";
import { FC } from "react";

type loadingType = "eager" | "lazy";
const imageVariants = cva("relative overflow-hidden", {
  variants: {
    radius: {
      none: "",
      medium: "rounded-lg",
    },
  },
  defaultVariants: {
    radius: "medium",
  },
});

export interface editableProps {
  alt: string;
  src: string;
}

interface IImageProps
  extends VariantProps<typeof imageVariants>,
    editableProps {
  width?: number;
  height?: number;
  fill?: boolean;
  loading?: loadingType;
  className?: string;
  classNameInner?: string;
}

const Image: FC<IImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  classNameInner,
  loading = "lazy",
  radius,
}) => {
  return (
    <div
      style={{
        width: fill || !width ? "100%" : `${width}px`,
        height: fill ? "100%" : `${height}px`,
      }}
      className={cn(imageVariants({ radius }), className)}
    >
      <ImageNext
        src={src}
        alt={alt}
        loading={loading}
        className={cn("object-cover object-center", classNameInner)}
        fill={true}
      />
    </div>
  );
};

export { imageVariants };
export default Image;
