function duplicateCount(text: string): number {
  text = text.toLowerCase();
  const m = new Map<string, boolean>();

  for (const c of text) {
    if (m.has(c)) {
      m.set(c, true);
    } else {
      m.set(c, false);
    }
  }
  let res = 0;
  for (const v of m.values()) {
    if (v) res++;
  }
  return res;
}

console.log(duplicateCount("Indivisibilities"));
