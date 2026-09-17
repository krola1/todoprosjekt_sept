// import styles from "./Grid.module.css";

function Grid({ col = 4, gap = "1em", children }) {
  const css = {
    display: "grid",
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gap: gap,
  };

  return <div style={css}>{children}</div>;
}

export default Grid;
