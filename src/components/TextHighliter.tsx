/**
 * This component will highlight the text on the basis of searchVal param in suggestedName param
 * @param suggestedName - single suggested list name
 *  @param searchVal - search input value which needs to be highlighted in suggestedName
 * @returns 
 */
const TextHighlighter: React.FC<{suggestedName: string, searchVal: string}> = ({suggestedName, searchVal}) =>{
    const startIndex = suggestedName.toLowerCase().indexOf(searchVal.toLowerCase());
    const beforeMatch = suggestedName.slice(0, startIndex);
    const match = suggestedName.slice(startIndex, startIndex + searchVal.length);
    const afterMatch = suggestedName.slice(startIndex + searchVal.length);

    return (
      <>
        {beforeMatch}
        <strong>{match}</strong>
        {afterMatch}
      </>
    );
}

export default TextHighlighter;
