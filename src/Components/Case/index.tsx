import React from 'react';
import { Title } from '../Title/styles';
import { CaseContainer, CaseData, CaseDescription, CaseImg } from './styles';
import caseImg from '../../Assets/img/case.png';

const Case = () => {
  return (
    <section>
      <Title>Case</Title>
      <CaseContainer>
        <div>
        <CaseImg src={caseImg}/>
        </div>
        <CaseData>
          <CaseDescription>
            With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability forever.
          </CaseDescription>
          <a href="">
            <i className="ri-information-line"/>
            More info
          </a>
        </CaseData>
      </CaseContainer>
    </section>
  );
}

export default Case;