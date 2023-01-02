import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/jobs/get-jobs`
  );
  const jobs: any = await response.json();

  const fields: ISitemapField[] = jobs?.data?.map((a: any) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/career/${a.slug}`,
    lastmod: new Date().toISOString(),
  }));
  console.log(fields);

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
