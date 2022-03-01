import React from "react"
import {SponsorSection, SponsorContainer, SponsorImg} from './styles';

import sponsor1 from '../../Assets//img/sponsor1.png';
import sponsor2 from '../../Assets//img/sponsor2.png';
import sponsor3 from '../../Assets//img/sponsor3.png';
import sponsor4 from '../../Assets//img/sponsor4.png';

const Sponsor: React.FC = () => {
  return (
    <SponsorSection>
      <SponsorContainer>
        <SponsorImg src={sponsor1} alt="apple"/>
        <SponsorImg src={sponsor2} alt="spotify"/>
        <SponsorImg src={sponsor3} alt="amazon"/>
        <SponsorImg src={sponsor4} alt="youtube"/>
      </SponsorContainer>
    </SponsorSection>
  );
};

export default Sponsor;