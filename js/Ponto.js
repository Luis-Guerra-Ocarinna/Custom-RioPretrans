// class Ponto {
//     constructor(id) {
//         this.id = id;
//     }

//     render() {
//         document.write(PontoDado.getData(this.id));
//     }
// }

const salvos = PontoSalvo.getSalvos().grupos;

for (const key in salvos) {
    if (Object.hasOwnProperty.call(salvos, key)) {
        document.write(
            `<pre style="font-size: 2rem;font-weight: bolder;overflow: auto;">`
        );

        document.write(`${key}:\n`);

        for (const k in salvos[key]) {
            if (Object.hasOwnProperty.call(salvos[key], k)) {
                document.write(`  ${k}: \n`);

                document.write(`<tmp${k}></tmp${k}>`);

                PontoDado.getData(salvos[key][k]).then((data) => {
                    data.forEach((bus) => {
                        document.querySelector(
                            `tmp${k}`
                        ).innerHTML = `    ${bus['Horário Previsto']} | ${bus['Linha']}\n`;
                    });
                });
            }
        }

        document.write(`</pre>`);
    }
}

// TODO: Utilizar o módulos
// export default Pontos;
