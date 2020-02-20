var dataxml;
const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function(e){
    console.log(input.files)
    const reader = new FileReader()
    reader.onload = function(){
        var data = reader.result
        var json = JSON.parse(JSON.stringify(data))
        var MyLang = {};
        json = json.toString()
        eval(json);
        var options = { compact: true, ignoreComment: true, spaces: 4 };
        console.log(options)
        var result = json2xml(MyLang, options);
        console.log(result)
        dataxml = result
    }
    reader.readAsText(input.files[0])
}, false)

// $("#fileContents").click(function() {
//      var blob = new Blob([dataxml],
//                     { type: "text/plain;charset=utf-8" });
//      saveAs(blob, "testout.xml");
//
//     // alert(dataxml)
//     // console.log(dataxml)
//  });

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("fileContents").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    // var text = document.getElementById("text-val").value;
    var filename = "hello.xml";

    download(filename, dataxml);
}, false);