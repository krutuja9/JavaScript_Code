let person = {
    name: 'john',
  
    age: 25,
  };
  
  function greet() {
    person.name = `Mr ${person.name}`;
  
    return `Welcome ${person.name}`;
  }
  
  greet();