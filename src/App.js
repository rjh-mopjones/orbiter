import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import Navbar from "./components/Navbar";

const nodes = [
  {
    id: '1', // Node ID
    position: { x: 100, y: 100 }, // Node's position on canvas
    data: { label: 'Service A' }, // Node data
  },
  {
    id: '2',
    position: { x: 400, y: 100 },
    data: { label: 'Service B' },
  },
  {
    id: '3',
    position: { x: 250, y: 300 },
    data: { label: 'Service C' },
  },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', label: 'Request A → B' }, // Edge from "1" to "2"
  { id: 'e2-3', source: '2', target: '3', label: 'Request B → C' }, // Edge from "2" to "3"
];

function App() {
  return (
      <div style={{ height: '100vh' }}>
        <Navbar />
        <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
  );
}

export default App;
