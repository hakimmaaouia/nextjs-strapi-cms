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

export interface IHero2Props {
  title: typoEditableProps;
  description: typoEditableProps;
  image: imageEditableProps;
  firstButton: buttonEditableProps;
  secondButton: buttonEditableProps;
  className?: string;
}

const Hero2: FC<IHero2Props> = ({
  title,
  description,
  image,
  firstButton,
  secondButton,
  className,
}) => {
  return (
    <SectionLayout innerClassName={cn("py-24", className)}>
      <Image src={image.src} alt={image.alt} height={500} />
      <div className="grid grid-cols-2 gap-12 pt-12">
        <div>
          <Typo
            as={title.as}
            size="h2"
            weight="semibold"
            className="mb-8  max-w-6xl  text-gray-800"
            highlightedIndex={title.highlightedIndex}
          >
            {title.children}
          </Typo>
        </div>
        <div>
          <Typo
            as={description.as}
            size="p"
            color="gray"
            highlightedIndex={description.highlightedIndex}
            className="mb-8  max-w-6xl  "
          >
            {description.children}
          </Typo>
          <div className="mt-8 flex justify-start gap-4">
            <Button size="lg" {...firstButton}>
              {firstButton.children}
            </Button>
            <Button size="lg" variant="outline" {...secondButton}>
              <div className="flex gap-4">
                {secondButton.children}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="ml-1 size-6"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-4 4l4-4m-4-4l4 4"
                  ></path>
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Hero2;
