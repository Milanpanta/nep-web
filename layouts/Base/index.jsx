import { SEOMeta } from "@components/utils/SEO";

export const BaseLayout = ({
  children,
  selectedNavKey,
  title,
  description,
  iconHref,
  canonical,
}) => (
  <>
    <SEOMeta
      title={title}
      canonical={canonical}
      description={description}
      iconHref={iconHref}
    />
    {/* <Header selectedNavKey={selectedNavKey} /> */}
    <main selectedNavKey={selectedNavKey}>{children}</main>
    {/* <footer></footer> */}
  </>
);
