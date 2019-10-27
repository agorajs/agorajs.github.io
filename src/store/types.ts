export type SelectionType = {
  [k: string]: boolean;
};

export type FileType = {
  id: string;
  data: File;
};

export type ReferenceType = {
  id: string;
  authors: string;
  title: string;
  hasIn: boolean;
  journal: string;
  additional?: string;
};

export type AlgorithmType = {
  id: string;
  name: string;
  reference?: string;
};
