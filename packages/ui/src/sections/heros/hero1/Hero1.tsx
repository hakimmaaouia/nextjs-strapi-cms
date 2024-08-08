import Button from "../../../components/button";
import Typo from "../../../components/typo";
import Image from "../../../components/image";

const Hero1 = () => {
  return (
    <section>
      <section className="py-32">
        <div className="container">
          <div className="flex flex-col items-center justify-center bg-white">
            <Typo
              as="h1"
              size="h1"
              weight="semibold"
              className="mb-6 text-center"
            >
              Medium length display headline
            </Typo>
            <Typo
              as="p"
              size="span"
              color="gray"
              className="mb-8 max-w-xl text-center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </Typo>
            <div className="mb-8 flex space-x-4">
              <Button>Primary Button </Button>
              <Button variant="outline">Secondary Button</Button>
            </div>
            <Image
              height={400}
              alt="dxgdxg"
              src="https://picsum.photos/1000/1000"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero1;
