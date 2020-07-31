export function camelCase(str: string): string {
  const arr = str.trim().toUpperCase().split("");
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && arr[i - 1] !== " ") {
      arr[i] = arr[i].toLowerCase();
    }
  }
  console.log(arr);
  return str;
}

console.log(camelCase("camel case word"));
