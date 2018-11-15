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

//--------------------------

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

  //--------------------------------


    let breedList = [];

    let breed = APIResponse.message;
    Object.keys(breed).forEach(subBreed => {

      if (breed[subBreed].length) {
        breed[subBreed].forEach(type => {

          let first = type[0].toUpperCase()
          // console.log("firstTop", first);
          let end = type.slice(1);
          // console.log("endTop", end);

          let firstSub = subBreed[0].toUpperCase();
          let endSub = subBreed.slice(1);



          breedList.push(`${first + end} ${firstSub + endSub}`);
          // breedList.push(first + end + " " + firstSub + endSub);
          // breedList.push(type + " " + subBreed)

          // console.log(type + " " + subBreed);
        });
      } else {
        let first = subBreed[0].toUpperCase();
        let end = subBreed.slice(1)
        // console.log("first",first, "end:",end)
        breedList.push(`${first+end}`);
        // breedList.push(subBreed);
        // console.log(subBreed);
      }
    });
  // console.log(breedList);
  // let myArr = [10,20,30,40,50];
  // let num = Math.random();

  const randomNum = (length) => {
    return Math.floor(Math.random() *length)
  }

  const getElement = (arr) => {
    let index = randomNum(arr.length)
    return arr[index];
  }

  // console.log(getElement(breedList));

    let button = document.querySelector("button");
    button.addEventListener("click", event => {
  //on click: randomize the list i already created. and push it to p tag

      let body = document.querySelector("body");
      let p = document.querySelector("p");
      p.innerText = getElement(breedList);
      // let form = document.querySelector("form")

      // form.appendChild(p)
  // console.log(p.innerText, p, event)

      // if (p.innerText){
        // let newP = document.createElement("p")
        // p.parentNode.replaceChild(p, newP)
      // }
      // else {
  //       document.appendChild(p);
  //       // p.innerText = getElement(breedList);
  //     }
  // p.innerText = getElement(breedList);

    // return p.innerText;
      // p.innerText = subBreed;
      // p.innerText = type + " " + subBreed;

  if (p.innerText) {
    p.innerText = getElement(breedList)
  } else {
    let p = document.createElement("p");
    document.appendChild(p)
    p.innerText = getElement(breedList)
  }

    });
  });


  //-----------------------------------

  // console.log("APIResponse.message", Breed);

  // console.log("Object.keys(APIResponse.message)", Object.keys(Breed));
  // console.log("object.values(APIResponse.message)", Object.values(Breed));

//----------------------------------

});
