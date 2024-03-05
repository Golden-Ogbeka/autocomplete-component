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
