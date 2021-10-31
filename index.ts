interface Human {
  name: string;
  age: number;
  isMarried: boolean;
}

const kk = (k: Human) => {
  console.log(k.name);
  console.log(k.age);
  console.log(k.isMarried);
};
