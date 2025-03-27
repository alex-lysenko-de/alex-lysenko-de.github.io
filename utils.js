function shiftLeft(arr) {
    return arr.map(row => {
        var a = row[ 0 ];
        var aa = row.slice(1, row.length);
        aa.push(a);
        return aa;
    });
}

function shiftRight(arr) {
    return arr.map(row => {
        return [row[ row.length - 1 ], ...row.slice(0, row.length - 1)];
    });
}


function packArr(arr2d) {
    return arr2d.map(row => {
        const binaryString = row.join("");
        const decimalValue = parseInt(binaryString, 2);
        let st = decimalValue.toString(16).toUpperCase();
        if (st.length < 2) {
            st = '0' + st;
        }
        return st;
    }).join("");
}

function unpackArr(hexString) {
    const binaryArray = [];

    for (let i = 0; i < hexString.length; i += 2) {
        const hexPair = hexString.slice(i, i + 2);
        const binaryString = parseInt(hexPair, 16).toString(2).padStart(8, '0');
        binaryArray.push(binaryString.split('').map(bit => parseInt(bit, 10)));
    }

    return binaryArray;
}

function convertResults(obj) {
    const listOfValues = Object.entries(obj).map(([key, value]) => Math.round(value * 100));
    const maxValue = Math.max(...listOfValues);
    let list = Object.entries(obj).map(([key, value]) => {
        let roundVal = Math.round(value * 100);
        let arrow = (roundVal === maxValue) ? ' <--- ' : '';
        return `${key}:${roundVal}%${arrow}`;
    });
    return list.join('\n');
}
