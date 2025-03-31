// Components
import Card from "./Card";
import Hero from "./Hero";
import Main from "./Main";
import LoadingScreen from "components/LoadingScreen";
// API
import api from "services/api";
// Hooks
import { useState, useEffect } from "react";
// Styles
import "./home.css";
import IPost from "types/post.type";
import { useNavigate } from "react-router-dom";

const POST_LIMIT = 3;
const LETTER_SPACING = ["N", "O", "V", "I", "D", "A", "D", "E", "S"];

const Home = () => {
  const navigate = useNavigate();
  const [mainPosts, setMainPosts] = useState<IPost[]>([]);
  const [popularPosts, setPopularPosts] = useState<IPost[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(sessionStorage.getItem("hasLoaded") == 'true');    

    const fetchPosts = async () => {
      try {
        const [popularRes, recentRes] = await Promise.all([
          api.get(`posts?_limit=${POST_LIMIT}&_sort=-views`),
          api.get(`posts?_limit=${POST_LIMIT}&_sort=-date`),
        ]);

        setPopularPosts(popularRes.data as IPost[]);
        setMainPosts(recentRes.data as IPost[]);
        sessionStorage.setItem("hasLoaded", "true");
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        navigate("/erro-servidor");
      }
    };

    fetchPosts();
  }, [navigate]);

  return (
    <>
      {!hasLoaded && <LoadingScreen />}
      <Hero />

      <section className="container">
        <div className="news-section g-40">
          <div className="px-64">
            <h2 className="flex-start flex-column g-32 pt-64">
              {LETTER_SPACING.map((letter, index) => (
                <span key={index} className={index === 3 ? "pl-8" : ""}>
                  {letter}
                </span>
              ))}
            </h2>
          </div>
          <div>
            {mainPosts.map((post, index) => (
              <Main
                key={post.id}
                border={index !== mainPosts.length - 1}
                content={post}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container flex-column position-relative">
        <div className="w-100 px-16">
          <h3 className="fw-normal">Posts mais acessados!</h3>
          <p className="mt-8">
            Confira os artigos mais populares entre nossos leitores. Destaques
            que conquistaram a atenção da comunidade.
          </p>
        </div>

        <div className="row mt-16">
          {popularPosts.map((post) => (
            <Card key={post.id} content={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
