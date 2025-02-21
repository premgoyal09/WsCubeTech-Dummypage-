import Header from "./component/Header";
import Banner from "./component/banner";
import Experts from "./component/experts";
import NewsLetter from "./component/NewsLetter";
import Plans from "./component/Plans";
import Footer from "./component/footer";


export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Experts />
      <NewsLetter />
      <Plans/>
      <Footer/>     
    </div>
  );
}
