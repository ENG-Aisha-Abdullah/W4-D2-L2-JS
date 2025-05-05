characters = [
    [
    "Luke Skywalker",
       177,
      "male",
      77,
    "brown",
    ],
    [
       "Leia Organa",
      160,
      "female",
       56,
       "blue",
    ],
    [
       "Han Solo",
      180,
      "male",
      80,
      "brown",
    ],
    [
       "Chewie",
      222,
      "male",
      190,
       "black",
    ],
    [
      "kevien",
      106,
       "male",
      32.2,
       "red",
    ],
  ];


  //create an array of characters that has these properties (name, height, gender, mass, eye color):
  let characters1 = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eyeColor: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eyeColor: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eyeColor: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eyeColor: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eyeColor: "red",
    },
  ];
  


//Get array of all names only:
let all_Name = characters1.map(function(currentValue){
return currentValue.name
})
console.log(all_Name);


//Get array of all heights only:
let all_height = characters1.map(function(currentValue){
    return currentValue.height
    })
    console.log(all_height);


//Get total height of all characters:
let totalHeight = all_height.reduce(function(sum, currentValue) {
    return sum + currentValue;
  }, 0);
  console.log(totalHeight);


  //Get characters with height less than 200
  let lessHeigt = all_height.filter(function(currentValue){
    return currentValue < 200 
  })
  console.log(lessHeigt);


  //Get all male characters:
  let malegender = characters1.filter(function(currentValue){
    return currentValue.gender == "male"
    })
    console.log(malegender);


// Sort by mass:
let sortedByMassDesc = characters1.sort(function(a, b) {
    return b.mass - a.mass;
  });
  console.log(sortedByMassDesc);

//Sort by height:
  let sortedByHeight = characters1.sort(function(a, b) {
    return a.height - b.height;
  });
  console.log(sortedByHeight);

  //Does every character have mass more than 40?
  let upMass =characters1.every(function(currentValue) {
    return currentValue.mass > 40;
  });
  console.log(upMass);

  //is every character shorter than 200?
  let heightChorter =characters1.every(function(currentValue) {
    return currentValue.height < 200;
  });
  console.log(heightChorter);


  //s there at least one character with blue eyes?
  let hasBlueEyes = characters1.some(function(currentValue) {
    return currentValue.eyeColor == "blue";
});
console.log(hasBlueEyes);

//Is there at least one character taller than 210?
let hasTalleiest = characters1.some(function(currentValue) {
    return currentValue.height > "210";
});
console.log(hasTalleiest);


//​أنشئ مصفوفة اسمها students تحتوي على 6 أسماء طلاب (مثال: "Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor").  :
let students = ["Ali","Sara","Ahmed","Lana","Omar","Noor"];


//أطبع جميع الأسماء التي تبدأ بحرف A أو a :
let A_names = students.filter(function(currentValue){
    return currentValue[0] === "A" || currentValue[0] === "a";
    })
    console.log(A_names);

//أطبع عدد الأسماء التي تحتوي على أكثر من 4 حروف :
let moreThan4 = students.filter(function(currentValue){
    return currentValue.length > 4
    })
    console.log(moreThan4);

//أنشئ مصفوفة جديدة فيها كل الأسماء لكن بالحروف الكبيرة (uppercase) :
let uppercase = students.map(function(currentValue){
    return currentValue.toUpperCase();  
    })
    console.log(uppercase);


//ابحث عن أول اسم يحتوي على الحرف "r" (بغض النظر عن كبر أو صغر الحرف). :
let r_name = students.find(function(currentValue) {
  return currentValue.includes("r") || currentValue.includes("R") ;
});
console.log(r_name);

//​​أطبع قائمة مرتبة من الأسماء بالترتيب الأبجدي. :
let sortNames = students.sort();
console.log(sortNames);


//​​تحقق إذا كان اسم معين (مثل "Omar") موجود في القائمة. :
let isOmarHere = students.some(function(currentValue) {
  return currentValue === "omar" || currentValue === "Omar" ; 
});
console.log(isOmarHere);

//أطبع عدد الأحرف الكلي لجميع الأسماء الموجودة في المصفوفة. :
let s_length = students.map(function(currentValue) {
    return currentValue.length
  }, 0);
  console.log(s_length);

  //أنشئ مصفوفة جديدة تحتوي فقط على الأسماء التي عدد حروفها زوجي. :
  let names_has_2 = students.filter(function(currentValue) {
    return currentValue.length % 2 === 0;
  });
  console.log(names_has_2);


  //أنشئ مصفوفة جديدة تحتوي على جميع الأسماء ولكن بالعكس:
  let reverse_Names = students.map(function(currentValue) {
    return currentValue.split('').reverse().join(''); 
  });
  
  console.log(reverse_Names);


  //احذف من المصفوفة جميع الأسماء التي تحتوي على الحرف "o" أو "O".
//   let has_0_names = students.filter(function(currentValue){
//     return currentValue.shi
//     })
//     console.log(has_0_names);
