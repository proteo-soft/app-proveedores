export function removeDuplicates(array) {
  const dataArr = new Set(array);
  console.log([...dataArr]);

  return [...dataArr];
}
