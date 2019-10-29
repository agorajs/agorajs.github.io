import React from 'react';
import { NesContainer } from '../../../layout';

export const Authors: React.FC<{ className?: string }> = ({ className }) => (
  <section id="authors" className={className}>
    <NesContainer rounded>
      <p>
        Automatic Graph Overlap Removal Algorithms
        <br />
        <span className="code">
          Fati Chen &lt;fati.chen@lirmm.fr&gt;, Laurent Piccinini,
          <br /> Pascal Poncelet, Arnaud Sallaberry.
          <br />
          <a
            href="https://arxiv.org/abs/1908.07363"
            target="_blank"
            rel="noopener noreferrer"
          >
            Article from the proceedings of GD 2019 available on ArXiv [arXiv:
            1908.07363]
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
