const globalVar = "I'm global";
function showGlobal() {
    console.log(globalVar);
}

showGlobal();

function testFunction() {
    var functionVar = "I'm function-scoped";

    if (true) {
        var insideBlock = "I'm still function-scoped";
    }
    console.log("var from inside block:", insideBlock);
}
testFunction();

{
    let blockVar = "I'm block-scoped";
    const alsoBlock = "Me too!";
    console.log(blockVar, alsoBlock);
}

function outer() {
    const outerVar = "I'm outer";

    function inner() {
        console.log(outerVar);
    }
    inner();
}
outer();