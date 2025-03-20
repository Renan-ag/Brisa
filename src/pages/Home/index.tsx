// Components
import Footer from "components/Footer";
import Header from "components/Header";
import Card from './Card';
import Hero from './Hero';
import Main from "./Main";
// API
import api from 'services/api';
// Hooks
import { useState, useEffect } from "react";
// Styles
import './home.css';
import IPost from "types/post.type";

const Home = () => {
  const [main, setMain] = useState<Array<IPost>>([]);
  const [mostViewed, setMostViewed] = useState<Array<IPost>>([]);

  useEffect(() => {
    // Get Top 3 most viewed posts
    api.get('posts?_limit=3&_sort=-views')
      .then((res) => {
        const data = res.data as Array<IPost>;
        setMostViewed(data);
      })
      .catch((err) => { console.log(err) });

    // Get Top 3 most recent posts
    api.get('posts?_limit=3&_sort=-date')
      .then((res) => {
        const data = res.data as Array<IPost>;
        setMain(data);
      })
      .catch((err) => { console.log(err) });
  }, [])

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
            {
              main.map((item) => (
                <Main key={item.id} content={item} />
              ))
            }
          </div>
        </div>
      </section>

      <section className="container flex-column position-relative">
        <div className="w-100">
          <h3 className="fw-normal">Posts mais acessados!</h3>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem facilis et atque soluta deserunt assumenda hic
            fuga.
          </p>
        </div>

        <div className="row mt-24">
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