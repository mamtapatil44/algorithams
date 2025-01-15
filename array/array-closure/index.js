// implement closures using arr1 of obj

function createClosure() {
    var arr1 = [];

    for (let i = 0; i < 3; i++) {
        let obj = { value: i }
        arr1.push(obj);


            (function (currentObj) {
                currentObj.printValue = () => {
                    console.log("value ", currentObj.value)
                }

            })(obj)

    }
    return arr1;

}

const closure = createClosure();
closure[0].printValue()
closure[1].printValue()
closure[2].printValue()