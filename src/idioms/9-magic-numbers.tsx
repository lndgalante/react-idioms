// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function MagicNumbers(age) {
  return (<ol>
    { age < 18 ? <div>Spicy</div> : <div>You are not old enough</div>}
  </ol>)
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) First we need to destruct the age from the props object
2) We can define a MagicNumberProps type to define the props of the component
3) We can avoid the ol element since we're not showing a list of items
4) We can return directly a single div element with the conditional within it

5) Optionally we can define a minAge optional prop to define the minimum age to be considered old enough, so the component can be more flexible
*/

type MagicNumbersProps = {
  age: number;
  minAge?: number;
};

export function MagicNumbers({ age, minAge = 18 }: MagicNumbersProps) {
  return age < minAge ? <div>Spicy</div> : <div>You are not old enough</div>;
}
