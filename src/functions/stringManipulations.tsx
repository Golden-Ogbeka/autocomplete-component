// This function converts both the string being checked and the
// matching value to lowercase, splits the string being checked at the point
// where it matches and then combines the string back with a replaced version
// of the matching part. The replaced version of a span element that's highlighted

export const highlightMatch = (initialString: string, match: string) => {
  if (!match) {
    return initialString;
  }
  return (
    <span className='capitalize'>
      {initialString
        .toLowerCase()
        .split(match.toLowerCase())
        .reduce((prev: any, current, i) => {
          if (!i) {
            return [current];
          }
          return prev.concat(
            <span className='highlight' key={match + current}>
              {match}
            </span>,
            current
          );
        }, [])}
    </span>
  );
};
