import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

export default function blogDetails() {
  const description =
    "Facilitates business in developing software. We specialized in custom software, web and mobile applications, cyber security,  and cloud engineering.";
  const title = "Exceeding, Expectations in Software Development | Pace Code";
  const type = "website";
  const owner = "Pace Code";
  const url = "https://www.pacecode.com.np/career";
  return (
    <Layout
      title={"Join our team to create top-notch products | Pace Code"}
      description={
        "Do you have a strong desire to produce influential digital products? Join a great team of top engineers and innovative thinkers to create top-notch products."
      }
      shortDesc={{
        title: "Where we exchange the culture and talent",
        desc: "With the great knowledge and experience, want to share the environment and culture then go ahead and drop your CV",
      }}
    >
      <Helmet>
        <div itemScope itemType="https://schema.org/Organization">
          <a itemProp="url" href="https://www.pacecode.com.np/blog">
            Blog
          </a>
          <img
            itemProp="logo"
            src="https://pacecode.com.np/image/assets/logo.png"
          />
        </div>
        ‍<title> {title}</title>
        <meta name="title" content={title}></meta>
        <meta name="description" content={description} />
        {/* for facebook */}
        <meta name="title" property="og:title" content={title}></meta>
        <meta
          name="description"
          property="og:description"
          content={description}
        />
        <meta name="url" property="og:url" content={url} />
        <meta name="type" property="og:type" content={type} />
        <meta property="og:image" content="url_to_image" />
        <meta property="og:site_name" content="Pace Code" />
        <meta property="og:locale" content="en_US" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        {/* for twiter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={owner} />
        <meta name="twitter:creator" content={owner} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="url_to_image" />
      </Helmet>
      <div></div>
    </Layout>
  );
}
