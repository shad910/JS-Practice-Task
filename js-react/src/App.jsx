import "./App.css";

function App() {
  return (
    <>
      <h1>Rect Core Practice</h1>
      <Form name="Shad" roll="770***" reg="1502288***"></Form>
      <FavFood fruit="Orange" fastFood="Burger"></FavFood>
      <Form name="Monayem" roll="745***" reg="1502****"></Form>
      <FavFood fruit="Orange" fastFood="Pizza"></FavFood>
      <Form name="Evan" roll="770***" reg="15022***"></Form>
      <FavFood fruit="Orange" fastFood="Latus Pata"></FavFood>
      <Form name="Abir" roll="770***" reg="1502288**"></Form>
      <FavFood fruit="Orange" fastFood="Pasta"></FavFood>
    </>
  );
}

function Form(props) {
  console.log(props);
  return (
    <section className="container">
      <div className="section1">
        <h3>Fill up the form:</h3>
        <div className="div1">
          <p className="ps1">Name: {props.name}</p>
          <p className="ps1">Roll: {props.roll}</p>
          <p className="ps1">Reg: {props.reg}</p>
        </div>
      </div>
    </section>
  );
}

function FavFood ({fruit,fastFood}) {
  return (
    <section className="section2">
      <ul className="ps1">
        <li>Fruits: {fruit} </li>
        <li>Fast Food: {fastFood} </li>
      </ul>
    </section>
  )
}

export default App;
