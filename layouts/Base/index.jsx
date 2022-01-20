import { Header } from "@components/utils/Header";

export const BaseLayout = ({ children, selectedNavKey }) => (
  <div className="relative">
    <Header selectedNavKey={selectedNavKey} />
    <main>{children}</main>
    {/* <footer></footer> */}
  </div>
);
