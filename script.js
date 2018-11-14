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

  let button = document.querySelector("button");

  button.addEventListener("click", event => {
    let subBreedArr = APIResponse.message;
    // console.log("APIResponse.message", subBreedArr);

    Object.keys(subBreedArr).forEach(subBreed => {
      // console.log("Object.keys(APIResponse.message)", Object.keys(subBreedArr));
      // console.log("object.values(APIResponse.message)", Object.values(subBreedArr));

      if (subBreedArr[subBreed].length) {
        subBreedArr[subBreed].forEach(type => {
          console.log(type + " " + subBreed);
        });
      } else {
        console.log(subBreed);
      }
    });
  });
});
