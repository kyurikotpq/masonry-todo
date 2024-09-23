import React from "react";

export default function List({ title, items }) {
  return (
    <div className="mb-4 break-inside-avoid-column">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {items.map((item) => (
        <ul className="mb-2 p-2">
          <li className="text-sm">
            <label htmlFor={item.id} className="flex items-center">
              <input
                className="mr-2"
                type="checkbox"
                name={`status-${item.id}`}
                id={item.id}
              />
              {item.title}
            </label>
          </li>
        </ul>
      ))}
    </div>
  );
}
