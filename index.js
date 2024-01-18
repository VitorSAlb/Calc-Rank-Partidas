function hero() {
    let vitorias = document.getElementById('wins').value;    
    let derrotas = document.getElementById('def').value;    

    console.log(`O seu numero de derrotas é ${derrotas} e o de vitoriasa é ${vitorias}`)

    const nivel = saldoVitorias(vitorias, derrotas);

    console.log(`Saldo de vitorias é ${nivel}`);

    document.getElementById('saldoV').innerHTML = `${nivel}`;

    rank(nivel);

    function saldoVitorias(v, d) {
        return v - d
    }

    function rank(i) {

        if (i <= 10) {
            console.log(`O rank dele é Ferro`);
            document.getElementById("rankHeroi").innerHTML = "Ferro";
        } else if (11 <= i && i <= 20) {
            console.log(`O rank dele é Bronze`);
            document.getElementById("rankHeroi").innerHTML = "Bronze";
        }else if (21 <= i && i <= 50) {
            console.log(`O rank dele é Prata`);
            document.getElementById("rankHeroi").innerHTML = "Prata";
        }else if (51 <= i && i <= 80) {
            console.log(`O rank dele é Ouro`);
            document.getElementById("rankHeroi").innerHTML = "Ouro";
        }else if (81 <= i && i <= 90) {
            console.log(`O rank dele é Diamante`);
            document.getElementById("rankHeroi").innerHTML = "Diamante";
        }else if (91 <= i && i <= 100) {
            console.log(`O rank dele é Ledário`);
            document.getElementById("rankHeroi").innerHTML = "Ledário";
        }else if (i <= 101) {
            console.log(`O rank dele é Imortal`);
            document.getElementById("rankHeroi").innerHTML = "Imortal";
        }else {
            console.log(`Invalido`);
            document.getElementById("rankHeroi").innerHTML = "Invalido";
        }
    }
}

