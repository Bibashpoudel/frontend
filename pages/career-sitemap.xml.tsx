import moment from "moment";

const EXTERNAL_DATA_URL = "https://pacecode.com.np/career/";

function generateSiteMap(posts: any) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${posts
         .map((items: any) => {
           return `
         <url>
             <loc>${`${EXTERNAL_DATA_URL}/${items.slug}`}</loc>
             <lastmod>${moment(items.updatedAt).format("YYYY-mm-hh")}</lastmod>
         </url>
       `;
         })
         .join("")}
     </urlset>
   `;
}

function BlogSiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_VALID_URL}/jobs/get-jobs/`
  );
  // console.log(request);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data

  const sitemap = generateSiteMap(posts.data);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default BlogSiteMap;
