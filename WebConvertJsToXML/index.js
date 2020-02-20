

// const input = document.querySelector('input[type="file"]')
// input.addEventListener('change', function(e){
//   console.log(input.files)
//   const reader = new FileReader()
//   reader.onload = function(){
//     console.log(reader.result)
//   }
//   // reader.readAsBinaryString(input.files[0])
//   reader.readAsBinaryString(input.files[0])
// }, false)

// var json = `
//     MyLang = {
//         locale: 'ja'
//     }`;
// eval("data = " + json);
// console.log(data);
//
// var options = { compact: true, ignoreComment: true, spaces: 4 };
// var result = convert.json2xml(data, options);
// console.log(result);

// save to file xml


var MyLang = {};
var json = `
    (function(){
        MyLang = {
            locale: 'ja'
        }
    })()
`;
eval(json);
console.log(MyLang);
var options = { compact: true, ignoreComment: true, spaces: 4 };
var result = json2xml(MyLang, options);
console.log(result);
