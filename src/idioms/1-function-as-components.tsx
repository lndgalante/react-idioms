// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function FunctionsAsComponents({ buttonText = 'Start Now' }) {
  const showButton = () => {
    <button>
      {buttonText}
    </button>
  }

  return (<div>
    {showButton()}
  </div>)
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) showButton function doesn't have a explicit return, so it returns undefined
2) since it's a React component we will need to rename it to PascalCase, since that's the common convention
3) we can use the function call, but we use the JSX-form to call components
4) it should be nice idea to use a prop for our Button component, instead a variable that's lives outside of the scope
5) and optionally we can move it outside the component, since it will be re-defined on every re-render
*/

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return <button>{text}</button>;
};

type FunctionsAsComponentsProps = {
  buttonText: string
}

export function FunctionsAsComponents({ buttonText = 'Start Now' }: FunctionsAsComponentsProps) {
  return (
    <div>
      <Button text={buttonText} />
    </div>
  );
}
