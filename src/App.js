import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let persons = [
    { name: "wasih", lang: "javascript" },
    { name: "jemi", lang: "python" },
    { name: "aftab", lang: "php" },
    { name: "ambappe", lang: "c++" },
  ];

  const products = [
    { name: "photoshop", price: "US$29.99/mo" },
    { name: "Ilustrator", price: "US$29.99/mo" },
    { name: "Pdf Reader", price: "US$19.99/mo" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>hi i am wasih </p>
        <Counter></Counter>
        <User></User>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
        {persons.map((person) => (
          <Person person={person}></Person>
        ))}
        {/* <Person name="wasih" lang=></Person>
        <Person></Person>
        <Person ></Person>
        <Person name="ambappe" lang="c++"></Person> */}
      </header>
    </div>
  );
}
function User(props) {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h3>dynamic user:{users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
      {/* <p>{console.log(users)}</p>  */}
    </div>
  );
}
function Counter(props) {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: "1px solid black",
    borderRadius: "5px",
    minHeight: "200px",
    maxWidth: "300px",
    padding: "20px",
    backgroundColor: "#555",
    margin: "5px",
  };
  const logoStyle = {
    width: "50px",
    height: "50px",
  };
  const btn = {
    padding: "8px 12px",
    border: "none",
    borderRadius: "9px",
  };
  const { name, price } = props.product;
  return (
    <div align="left" style={productStyle}>
      <img src={logo} alt="" style={logoStyle} />
      <br />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
        corrupti autem quo commodi, a totam sint eveniet fugiat culpa alias
        tenetur eius cumque possimus, iste dolores recusandae hic impedit
        quaerat!
      </p>
      <button style={btn}>Buy now</button>
    </div>
  );
}
function Person(props) {
  // console.log(props);
  const { name, lang } = props.person;
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #fff",
        margin: "5px",
        padding: "10px",
      }}
    >
      <h1>abu aftab {name}</h1>
      <h3>learning {lang}</h3>
    </div>
  );
}
export default App;
