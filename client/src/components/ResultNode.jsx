import { Handle, Position } from "@xyflow/react";

export default function ResultNode({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-md border w-64 min-h-37">
      <div className="px-4 py-2 font-semibold border-b text-gray-700">
        AI Response
      </div>

      <div className="p-3 text-sm text-gray-800 min-h-[80px]">
        {data.value || "Response will appear here..."}
      </div>

      <Handle type="target" position={Position.Left} />
    </div>
  );
}
