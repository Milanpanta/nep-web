import { BaseLayout } from "@layouts/Base";
import { HomePage } from "../components/HomePage";
import { pageRoutes } from "@lib/routes";

export default function Home() {
  return (
    <BaseLayout
      title="Neptune Mutual"
      selectedNavKey=""
      description="Neptune Mutual"
      canonical={pageRoutes.home}
    >
      <HomePage />
    </BaseLayout>
  );
}
