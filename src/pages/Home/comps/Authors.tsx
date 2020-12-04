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
            href="http://jgaa.info/accepted/2020/532.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Journal of Graph Algorithms and Applications,
            <br /> Vol. 24, no. 4, pp. 683-706, 2020. Regular paper.
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
