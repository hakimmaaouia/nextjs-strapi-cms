import Typo, {
  editableProps as typoEditableProps,
} from "../../../components/typo";
import Button, {
  editableProps as buttonEditableProps,
} from "../../../components/button";
import Icon, {
  editableProps as iconEditableProps,
} from "../../../components/icon";
import SectionLayout from "../../../layouts/sectionLayout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/card/Card";
import { FC } from "react";
import { cn } from "../../../lib/utils";

interface IFeature {
  icon: iconEditableProps;
  title: string;
  description: string;
  button: buttonEditableProps;
}

export interface IFeatures1Props {
  features: IFeature[];
  title: typoEditableProps;
  className?: string;
}

const Features1: FC<IFeatures1Props> = ({ features, title, className }) => {
  return (
    <SectionLayout innerClassName={cn(className, "text-center")}>
      <div className="mb-12">
        <Typo
          as={title.as}
          highlightedIndex={title.highlightedIndex}
          size="h2"
          weight="bold"
        >
          {title.children}
        </Typo>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                <Icon {...feature.icon} className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>
                <Typo
                  size="h4"
                  as={"span"}
                  weight="semibold"
                  className="text-center"
                >
                  {feature.title}
                </Typo>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Typo size={"span"} as={"span"} className="line-clamp-3">
                {feature.description}
              </Typo>
            </CardContent>
            <CardFooter className="flex justify-end">
              {feature.button.children && (
                <Button
                  href={feature.button.href}
                  disabled={feature.button.disabled}
                  variant="outline"
                >
                  {feature.button.children}
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Features1;
