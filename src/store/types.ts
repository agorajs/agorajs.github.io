export type SelectionType = {
  [k: string]: boolean;
};

export type FileType = {
  id: string;
  name: string;
  data: string;
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
  reference?: string[];
};

export type CriterionType = {
  id: string;
  name: string;
  group: string;
  fullname?: string;
  path: string;
  reference?: string[];
};

export type SelectableFileType = {
  selected: boolean;
  file: string;
};

export type ExampleFileType = {
  id: string;
  name: string;
  data: string;
};
