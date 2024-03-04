import { ChangeEvent, FormEvent, useState } from 'react';

// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function CrudeStateManagement() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => { };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} name="name" type="text" onChange={setName} />
      <input value={age} name="age" type="number" onChange={setAge} />
      <input value={location} name="location" type="text" onChange={setLocation} />
      <input value={email} name="email" type="email" onChange={setEmail} />
      <input value={password} name="password" type="password" onChange={setPassword} />
      <button type="submit">Submit</button>
    </form>
  );
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) We can use a single piece of state to manage the form state
2) We can use a single handleChange function to update the form state
3) We can complete the handleSubmit function with proper type definitions to log the form state when the form is submitted
4) We also can add labels for each of the inputs to make the form more accessible
*/

type FormState = {
  name: string;
  age: string;
  location: string;
  email: string;
  password: string;
};

export function FormWithStructuredState() {
  // states
  const [formState, setFormState] = useState<FormState>({
    name: '',
    age: '',
    location: '',
    email: '',
    password: '',
  });

  // handlers
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((previousFormState) => ({ ...previousFormState, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('\n ~ handleSubmit:', formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input value={formState.name} name="name" type="text" onChange={handleChange} />

      <label htmlFor="age">Age</label>
      <input value={formState.age} name="age" type="number" onChange={handleChange} />

      <label htmlFor="location">Location</label>
      <input value={formState.location} name="location" type="text" onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input value={formState.email} name="email" type="email" onChange={handleChange} />

      <label htmlFor="password">Password</label>
      <input value={formState.password} name="password" type="password" onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}
