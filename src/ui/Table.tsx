

export default function Table(props: { columnHeader : string[]}) {
  return (
    <table className="w-full border border-red-600 rounded-lg mt-5">
      <thead>
        <tr className="bg-red-600 text-white">
          {props.columnHeader.map((col, index) => (
            <th
              className={`p-2 text-left ${
                col.toLowerCase() === "id" ? "w-36" : ""
              }`}
              key={index}
            >
              {col}
            </th>
          ))}
          <th className="p-2">Actions</th>
        </tr>
      </thead>
    </table>
  );
}
