import React from 'react';
import { NesContainer } from '../../../layout';

export const Authors: React.FC<{ className?: string }> = ({ className }) => (
  <section id="authors" className={className}>
    <NesContainer rounded>
      <p>
        <a href="https://github.com/agorajs">Agorajs library</a>
      </p>
      <p>
        Node overlap removal algorithms: an extended comparative study.
        <br />
        <span className="code">
          F. Chen &lt;fati.chen@lirmm.fr&gt;, L. Piccinini,
          <br /> P. Poncelet, A. Sallaberry.
          <br />
          <a
            href="http://jgaa.info/accepted/recent/532.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Journal of Graph Algorithms and Applications, to appear, 2020.
          </a>
        </span>
      </p>
    </NesContainer>
  </section>
);
export default Authors;

export const AuthorsMemo: React.FC<{ className?: string }> = React.memo(
  Authors
);
