/**
 * Created by Sindt on 02-03-2016.
 */

function add(n1, n2) {
    return n1 + n2;
}

//Async function
function addASync(n1, n2, callback) {
    setTimeout(function () {
        var result = n1 + n2;
        callback(result);
    }, 1000)
}

module.exports.add = add;
module.exports.addAsync = addASync;


