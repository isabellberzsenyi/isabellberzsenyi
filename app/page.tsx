import HomePage from "@/components/home-page/HomePage";
import { getHome } from "@/lib/api";

export default async function Home() {
  const homeData = await getHome();

  return (
    <div style={{ textAlign: 'center'}}>
      <HomePage homePageData={homeData} />
    </div>
  );
}
