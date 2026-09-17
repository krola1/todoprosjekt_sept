export const SORT_FIELDS = {
  TITLE: "title",
  CREATED: "createdAt",
  PRIORITY: "priority",
};

export const DIRECTIONS = {
  ASC: "asc",
  DESC: "desc",
};

export const SORT_OPTIONS = [
  { value: SORT_FIELDS.TITLE, label: "Title" },
  { value: SORT_FIELDS.CREATED, label: "Created" },
  { value: SORT_FIELDS.PRIORITY, label: "Priority" },
];

const COMPARATORS = {
  [SORT_FIELDS.TITLE]: (a, b) => a.title.localeCompare(b.title),
  [SORT_FIELDS.CREATED]: (a, b) => a.createdAt - b.createdAt,
  [SORT_FIELDS.PRIORITY]: (a, b) => a.priority - b.priority,
};

export const sortTodos = (todos, field, direction) => {
  const compare = COMPARATORS[field];
  if (!compare) return todos;

  const dir = direction === DIRECTIONS.DESC ? -1 : 1;

  return [...todos].sort((a, b) => compare(a, b) * dir);
};
