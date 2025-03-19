import Footer from "components/Footer";
import Header from "components/Header";

// Components
import Card from './Card';
import Hero from './Hero';
import Main from "./Main";

import './home.css';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />

      <section className="container">
        <div className="news-section g-40">
          <div className="px-64">
            <h2 className="flex-start flex-column g-32 pt-64">
              <span>N</span>
              <span>O</span>
              <span>V</span>
              <span className="pl-8">I</span>
              <span>D</span>
              <span>A</span>
              <span>D</span>
              <span>E</span>
              <span>S</span>
            </h2>
          </div>
          <div>
            <Main />
            <Main />
            <Main />
          </div>
        </div>
      </section>

      <section className="container flex-column position-relative">
        <div className="w-100">
          <h2 className="fw-normal">Posts mais acessados!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem facilis et atque soluta deserunt assumenda hic
            fuga.</p>
        </div>

        <div className="row mt-16">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home;