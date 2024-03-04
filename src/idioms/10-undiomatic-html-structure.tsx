import { ChangeEvent, FormEvent, useState } from 'react';

// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function unidiomaticHTMLStructure() {
  const [name, setName] = useState("")
  const handleSubmit = (e) => {}

  return (<div>
    <input value={name} name="name" type="text" onChange={setName} />
    <button type="submit" onClick={handleSubmit}>Submit</button>
  </div>)
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) Let's define a type for the "name" state
2) Let's define a type for the "handleSubmit" function, this will be FormEvent<HTMLFormElement>
3) Let's create a "handleChange" for the input element and assign it to the "onChange" event, this will be ChangeEvent<HTMLInputElement>
4) For the HTML structure (JSX elements), we need to use a form instead of a div
5) We can assign the "handleSubmit" function to the "onSubmit" event instead of the "onClick" event in the button element
6) We need to call to event.preventDefault() in the "handleSubmit" function to avoid the default form submission
7) We can log the "name" state in the "handleSubmit" function to see the value of the input when the form is submitted
8) We need to call setName in the "handleChange" function to update the "name" state, using the event.target.value

9) A good practice will be to change the function name from camelCase to PascalCase to follow the React component naming convention
10) We can add "async" pre-fix to the handleSubmit function to make it future-proof and  asynchronous since most of the time we will be making an API call in the handleSubmit function
*/

export function UndiomaticHtmlStructure() {
  // states
  const [name, setName] = useState<string>('');

  // handlers
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('name', name);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
