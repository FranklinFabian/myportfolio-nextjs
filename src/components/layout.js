import Header from "./header";
import Footer from "./Footer";
import IntroHeader from "./introheader";
import RecentPosts from "./recentPosts";

export default function LayoutCustom({ children }) {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
  