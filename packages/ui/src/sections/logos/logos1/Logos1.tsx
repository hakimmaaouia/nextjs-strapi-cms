"use client";
import Typo, {
  editableProps as typoEditableProps,
} from "../../../components/typo";
import Image, {
  editableProps as imageEditableProps,
} from "../../../components/image";
import { FC } from "react";
import { motion } from "framer-motion";
import SectionLayout from "../../../layouts/sectionLayout";

export interface editableProps {
  text?: typoEditableProps;
  logos: imageEditableProps[];
  className?: string;
}

export interface Logo1Props extends editableProps {}

const Logos1: FC<Logo1Props> = ({ logos, text, className }) => {
  return (
    <SectionLayout innerClassName={className}>
      {text && (
        <div className="flex justify-center">
          <Typo
            as={text.as}
            size="h1"
            color="black"
            className="mb-16  max-w-4xl text-center lg:max-w-3xl"
            weight="semibold"
            highlightedIndex={text.highlightedIndex}
          >
            {text?.children}
          </Typo>
        </div>
      )}

      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / logos.length}%` }}
          >
            <Image
              className="mx-auto h-12 lg:h-12 "
              classNameInner="object-contain object-center"
              src={logo.src}
              alt={logo.alt}
            />
          </div>
        ))}
      </motion.div>
    </SectionLayout>
  );
};
export default Logos1;
