const countWords = (text) => {
    return text
        .replace(/[^\w\s]/g, '') // Remove non-alphanumeric and non-space characters
        .split(/\s+/) // Split the text into an array by one or more spaces
        .filter(Boolean) // Remove empty elements from the array
        .length; // Count the number of elements in the array
};

export default countWords;