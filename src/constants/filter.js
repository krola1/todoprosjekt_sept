export const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

export const FILTER_OPTIONS = [
  { value: FILTERS.ALL, label: "All" },
  { value: FILTERS.ACTIVE, label: "Active" },
  { value: FILTERS.COMPLETED, label: "Completed" },
];

export const filterTodos = (todos, filter) => {
  if (filter === FILTERS.ACTIVE) return todos.filter((item) => !item.complete);
  if (filter === FILTERS.COMPLETED)
    return todos.filter((item) => item.complete);
  return todos;
};
