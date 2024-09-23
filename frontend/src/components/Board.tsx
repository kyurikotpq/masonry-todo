import React from "react";
import List from "./List.tsx";

export default function Board() {
  const LISTS = [
    {
      title: "To Do",
      items: [
        {
          id: 1,
          title: "Task 1",
        },
        {
          id: 2,
          title: "Task 2",
        },
      ],
    },
    {
      title: "In Progress",
      items: [
        {
          id: 3,
          title: "Task 3",
        },
        {
          id: 4,
          title: "Task 4",
        },
      ],
    },
    {
      title: "Done",
      items: [
        {
          id: 5,
          title: "Task 5",
        },
        {
          id: 6,
          title: "Task 6",
        },
      ],
    },
  ];

  return (
    <div className="columns-4 gap-4">
      {LISTS.map((list) => (
        <List key={list.title} title={list.title} items={list.items} />
      ))}
    </div>
  );
}
