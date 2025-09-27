import AppName from "./components/AppName";
import AddTask from "./components/AddTask";
import { useState } from "react";

import Tasks from "./components/Tasks";
import FoodItems from "./components/FoodItems";
import "./App.css";
import "./index.css";
import WelcomeHeading from "./components/WelcomeHeading";
// const items = [];
// const items = ["Dal", "Roti", "Juice", "Chai", "Milk"];

function App() {
  const [todoItems, setNewItem] = useState([]);

  const handleNewItem = (newItem, newDate) => {
    console.log(`your task is ${newItem} and date is ${newDate}`);
    const newItems = [...todoItems, { name: newItem, date: newDate }];
    setNewItem(newItems);
  };

  const handleDeleteItem = (itemName) => {
    const newItems = todoItems.filter((item) => item.name !== itemName);
    setNewItem(newItems);
  };
  return (
    <div className="flex justify-center">
      <div>
        <center>
          <AppName></AppName>
          <AddTask onNewItem={handleNewItem} />
          {todoItems.length === 0 && <WelcomeHeading />}

          <Tasks todoItems={todoItems} onDeleteClick={handleDeleteItem} />
        </center>
      </div>
    </div>
  );
}

export default App;
