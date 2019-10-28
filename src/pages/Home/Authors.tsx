import React from 'react';
import { NesContainer } from '../../layout';

export const Authors: React.FC<{ className?: string }> = ({ className }) => (
  <section id="authors" className={className}>
    <NesContainer rounded>
      <p>
        Automatic Graph Overlap Removal Algorithms
        <br />
        <span className="code">
          Fati Chen, Laurent Piccinini, Pascal Poncelet, Arnaud Sallaberry.
        </span>
        <br />
        <a
          href="https://arxiv.org/abs/1908.07363"
          target="_blank"
          rel="noopener noreferrer"
        >
          [arXiv: 1908.07363]
        </a>
      </p>
    </NesContainer>
  </section>
);
export default Authors;

export const AuthorsMemo: React.FC<{ className?: string }> = React.memo(
  Authors
);
