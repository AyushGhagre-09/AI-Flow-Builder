import { Handle, Position } from "@xyflow/react";
import Markdown from 'react-markdown'
export default function ResultNode({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-md border min-w-64 max-w-90 min-h-37">
      <div className="px-4 py-2 font-semibold border-b text-gray-700">
        AI Response
      </div>

      <div className="p-3 text-sm text-gray-800 min-h-[80px]">
        <Markdown>{data.value || "Response will appear here..."}</Markdown>
      </div>

      <Handle type="target" position={Position.Left} />
    </div>
  );
}
