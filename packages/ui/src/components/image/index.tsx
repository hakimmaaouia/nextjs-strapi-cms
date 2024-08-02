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
interface IImageProps extends VariantProps<typeof imageVariants> {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  fill?: boolean;
  loading?: loadingType;
  className?: string;
}
const Image: FC<IImageProps> = ({
  alt,
  src,
  width,
  height,
  fill = false,
  className,
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
        className="object-cover object-center"
        fill={true}
      />
    </div>
  );
};

export { Image, imageVariants };
