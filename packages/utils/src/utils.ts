/**
 * swap the key and value of the input object
 * @param input obj needs to swap
 * @returns swapped obj
 */
export const swapKeyValue = (input: {
  [key: string]: string;
}): {
  [key: string]: string;
} => {
  const output: { [key: string]: string } = {};

  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      output[input[key]] = key;
    }
  }

  return output;
};