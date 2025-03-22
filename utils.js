function shiftLeft(arr) {
    return arr.map(row => {
        // Убираем последний элемент и вставляем его в начало
        var a = row[ 0 ];
        var aa = row.slice(1, row.length);
        aa.push(a);
        return aa;
    });
}

function shiftRight(arr) {
    return arr.map(row => {
        // Убираем последний элемент и вставляем его в начало
        return [row[ row.length - 1 ], ...row.slice(0, row.length - 1)];
    });
}


function packArr(arr2d) {
    return arr2d.map(row => {
        const binaryString = row.join(""); // Преобразуем массив в строку битов
        const decimalValue = parseInt(binaryString, 2); // Преобразуем строку в число
        return decimalValue.toString(16).toUpperCase(); // Преобразуем в HEX и делаем буквы заглавными
    }).join(""); // Объединяем все элементы в строку
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
    return Object.entries(obj)
        .map(([key, value]) => `${key}:${Math.round(value * 100)}%`)
        .join(" \n ") + " \n";
}
