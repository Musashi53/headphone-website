import { HomeContainer, HomeData, HomeFooter, HomeHeader, HomeImg, HomeSection } from "./styles";
import home_img from '../../Assets/img/home.png';

const Home = () => {
  return (
    <HomeSection>
      <HomeContainer>
        <div>
          <HomeImg src={home_img}/>
        </div>

        <HomeData>
          <HomeHeader>
            <h1>On ear</h1>
            <h2>Beats 3</h2>
          </HomeHeader>

          <HomeFooter>
            <h3>Overview</h3>
            <p>
            Enjoy award-winning Beats sound with wireless listening freedom and a sleek, streamlined design with comfortable padded earphones, delivering first-rate playback.
            </p>

            <a href="#" className="button button--flex">
              <span className="button--flex">
                <i className="ri-shopping-bag-line button__icon"></i>
                Add to Bag
              </span>
              <span className="home__price">$299</span>
            </a>
          </HomeFooter>
        </HomeData>
      </HomeContainer>
    </HomeSection>
  )
}

export default Home;