import React from 'react';
import { Title } from '../Title/styles';
import {
  CaseContainer,
  CaseData,
  CaseDescription,
  CaseImg,
  CaseSection
} from './styles';

import caseImg from '../../Assets/img/case.png';
import { Button } from '../Button/styles';

const Case: React.FC = () => {
  return (
    <CaseSection id="case">
      <Title>Case</Title>
      <CaseContainer>
        <div>
          <CaseImg src={caseImg}/>
        </div>
        <CaseData>
          <CaseDescription>
            With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability forever.
          </CaseDescription>
          <Button href="">
            <i className="ri-information-line"/>
            More info
          </Button>
        </CaseData>
      </CaseContainer>
    </CaseSection>
  );
}

export default Case;