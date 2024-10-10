import {
  AboutScooter,
  AboutUs,
  Carousel,
  ContactUs,
  ProductList,
  SearchBar,
} from "../components/widgets";

const Home: React.FC = () => {
  return (
    <>
      <section id="hero">
        <Carousel />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="search">
        <SearchBar />
      </section>
      <section id="about-scooter">
        <AboutScooter />
      </section>
      <section id="catalog">
        <ProductList />
      </section>
      <ContactUs />
    </>
  );
};

export default Home;
