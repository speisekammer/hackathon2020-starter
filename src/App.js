import "./App.css";
import items from "./ExampleData.js";

// render an item
const ItemBlock = (item) => (
  <div style={{ clear: "both" }} key={item.gtin}>
    <img
      src={item.productImageUrl}
      alt="ProductImage"
      style={{ margin: 5, float: "left" }}
    />
    {item.getCount()}x {item.contentString()} {item.name}
    <br />
    <ul style={{ listStyleType: "none", fontSize: '16px' }}>
      {item.itemSet.map((set, idx) => {
        return (
          <li key={idx}>{`${set.count}x with date ${set.date
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, "/")}`}</li>
        );
      })}
    </ul>
  </div>
);

// Main App
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pantry Overview</h1>{" "}
        <ul style={{ listStyleType: "none" }}>
          <li>{items.map((item) => ItemBlock(item))}</li>
        </ul>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
