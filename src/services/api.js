/**
 * 
 * @param {*} url - url to fetch data
 * @param {*} searchVal - search input value
 * @returns 
 */
const fetchData = async (url,searchVal) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok!!');
      }

      const jsonData = await response.json();

      // Usually logic for filtering is from back-end but since I am using a simple json deployed in Github to retrieve the data, therefore filtering logic implemented here
      const filteredResults = jsonData.filter((country) =>
      country.name.toLowerCase().includes(searchVal.toLowerCase())
    );
  
      return filteredResults;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };
  
  export default fetchData;