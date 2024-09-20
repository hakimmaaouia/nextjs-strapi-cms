import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface editableProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}
export interface IIconProps extends editableProps {}
const Icon = ({ name, ...props }: IIconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
};

export default Icon;
