import React from 'react';
import { Router, Link } from '@reach/router';
import Home from './Home';
import Result from './Result';
import { Flex } from '../layout';
import { LogoLink } from './LogoLink';

const Page: React.FC = function() {
  return (
    <div className="mw8 center mt4 tc">
      <header>
        <h1 className="lh-title tc">AGORA</h1>
        <Link to="result">resultpage</Link>
      </header>
      <Router>
        <Home path="/" />
        <Result path="/result" />
      </Router>
      <Flex parent="footer" className="justify-around pv3">
        <LogoLink
          link="https://www.lirmm.fr/"
          imageurl="lirmm.png"
          alt="LIRMM"
        />
        <LogoLink
          link="https://www.univ-montp3.fr/"
          imageurl="um3.png"
          alt="UM3"
        />
        <LogoLink
          link="https://www.umontpellier.fr/"
          imageurl="um.png"
          alt="UM"
        />
        <LogoLink link="https://www.cnrs.fr/" imageurl="cnrs.png" alt="CNRS" />
      </Flex>
    </div>
  );
};
export default Page;
