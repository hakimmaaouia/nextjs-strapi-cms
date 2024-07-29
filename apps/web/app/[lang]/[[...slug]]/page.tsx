import "@repo/tailwind-config/styles.css";

import { getPage } from "../../../builder/getPage";
import { Builder } from "../../../builder/BuilderRegister";

interface IParamsProps {
  slug: string[];
  lang: string;
}
interface PageProps {
  params: IParamsProps;
}

export default async function Page({
  params: { slug, lang },
}: PageProps): Promise<JSX.Element> {
  const data = await getPage({
    path: slug?.join("/") || "/",
    locale: lang,
  });

  if (!data.pages?.data[0]?.attributes?.layout[0]) {
    return <div>No layout found for this page.</div>;
  }

  const Components = Builder.render({
    content: data.pages?.data[0].attributes.layout,
  });

  return <main>{Components}</main>;
}
