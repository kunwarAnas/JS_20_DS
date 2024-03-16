const findMaxOccurence = (str) => {
  const map = {};
  let maxOccurance;
  str.split("").forEach((element) => {
    if (element === " ") return;
    map[element] = map[element] ? map[element] + 1 : 1;
  });
  let count = 1;
  for (let i in map) {
    if (map[i] > count) {
      count = map[i];
      maxOccurance = i;
    }
  }
  console.log('max occurance letter -> ', maxOccurance);
};

findMaxOccurence("hello world");
