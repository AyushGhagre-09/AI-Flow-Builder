import { useState } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import InputNode from "./components/InputNode";
import ResultNode from "./components/ResultNode";


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode,
};

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const nodes = [
    {
      id: "1",
      type: "inputNode",
      position: { x: 100, y: 200 },
      data: { value: prompt, onChange: setPrompt },
    },
    {
      id: "2",
      type: "resultNode",
      position: { x: 450, y: 200 },
      data: { value: response },
    },
  ];

  const edges = [{ id: "e1-2", source: "1", target: "2", animated: true }];

  const runFlow = async () => {
    try {
      if (!prompt) return toast.error("Missing required field: prompt.");
      setLoading(true);
      const res = await axios.post("/api/message/ask-ai", { prompt });
      setResponse(res.data.answer);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const saveFlow = async () => {
    try {
      if (!prompt || !response)
        return toast.error("Missing required field: prompt or response.");
      await axios.post("/api/message/save", {
        prompt,
        response,
      });
      toast.success("Saved successfully!");
      setPrompt("");
      setResponse("");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Toaster />
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-blue-600">AI Flow Builder</h1>
      </header>
      <div className="flex justify-center gap-5 mt-4">
        <button
          onClick={runFlow}
          className="px-5  py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {loading ? "Running..." : "Run Flow"}
        </button>

        <button
          onClick={saveFlow}
          className="px-5 py-2 ml-24 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
        >
          Save
        </button>
      </div>

      {/* Flow Canvas */}
      <div className="flex-1">
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} panOnScroll={true} fitView>
          <Background gap={16} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
