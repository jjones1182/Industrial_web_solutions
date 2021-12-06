// console.log(document.getElementById("title"));

function sayHello () {
    // body....
    var name =  document.getElementByID("name").value;
    var message = "<h2> " + name + "!</h2>";

    document
        .getElementByID("content")
        .textContent = message;
}
