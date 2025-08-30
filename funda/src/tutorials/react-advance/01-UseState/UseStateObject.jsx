
const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);
  
    const removeItem = (id) => {
      // Create a new array that excludes the item with the matching id
      let newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople); // Set state to the new array
    };
    
    // To clear all items, you set the state to an empty array
    const clearItems = () => setPeople([]);
  
    return (
      <div>
        {people.map((person) => (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button onClick={() => removeItem(person.id)}>remove</button>
          </div>
        ))}
        <button onClick={clearItems}>clear items</button>
      </div>
    );
  };