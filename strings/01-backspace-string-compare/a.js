// console.log(compareString('ab#c', 'ad#c'));
// console.log(compareString('ab##', 'c#d#'));
// console.log(compareString('a##c', '#a#c'));
// console.log(compareString('a#c', 'b'));

function compareString(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    while (i >= 0 || j >= 0) {
        if (s[i] === '#') {
            i = findIndexAfterBackspace(i, s);
        } else if (t[j] === '#') {
            j = findIndexAfterBackspace(j, t);
        } else {
            if (s[i] !== t[j]) return false;
            i--;
            j--;
        }
    }

    return true;
}

function findIndexAfterBackspace(index, str) {
    let backCount = 2;
    let i = index;
    while (backCount > 0) {
        i--;
        backCount--;
        if (str[i] === '#') {
            backCount += 2;
        }
    }
    return i;
}

// function compareString(s, t) {
//     const sArr = buildArray(s);
//     const tArr = buildArray(t);

//     if (sArr.length === 0 && tArr.length === 0) return true;

//     if (sArr.length !== tArr.length) return false;

//     for (let index = 0; index < sArr.length; index++) {
//         if (sArr[index] !== tArr[index]) return false;
//     }

//     return true;
// }

// function buildArray(str) {
//     if (!str) {
//         return [];
//     }

//     const results = [];
//     const arrFromStr = str.split('');
//     arrFromStr.forEach((element) => {
//         element === '#' ? results.pop(element) : results.push(element);
//     });

//     return results;
// }
