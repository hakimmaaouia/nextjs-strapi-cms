import { getLayout } from "../../builder/getLayout";
import { footerAdaptor, navAdaptor, GlobalLayout } from "@repo/ui";

interface IParamsProps {
  lang: string;
}
interface PageProps {
  params: IParamsProps;
  children: React.ReactNode;
}

export default async function Layout({
  children,
  params: { lang },
}: PageProps): Promise<JSX.Element> {
  const data = await getLayout({ lang });

  return (
    <GlobalLayout
      nav={navAdaptor(data.header.data.attributes)}
      footer={footerAdaptor(data.footer.data.attributes)}
    >
      {children}
    </GlobalLayout>
  );
}
