import React, { useState, useEffect, FormEvent } from 'react';
import './App.css';

import directaccess from './directaccess';
import InitialView from './components/InitialView';
import { parseGML, toGraph } from 'agora-gml';
import { crop } from 'agora-graph';
import { AlgorithmListView } from './components/AlgorithmListView';

const App: React.FC = () => {
  const [file, setFile] = useState<File | undefined>();
  const [graph, setGraph] = useState();
  const [fileContent, setFileContent] = useState();
  const [error, setError] = useState();

  const onFileSet = (e: FormEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
    // convert from gml to json
  };

  useEffect(() => {
    // file effect
    if (file !== undefined) {
      (async () => {
        try {
          setError(null);
          const text: string = await promisingFileReader(file);
          const jsonGraph = parseGML(text);
          console.log(jsonGraph);
          setGraph(crop(toGraph(jsonGraph)));
          setFileContent(text);
        } catch (error) {
          setError(error.message || error);
          console.log(error);
          setFile(undefined);
        }
      })();
    }
  }, [file]);

  useEffect(() => {
    // graph effect
    console.log(graph);
  }, [graph]);

  return (
    // <Provider store={store}>
    <div className="App ma1">
      {error ? error : null}
      {!file ? (
        <input type="file" name="file" id="file" onChange={onFileSet} />
      ) : graph ? (
        <div className="flex flex-wrap">
          <InitialView
            title="Initial Graph"
            graph={graph}
            gml={fileContent}
            height={300}
            over={true}
            className="w-25"
          />
          <AlgorithmListView initial={graph} over={true} />
        </div>
      ) : null}
    </div>
    // </Provider>
  );
};

//eslint-disable-next-line
function promisingFileReader(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result as string);
    fr.onerror = reject;
    fr.readAsText(file);
  });
}

const bypassApp: React.FC = function() {
  const graph = crop(toGraph(parseGML(directaccess)));

  return (
    <div className="flex flex-wrap">
      <InitialView
        title="Initial Graph"
        graph={graph}
        gml={directaccess}
        height={300}
        over={true}
        className="w-25"
      />
      <AlgorithmListView initial={graph} over={true} />
    </div>
  );
};

export default App;
