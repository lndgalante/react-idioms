// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function UnidiomaticHTMLHierarchy() {
  const bids = [1,2,3]
  const asks = [1,2,3]

  return (<li>
    {bids.map((bid, i) => <span key={i}>{bid}</span>)}
    {asks.map((ask, j) => <span key={j+'asks'}>{ask}</span>)}
  </li>)
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) We can move the bids and ask array outside the function since they are not changing in this scenario
2) We can use a ul element for each of the lists of bids and asks
3) We need to return an li within the map callback for each of the bids and asks lists
4) I added a p element to label each of the lists of bids and asks
*/

const BIDS = [1, 2, 3];
const ASKS = [1, 2, 3];

export function UnidiomaticHTMLHierarchy() {
  return (
    <div>
      <p>Bids</p>
      <ul>
        {BIDS.map((bid, index) => (
          <li key={`${index}-bid`}>{bid}</li>
        ))}
      </ul>

      <p>Asks</p>
      <ul>
        {ASKS.map((ask, index) => (
          <li key={`${index}-ask`}>{ask}</li>
        ))}
      </ul>
    </div>
  );
}
