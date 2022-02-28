import {
  SpecsContainer,
  SpecsContent,
  SpecsSection,
  SpecsData,
  SpecsImg,
} from './styles';

import { Title } from "../Title/styles";
import specsImg from '../../Assets/img/specs.png';

const Specs: React.FC = () => {
  return (
    <SpecsSection id="specs">
      <Title>Specs</Title>

      <SpecsContainer className="specs__container container grid">
        <SpecsContent className="specs__content grid">
          <SpecsData>
            <i className="ri-bluetooth-line specs__icon"></i>
            <h3 className="specs__title">Connection</h3>
            <span className="specs__subtitle">Bluetooth v5.2</span>
          </SpecsData>
    
          <SpecsData>
            <i className="ri-battery-charge-line specs__icon"></i>
            <h3 className="specs__title">Battery</h3>
            <span className="specs__subtitle">Duration 40h</span>
          </SpecsData>
    
          <SpecsData>
            <i className="ri-plug-line specs__icon"></i>
            <h3 className="specs__title">Load</h3>
            <span className="specs__subtitle">Fast charge 4.2-AAC</span>
          </SpecsData>
    
          <SpecsData>
            <i className="ri-mic-line specs__icon"></i>
            <h3 className="specs__title">Microphone</h3>
            <span className="specs__subtitle">Supports Apple Siri <br/> and Google</span>
          </SpecsData>
        </SpecsContent>
                    
        <div>
          <SpecsImg src={specsImg} alt=""/>
        </div>
      </SpecsContainer>
    </SpecsSection>
  );
};

export default Specs;