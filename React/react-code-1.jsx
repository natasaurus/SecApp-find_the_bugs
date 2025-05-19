function App() {
  const query = new URLSearchParams(window.location.search);
  return (
    <div dangerouslySetInnerHTML={{ __html: "Hello " + query.get("name") }} />
  );
}

export default App;