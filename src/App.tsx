import React from 'react';
import './App.css';

import toGraph, { gml } from 'agora-gml';
import SVGGraph from './components/SVGGraph';
import directaccess from './directaccess';
import { crop } from 'agora-graph';

/* const App: React.FC = () => {
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
    // <Provider store={store}>
    <div className="App">
      {error ? error : null}
      {!file ? (
        <input type="file" name="file" id="file" onChange={onFileSet} />
      ) : graph ? (
        <SVGGraph graph={graph} />
      ) : null}
    </div>
    // </Provider>
  );
}; */

function promisingFileReader(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result as string);
    fr.onerror = reject;
    fr.readAsText(file);
  });
}

const bypassApp: React.FC = function() {
  return (
    <SVGGraph
      graph={crop(toGraph(gml(directaccess)))}
      width={500}
      height={500}
    ></SVGGraph>
  );
};

export default bypassApp;
