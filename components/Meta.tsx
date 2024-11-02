import Head from "next/head";

//サイトに関する情報
import { siteMeta } from "lib/constants";
const { siteTitle, siteDesc, siteUrl, siteLang, siteType, siteIcon } = siteMeta;

type MetaProps = {
  pageTitle: string;
};

export default function Meta({ pageTitle }: MetaProps) {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
    </Head>
  );
}
