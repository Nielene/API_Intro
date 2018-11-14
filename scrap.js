document.addEventListener("DOMContentLoaded", () => {
  let APIResponse = {
    status: "success",
    message: {
      affenpinscher: [],
      african: [],
      airedale: [],
      akita: [],
      appenzeller: [],
      basenji: [],
      beagle: [],
      bluetick: [],
      borzoi: [],
      bouvier: [],
      boxer: [],
      brabancon: [],
      briard: [],
      bulldog: ["boston", "french"],
      bullterrier: ["staffordshire"],
      cairn: [],
      cattledog: ["australian"],
      chihuahua: [],
      chow: [],
      clumber: [],
      cockapoo: [],
      collie: ["border"],
      coonhound: [],
      corgi: ["cardigan"],
      cotondetulear: [],
      dachshund: [],
      dalmatian: [],
      dane: ["great"],
      deerhound: ["scottish"],
      dhole: [],
      dingo: [],
      doberman: [],
      elkhound: ["norwegian"],
      entlebucher: [],
      eskimo: [],
      frise: ["bichon"],
      germanshepherd: [],
      greyhound: ["italian"],
      groenendael: [],
      hound: ["afghan", "basset", "blood", "english", "ibizan", "walker"],
      husky: [],
      keeshond: [],
      kelpie: [],
      komondor: [],
      kuvasz: [],
      labrador: [],
      leonberg: [],
      lhasa: [],
      malamute: [],
      malinois: [],
      maltese: [],
      mastiff: ["bull", "tibetan"],
      mexicanhairless: [],
      mix: [],
      mountain: ["bernese", "swiss"],
      newfoundland: [],
      otterhound: [],
      papillon: [],
      pekinese: [],
      pembroke: [],
      pinscher: ["miniature"],
      pointer: ["german", "germanlonghair"],
      pomeranian: [],
      poodle: ["miniature", "standard", "toy"],
      pug: [],
      puggle: [],
      pyrenees: [],
      redbone: [],
      retriever: ["chesapeake", "curly", "flatcoated", "golden"],
      ridgeback: ["rhodesian"],
      rottweiler: [],
      saluki: [],
      samoyed: [],
      schipperke: [],
      schnauzer: ["giant", "miniature"],
      setter: ["english", "gordon", "irish"],
      sheepdog: ["english", "shetland"],
      shiba: [],
      shihtzu: [],
      spaniel: [
        "blenheim",
        "brittany",
        "cocker",
        "irish",
        "japanese",
        "sussex",
        "welsh"
      ],
      springer: ["english"],
      stbernard: [],
      terrier: [
        "american",
        "australian",
        "bedlington",
        "border",
        "dandie",
        "fox",
        "irish",
        "kerryblue",
        "lakeland",
        "norfolk",
        "norwich",
        "patterdale",
        "russell",
        "scottish",
        "sealyham",
        "silky",
        "tibetan",
        "toy",
        "westhighland",
        "wheaten",
        "yorkshire"
      ],
      vizsla: [],
      weimaraner: [],
      whippet: [],
      wolfhound: ["irish"]
    }
  };

  let myObj = {
    message: {
      dog: [],
      cat: ["feral", "house", "tabby"]
    }
  };

  let data = myObj.message;
  console.log("myObj.message", data);

  Object.keys(data).forEach(animal => {
    console.log("Object.keys(myObj.message)", Object.keys(data));
    console.log("object.values(myObj.message)", Object.values(data));

    if (data[animal].length) {
      data[animal].forEach(type => {
        console.log(type + " " + animal);
      });
    } else {
      console.log(animal);
    }
  });

  // let breedList = [];
  // breedList.push(APIResponse.message.value)

  // let arr = [...APIResponse.message]
  // console.log(APIResponse.message.value);
  // console.log(APIResponse.message.sheepdog);

  // loop throug every key, and if the value is a non empty array, i want to push that value and its key into breedlist array.

  // if APIResponse.message.sheepdog.length ===0

  // let arr = [...APIResponse.message]
  // let arr = Array.from(dogs.message)
  //
  // Array(..button).forEach(node => {
  //   node.addEventListener("click", event => {
  //     console.log("something");
  //   })
  //
  // });
  //
  // let a = {
  //   id: 2,
  //   name: "Xavier"
  // }
  //
  // let a = {
  //   id: 3,
  //   name: "Ben"
  // }
  //
  // let a = {
  //   id: 1,
  //   name: "Maurice"
  // }
  //
  // let b = [1,2,3,4,5]
  // let s = [33,6,12,7]
  // let arr = [...b, 200, ...s]
});
