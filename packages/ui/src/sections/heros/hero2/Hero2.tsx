import Typo from "../../../components/typo";
import Image from "../../../components/image";
import Button from "../../../components/button";
import SectionLayout from "../../../layouts/sectionLayout";
const Hero2 = () => {
  return (
    <SectionLayout className="py-24">
      <Image src="https://picsum.photos/1200/1200" alt="" height={500} />
      <div className="grid grid-cols-2 gap-12 pt-12">
        <div>
          <Typo
            as="h1"
            size="h2"
            weight="semibold"
            className="mb-8 flex max-w-6xl  text-gray-800"
          >
            Transform your business with our landing page blocks
          </Typo>
        </div>
        <div>
          <Typo as="p" size="p" color="gray" className="mb-8 flex max-w-6xl  ">
            Wicked Blocks offers a wide array of both free and premium
            components specifically designed for Tailwind CSS. Our extensive
            collection features meticulously crafted Tailwind blocks that cater
            to various design needs and preferences.
          </Typo>
          <div className="mt-8 flex justify-start gap-4">
            <Button size="lg">Get Bundle</Button>
            <Button size="lg" variant="outline">
              See Features
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
            </Button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Hero2;
