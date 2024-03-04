
// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function UnnecessaryFunctionRedefinitions(emails) {
  const validateEmail = (email) => email.includes("@")

  return(
    <div>
      {emails.map(email => (
        <div key={email}>
          {email} is {validateEmail(email) ? 'Valid' : 'Invalid'}
        </div>
      ))}
    </div>
  )
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) We can move the validateEmail function outside of the component, and use it directly in the map function, to avoid re-declaring the function on every render
2) We can also add a type to the emails prop, and destructuring it in the function signature
*/

// helpers
const validateEmail = (email: string): boolean => {
  return email.includes("@")
}

type UnnecessaryFunctionRedefinitionsProps = {
  emails: string[];
}


export function UnnecessaryFunctionRedefinitions({ emails }: UnnecessaryFunctionRedefinitionsProps) {
  return (
    <div>
      {emails.map(email => (
        <div key={email}>
          {email} is {validateEmail(email) ? 'Valid' : 'Invalid'}
        </div>
      ))}
    </div>
  )
}
