import { FormEvent, useState } from 'react';

// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function DangerousIdentifier() {
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const person = new FormData(e.target);
    setPeople(ppl => [...ppl, ...person])
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Add Person</button>
      </form>
      <ul>
        {people.map(person => <span key={person.name}>{person.name}</span>)}
      </ul>
    </div>
  )
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) The core problem here is that we are using the person name as the key for the list of people, since multiple people could have the same name
2) Let's type the event in the handleSubmit function to be a FormEvent<HTMLFormElement>
4) Let's add a type to the people state to be an array of { name: string; id: string } objects
5) Let's add a state to handle the person name input, and assign it to the value of the input
6) Let's add a handleChange function to handle the input change
7) Let's add now the logic to handle the form submission, creating a new person object with a unique id and the name from the input
8) Let's also reset the person state after the form submission
9) There's another bug that the people map is returning a span element and not an li element
10) And now let's use a proper key for the list of people, using the person id
*/

type Person = {
  id: string;
  name: string;
}

export function DangerousIdentifier() {
  // states
  const [person, setPerson] = useState<string>('');
  const [people, setPeople] = useState<Person[]>([]);

  // handlers
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setPeople((previousPeople) => [
      ...previousPeople,
      { id: crypto.randomUUID(), name: person },
    ]);
    setPerson('');
  };

  function handleChange(event: FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    setPerson(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={person} onChange={handleChange} />
        <button>Add Person</button>
      </form>

      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}
