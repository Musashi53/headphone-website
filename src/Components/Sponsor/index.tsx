import React from "react"

import sponsor1 from '../../Assets//img/sponsor1.png';
import sponsor2 from '../../Assets//img/sponsor2.png';
import sponsor3 from '../../Assets//img/sponsor3.png';
import sponsor4 from '../../Assets//img/sponsor4.png';

const Sponsor = () => {
  return (
    <section>
      <div className="sponsor__container container grid">
        <img src={sponsor1} alt="" className="sponsor__img"/>
        <img src={sponsor2} alt="" className="sponsor__img"/>
        <img src={sponsor3} alt="" className="sponsor__img"/>
        <img src={sponsor4} alt="" className="sponsor__img"/>
      </div>
    </section>
  );
};

export default Sponsor;