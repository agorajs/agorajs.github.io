import React, { useState, FormEvent, useEffect } from 'react';
import store from './store';
import './App.css';
import { Provider } from 'react-redux';

import toGraph, { gml } from 'agora-gml';
import { Graph } from 'agora-graph';

const App: React.FC = () => {
  const [file, setFile] = useState<File | undefined>();
  const [graph, setGraph] = useState();
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
          const jsonGraph = gml(text);
          console.log(jsonGraph);
          setGraph(toGraph(jsonGraph));
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
    <Provider store={store}>
      <div className="App">
        {error ? error : null}
        {!file ? (
          <input type="file" name="file" id="file" onChange={onFileSet} />
        ) : graph ? (
          display(graph)
        ) : null}
      </div>
    </Provider>
  );
};

function promisingFileReader(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result as string);
    fr.onerror = reject;
    fr.readAsText(file);
  });
}

function display(graph: Graph) {
  return <div>{JSON.stringify(graph)}</div>;
}

export default App;
