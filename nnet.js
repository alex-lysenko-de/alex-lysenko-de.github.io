function Nnet(config = {}) {

    const _this = this;
// 🧠 Netzwerk-Konfiguration
    const defaultConfig = {

        learningRate : 0.01,      // Stabiles Lernen
        log : true,               // Fortschritt anzeigen
        logPeriod : 100
    };


    this.init = function (text) {

        var trainingData = text2trainingArr(text);
        _this.net = new brain.NeuralNetwork(Object.assign({},config,defaultConfig));
        let res = _this.net.train(trainingData, {
            iterations : 20000,  // Maximale Durchläufe
            errorThresh : 0.005, // Stoppt, wenn Fehler unter 0.5%
        });
        return res;
    };

    this.run = function (a) {
        let aInput = a.flat();
        let result = _this.net.run(aInput);
        return result;
    };


    function text2trainingArr(text) {
        return text.trim().split("\n").map(line => {
            const [input, outputChar] = line.split("=>");
            return { input: unpackArr(input.trim()).flat(), output: { [outputChar.trim()]: 1 } };
        });
    }


    function character(st) {
        return st.split('').map(integer);
    }

    /**
     * Return 0 or 1 for '#'
     * @param character
     * @returns {number}
     */
    function integer(character) {
        if ('#' === character) return 1;
        return 0;
    }
}

