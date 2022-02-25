import {
  HomeContainer,
  HomeData,
  HomeFooter,
  HomeHeader,
  HomeImg,
  HomeSection,
  HomeTitle,
  HomeSubtitle,
  HomeTitleDescription,
  HomeDescription
} from "./styles";

import {HomeButton} from './Home Button/styles';

import homeImage from '../../Assets/img/home.png';

const Home = () => {
  return (
    <HomeSection>
      <HomeContainer>
        <div>
          <HomeImg src={homeImage}/>
        </div>
        <HomeData>
          <HomeHeader>
            <HomeTitle>On ear</HomeTitle>
            <HomeSubtitle>Beats 3</HomeSubtitle>
          </HomeHeader>
          <HomeFooter>
            <HomeTitleDescription>Overview</HomeTitleDescription>
            <HomeDescription>
              Enjoy award-winning Beats sound with wireless listening freedom and a sleek, streamlined design with comfortable padded earphones, delivering first-rate playback.
            </HomeDescription>
            <HomeButton className="button button--flex">
              <i className="ri-shopping-bag-line"/>
              Add to Bag
              <span>$299</span>
            </HomeButton>
          </HomeFooter>
        </HomeData>
      </HomeContainer>
    </HomeSection>
  )
}

export default Home;