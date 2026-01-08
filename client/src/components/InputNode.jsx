import { Handle, Position } from "@xyflow/react";

export default function InputNode({ data }) {
  return (
    <div className="bg-white rounded-xl  border w-64">
      <div className="px-4 py-2 font-semibold border-b text-gray-700">
        Input Prompt
      </div>

      <textarea
        className="w-full p-3 outline-none resize-none text-sm"
        rows={4}
        placeholder="Type your prompt here..."
        value={data.value}
        onChange={(e) => data.onChange(e.target.value)}
      />

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
