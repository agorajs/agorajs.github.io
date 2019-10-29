import React from 'react';
import { Router, Link } from '@reach/router';
import Home from './Home';
import Result from './Result';
import { Flex } from '../layout';
import LogoLink from './LogoLink';

const Page: React.FC = function() {
  return (
    <div className="mt4 tc">
      <Title />
      <Router>
        <Home path="/" />
        <Result path="/result" />
      </Router>
      <Footer className="justify-around pv3 mw8 center" />
    </div>
  );
};
export default Page;

const Title: React.FC = () => (
  <header>
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h1 className="lh-title tc">AGORA</h1>
    </Link>
  </header>
);

const Footer: React.FC<{ className: string }> = function({ className }) {
  return (
    <Flex parent="footer" className={className}>
      <LogoLink link="https://www.lirmm.fr/" imageurl="lirmm.png" alt="LIRMM" />
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
  );
};
