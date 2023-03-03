import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    colour: "",
    dinosaur: "",
    number: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    // send an email with the form data here
  }

  function handleChange(event) {
    // setFormData(event.target.value);
    let newFormData = { ...formData, [event.target.name]: event.target.value };
    setFormData(newFormData);
  }

  return (
    <div className="App">
      <h1>Form Demo</h1>
      <form onSubmit={handleSubmit}>
        <input name="colour" type="text" placeholder="Colour" value={formData.colour} onChange={handleChange} />
        <input name="dinosaur" type="text" placeholder="Dinosaur" value={formData.dinosaur} onChange={handleChange} />

        <select name="number" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>

      <h2>Colour: {formData.colour}</h2>
      <h2>Dinosaur: {formData.dinosaur}</h2>
      <h2>Number: {formData.number}</h2>
    </div>
  );
}

export default App;
