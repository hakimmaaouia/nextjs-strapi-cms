import Typo, {
  editableProps as typoEditableProps,
} from "../../../components/typo";
import Image, {
  editableProps as imageEditableProps,
} from "../../../components/image";
import Button, {
  editableProps as buttonEditableProps,
} from "../../../components/button";
import SectionLayout from "../../../layouts/sectionLayout";
import { FC } from "react";
import { cn } from "../../../lib/utils";

export interface IHero1Props {
  title: typoEditableProps;
  description: typoEditableProps;
  image: imageEditableProps;
  firstButton: buttonEditableProps;
  secondButton: buttonEditableProps;
  className?: string;
}

const Hero1: FC<IHero1Props> = ({
  title,
  description,
  image,
  firstButton,
  secondButton,
  className,
}) => {
  return (
    <SectionLayout
      innerClassName={cn(
        "flex flex-col items-center justify-center",
        className
      )}
    >
      <Typo
        as={title.as}
        size="h1"
        weight="semibold"
        className="mb-6 text-center"
        highlightedIndex={title.highlightedIndex}
      >
        {title.children}
      </Typo>
      <Typo
        as={description.as}
        highlightedIndex={description.highlightedIndex}
        size="span"
        color="gray"
        className="mb-8 max-w-xl text-center"
      >
        {description.children}
      </Typo>
      <div className="mb-8 flex space-x-4">
        <Button
          href={firstButton.href}
          target={firstButton.target}
          type={firstButton.type}
          disabled={firstButton.disabled}
        >
          {firstButton.children}
        </Button>
        <Button
          href={secondButton.href}
          target={secondButton.target}
          type={secondButton.type}
          disabled={secondButton.disabled}
          variant="outline"
        >
          {secondButton.children}
        </Button>
      </div>
      <Image height={400} alt={image.alt} src={image.src} />
    </SectionLayout>
  );
};

export default Hero1;
