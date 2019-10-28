import { CriterionType } from '../types';

export const defaultCriteria: CriterionType[] = [
  {
    id: 'oo_o',
    name: 'Original',
    group: 'Orthogonal Ordering',
    path: 'OrthogonalOrdering.Original',
    reference: ['misue1995']
  },
  {
    id: 'oo_ktd',
    name: "Kendall's Tau Distance",
    path: 'OrthogonalOrdering.KendallTauDistance',
    group: 'Orthogonal Ordering',
    reference: ['huang2007']
  },
  {
    id: 'oo_ni',
    name: 'Number of Inversions',
    group: 'Orthogonal Ordering',
    path: 'OrthogonalOrdering.NumberInversions',
    reference: ['strobelt2012']
  },
  {
    id: 'oo_nni',
    name: 'Normalised Number of Inversions',
    group: 'Orthogonal Ordering',
    path: 'OrthogonalOrdering.NormalizedNumberInversions',
    reference: ['chen2019']
  },
  {
    id: 'sp_bb_l1ml',
    name: 'L1 Length',
    group: 'Spread Minimisation',
    fullname: 'Spread Minimisation/Bounding Box/L1 Metric Length',
    path: 'Spread.BoundingBox.L1MetricLength',
    reference: ['li2005']
  },
  {
    id: 'sp_bb_a',
    name: 'Bounding Box Area',
    group: 'Spread Minimisation',
    path: 'Spread.BoundingBox.Area',
    reference: ['misue1995']
  },
  {
    id: 'sp_bb_na',
    name: 'Bounding Box Normalized Area',
    group: 'Spread Minimisation',
    path: 'Spread.BoundingBox.NormalizedArea',
    reference: ['huang2007']
  },
  {
    id: 'sp_ch_a',
    name: 'Convex Hull Area',
    group: 'Spread Minimisation',
    path: 'Spread.ConvexHull.Area',
    reference: ['strobelt2012']
  },
  {
    id: 'gs_bb_ar',
    name: 'Aspect Ratio',
    group: 'Global Shape Preservation',
    fullname: 'Global Shape Preservation/Bounding Box/Aspect Ratio',
    path: 'GlobalShape.BoundingBox.AspectRatio',
    reference: ['li2005']
  },
  {
    id: 'gs_bb_iar',
    name: 'Improved Aspect Ratio',
    fullname: 'Global Shape Preservation/Bounding Box/Improved Aspect Ratio',
    group: 'Global Shape Preservation',
    path: 'GlobalShape.BoundingBox.ImprovedAspectRatio',
    reference: ['chen2019']
  },
  {
    id: 'gs_ch_sd',
    name: 'Standard Deviation',
    fullname: 'Global Shape Preservation/Convex Hull/Standard Deviation',
    group: 'Global Shape Preservation',
    path: 'GlobalShape.ConvexHull.StandardDeviation',
    reference: ['strobelt2012']
  },
  {
    id: 'nm_mn',
    name: 'Moved Nodes',
    group: 'Node Movement Minimisation',
    path: 'NodeMovement.MovedNodes',
    reference: ['huang2007']
  },
  {
    id: 'nm_dm_me',
    name: 'Mean Euclidean',
    fullname: 'Node Movement Minimisation/Distance Moved/Mean Euclidean',
    group: 'Node Movement Minimisation',
    path: 'NodeMovement.DistanceMoved.MeanEuclidean',
    reference: ['strobelt2012']
  },
  {
    id: 'nm_dm_ne',
    name: 'Normalised Euclidean',
    fullname: 'Node Movement Minimisation/Distance Moved/Normalised Euclidean',
    group: 'Node Movement Minimisation',
    path: 'NodeMovement.DistanceMoved.NormalizedEuclidean',
    reference: ['lyons1998']
  },
  {
    id: 'nm_dm_h',
    name: 'Hamiltonian',
    fullname: 'Node Movement Minimisation/Distance Moved/Hamiltonian',
    group: 'Node Movement Minimisation',
    path: 'NodeMovement.DistanceMoved.Hamiltonian',
    reference: ['huang2003', 'huang2007']
  },
  {
    id: 'nm_dm_se',
    name: 'Squared Euclidean',
    fullname: 'Node Movement Minimisation/Distance Moved/Squared Euclidean',
    group: 'Node Movement Minimisation',
    path: 'NodeMovement.DistanceMoved.SquaredEuclidean',
    reference: ['marriot2003']
  },
  {
    id: 'nm_dm_imse',
    name: 'Improved Mean Squared Euclidean',
    fullname:
      'Node Movement Minimisation/Distance Moved/Improved Mean Squared Euclidean',
    group: 'Node Movement Minimisation',
    path: 'NodeMovement.DistanceMoved.ImprovedMeanSquaredEuclidean',
    reference: ['chen2019']
  },
  {
    id: 'nm_knn',
    name: 'K-Nearest Neighbours',
    group: 'Node Movement Minimisation',
    path: 'NodeMovement.KNearestNeighbors.default',
    reference: ['nachmanson2016']
  },
  {
    id: 'eb_r',
    name: 'Ratio',
    group: 'Edge Length Preservation',
    path: 'EdgeBased.Ratio',
    reference: ['li2005']
  },
  {
    id: 'e_rsdd',
    name: 'Relative Standard Deviation Delaunay',
    group: 'Edge Length Preservation',
    path: 'EdgeBased.RelativeStandardDeviationDelaunay',
    reference: ['gansner2010']
  }
];

export const defaultCriteriaSelection = {
  oo_o: false,
  oo_ktd: false,
  oo_ni: false,
  oo_nni: true,
  sp_bb_l1ml: false,
  sp_bb_a: false,
  sp_bb_na: false,
  sp_ch_a: true,
  gs_bb_ar: false,
  gs_bb_iar: true,
  gs_ch_sd: false,
  nm_mn: false,
  nm_dm_me: false,
  nm_dm_ne: false,
  nm_dm_h: false,
  nm_dm_se: false,
  nm_dm_imse: true,
  nm_knn: false,
  eb_r: false,
  e_rsdd: true
};
