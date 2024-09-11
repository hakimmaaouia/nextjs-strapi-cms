import Typo, {
  editableProps as typoEditableProps,
} from "../../../components/typo";
import Image, {
  editableProps as imageEditableProps,
} from "../../../components/image";

import SectionLayout from "../../../layouts/sectionLayout";
import { cn } from "../../../lib/utils";
import { FC } from "react";

export interface ITestimonial1props {
  title: typoEditableProps;
  description: typoEditableProps;
  image: imageEditableProps;
  avatar: imageEditableProps;
  authorName: typoEditableProps;
  isReverse?: boolean;
  className?: string;
}

const Testimonial1: FC<ITestimonial1props> = ({
  title,
  description,
  image,
  avatar,
  authorName,
  isReverse = false,
  className,
}) => {
  return (
    <SectionLayout
      innerClassName={cn(
        "py-24 flex flex-wrap items-center justify-between",
        isReverse && "flex-row-reverse",
        className
      )}
    >
      <div className="flex  flex-col items-start mb-16 text-left md:w-1/2  md:mb-0">
        <Typo
          as={title.as}
          highlightedIndex={title.highlightedIndex}
          weight="bold"
          size="p2"
          className="mb-8 "
        >
          {title.children}
        </Typo>
        <Typo
          as={description.as}
          highlightedIndex={description.highlightedIndex}
          color="gray"
          size="span"
          className="mb-12 leading-relaxed"
        >
          {description.children}
        </Typo>
        <div className="inline-flex items-center w-full mb-4">
          <img
            alt={avatar.alt}
            src={avatar.src}
            className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full"
          />
          <Typo
            as={authorName.as}
            color="gray"
            size="p2"
            weight="semibold"
            className=" pl-3"
            highlightedIndex={authorName.highlightedIndex}
          >
            {authorName.children}
          </Typo>
        </div>
      </div>
      <Image
        alt={image.alt}
        fill
        src={image.src}
        className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 aspect-square"
      />
    </SectionLayout>
  );
};
export default Testimonial1;
