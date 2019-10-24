import React from 'react';
import { Reference } from './Reference';
export const ReferenceList: React.FC<{
  className?: string;
}> = React.memo(function({ className }) {
  return (
    <section id="references" className={className}>
      <h3>References</h3>
      <div className="tl">
        <Reference
          id="PFS"
          number={17}
          title="Layout adjustment and the mental map."
          authors="K. Misue, P. Eades, W. Lai, and K. Sugiyama."
        >
          <i>Journal of Visual Languages &amp; Computing</i>, 6(2): 183–210,
          1995.
        </Reference>
        <Reference
          id="PFS'"
          number={9}
          title="A layout adjustment problem for disjoint rectangles preserving orthogonal order."
          authors="K. Hayashi, M. Inoue, T. Masuzawa, and H. Fujiwara."
        >
          In{' '}
          <i>
            Proceedings of the International Symposium on Graph Drawing (GD)
          </i>
          , pages 183–197. Springer, 1998
        </Reference>
        <Reference
          id="FTA"
          number={12}
          title="A new algorithm for removing node overlapping in graph visualization."
          authors="X. Huang, W. Lai, A. Sajeev, and J. Gao."
        >
          <i>Information Sciences</i>, 177(14): 2821–2844, 2007.
        </Reference>
        <Reference
          id="VPSC"
          number={4}
          title="Fast node overlap removal."
          authors="T. Dwyer, K. Marriott, and P. J. Stuckey."
        >
          In{' '}
          <i>
            Proceedings of the International Symposium on Graph Drawing (GD)
          </i>
          , pages 153–164. Springer, 2005.
        </Reference>
        <Reference
          id="PRISM"
          number={6}
          title="Efficient, proximity-preserving node overlap removal."
          authors="E. Gansner and Y. Hu."
        >
          <i>Journal of Graph Algorithms and Applications</i>, 14(1): 53–74,
          2010.
        </Reference>
        <Reference
          id="RWordle-L"
          number={19}
          title="Rolled-out wordles: A heuristic method for overlap removal of 2d data representatives."
          authors="H. Strobelt, M. Spicker, A. Stoffel, D. Keim, and O. Deussen."
        >
          <i>Computer Graphics Forum</i>, 31(3): 1135–1144, 2012.
        </Reference>
        <Reference
          id="GTREE"
          number={18}
          title="Node overlap removal by growing a tree"
          authors="L. Nachmanson, A. Nocaj, S. Bereg, L. Zhang, and A. Holroyd."
        >
          In{' '}
          <i>
            eedings of the International Symposium on Graph Drawing and Network
            Visualization (GD)
          </i>
          , pages 33–43. Springer, 2016
        </Reference>
        <Reference
          id="Diamond"
          number={16}
          title="Efficient optimal overlap removal."
          authors="W. Meulemans."
        >
          <i>Computer Graphics Forum</i>, 38(3): 713–723, 2019.
        </Reference>
      </div>
    </section>
  );
});
