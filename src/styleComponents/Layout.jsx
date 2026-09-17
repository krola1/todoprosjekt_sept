export default function Layout({ children }) {
  const css = {
    padding: "2em",
  };
  return <div style={css}>{children}</div>;
}
