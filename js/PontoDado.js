const PROXY_CORS = `${location.protocol}//${location.host}/proxy.php?url=`;
const API_URL =
    'http://linhasriopreto.riopretrans.com.br/mapa/mapa/proximoshorarios';
class PontoDado {
    static async _getData(id) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        const request = new Request(`${PROXY_CORS}${API_URL}`);

        const body = new URLSearchParams();
        body.append('id_ponto', id);

        const init = {
            method: 'POST',
            headers: headers,
            body: body,
        };

        // LEARN: como funciona Promises

        let res = await fetch(request, init);
        let text = await res.text();

        // MOCK
        /* const mock = {
            1633: "\t<table class=\"table m-0\">\n\t<thead>\n\t\t<tr>\n\t\t\t<td>Empresa</td>\n\t\t\t<td>Linha</td>\n\t\t\t<td>Hor&aacute;rio Previsto</td>\n\t\t\t<td>Ver no Mapa</td>\n\t\t</tr>\n\t</thead>\n<tbody><tr><td><img src='/assets/images/logo_itamarati_50.png' width='25' heigth='25'/></td><td>4041 - JARDIM SORAIA / ROMANO CALIL</td><td>22:15</td><td><a href='javascript:verCarroNoMapa(4041,6918,-20.8141,-49.3673,\"JARDIM SORAIA / ROMANO CALIL\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr></tbody></table>",
            Romano: '1633',
            1676: "<table class=\"table m-0\"> <thead> <tr> <td>Empresa</td> <td>Linha</td> <td>Hor&aacute;rio Previsto</td> <td>Ver no Mapa</td> </tr> </thead> <tbody><tr><td><img src='/assets/images/logo_itamarati_50.png' width='25' heigth='25'/></td><td>4041 - JARDIM SORAIA / ROMANO CALIL</td><td>22:09</td><td><a href='javascript:verCarroNoMapa(4041,6918,-20.8138,-49.3544,\"JARDIM SORAIA / ROMANO CALIL\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr><tr><td><img src='/assets/images/logo_itamarati_50.png' width='25' heigth='25'/></td><td>402 - CRISTO REI</td><td>22:54</td><td><a href='javascript:verCarroNoMapa(402,6841,-20.7912,-49.353,\"CRISTO REI\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr><tr><td><img src='/assets/images/logo_itamarati_50.png' width='25' heigth='25'/></td><td>407A - VILA TONINHO EGAS MONIZ</td><td>23:16</td><td><a href='javascript:verCarroNoMapa(407A,6752,-20.8322,-49.3498,\"VILA TONINHO EGAS MONIZ\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr></tbody></table>",
            Cristo: '1676',
            1675: "<table class=\"table m-0\"> <thead> <tr> <td>Empresa</td> <td>Linha</td> <td>Hor&aacute;rio Previsto</td> <td>Ver no Mapa</td> </tr> </thead> <tbody><tr><td><img src='/assets/images/logo_itamarati_50.png' width='25' heigth='25'/></td><td>402 - CRISTO REI</td><td>22:53</td><td><a href='javascript:verCarroNoMapa(402,6841,-20.7912,-49.353,\"CRISTO REI\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr><tr><td><img src='/assets/images/logo_itamarati_50.png' width='25' heigth='25'/></td><td>407A - VILA TONINHO EGAS MONIZ</td><td>23:15</td><td><a href='javascript:verCarroNoMapa(407A,6752,-20.8322,-49.3498,\"VILA TONINHO EGAS MONIZ\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr></tbody></table><table class=\"table m-0\"> <thead> <tr> <td>Empresa</td> <td>Linha</td> <td>Hor&aacute;rio Previsto</td> <td>Ver no Mapa</td> </tr> </thead> <tbody><tr><td><img src='/assets/images/logo_itamarati_50.png' width='25' heigth='25'/></td><td>402 - CRISTO REI</td><td>22:53</td><td><a href='javascript:verCarroNoMapa(402,6841,-20.7912,-49.353,\"CRISTO REI\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr><tr><td><img src='/assets/images/logo_itamarati_50.png' width='25' heigth='25'/></td><td>407A - VILA TONINHO EGAS MONIZ</td><td>23:15</td><td><a href='javascript:verCarroNoMapa(407A,6752,-20.8322,-49.3498,\"VILA TONINHO EGAS MONIZ\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr></tbody></table><table class=\"table m-0\"> <thead> <tr> <td>Empresa</td> <td>Linha</td> <td>Hor&aacute;rio Previsto</td> <td>Ver no Mapa</td> </tr> </thead> <tbody><tr><td><img src='/assets/images/logo_itamarati_50.png' width='25' heigth='25'/></td><td>402 - CRISTO REI</td><td>22:53</td><td><a href='javascript:verCarroNoMapa(402,6841,-20.7912,-49.353,\"CRISTO REI\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr><tr><td><img src='/assets/images/logo_itamarati_50.png' width='25' heigth='25'/></td><td>407A - VILA TONINHO EGAS MONIZ</td><td>23:15</td><td><a href='javascript:verCarroNoMapa(407A,6752,-20.8322,-49.3498,\"VILA TONINHO EGAS MONIZ\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr></tbody></table><table class=\"table m-0\"> <thead> <tr> <td>Empresa</td> <td>Linha</td> <td>Hor&aacute;rio Previsto</td> <td>Ver no Mapa</td> </tr> </thead> <tbody><tr><td><img src='/assets/images/logo_itamarati_50.png' width='25' heigth='25'/></td><td>402 - CRISTO REI</td><td>22:53</td><td><a href='javascript:verCarroNoMapa(402,6841,-20.7912,-49.353,\"CRISTO REI\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr><tr><td><img src='/assets/images/logo_itamarati_50.png' width='25' heigth='25'/></td><td>407A - VILA TONINHO EGAS MONIZ</td><td>23:15</td><td><a href='javascript:verCarroNoMapa(407A,6752,-20.8322,-49.3498,\"VILA TONINHO EGAS MONIZ\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr></tbody></table>",
            UBS: '1675',
            1371: "<table class=\"table m-0\"> <thead> <tr> <td>Empresa</td> <td>Linha</td> <td>Hor&aacute;rio Previsto</td> <td>Ver no Mapa</td> </tr> </thead> <tbody><tr><td><img src='/assets/images/logo_circular_50.png' width='25' heigth='25' /></td><td>217 - SOLO SAGRADO - VIA MIRASSOLANDIA</td><td>22:10</td><td><a href='javascript:verCarroNoMapa(217,284,-20.7858,-49.4121,\"SOLO SAGRADO - VIA MIRASSOLANDIA\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr></tbody></table>",
            Solo: '1371',
            912: "<table class=\"table m-0\"> <thead> <tr> <td>Empresa</td> <td>Linha</td> <td>Hor&aacute;rio Previsto</td> <td>Ver no Mapa</td> </tr> </thead> <tbody><tr><td><img src='/assets/images/logo_circular_50.png' width='25' heigth='25' /></td><td>210 - ELDORADO</td><td>22:32</td><td><a href='javascript:verCarroNoMapa(210,560,-20.795,-49.3912,\"ELDORADO\");'><img width='20px' heigth='20px' src='/assets/images/map_2.png'/></a></td></tr></tbody></table>",
            Eldorado: '912',
            1961: '<table class="table m-0"> <thead> <tr> <td>Empresa</td> <td>Linha</td> <td>Hor&aacute;rio Previsto</td> <td>Ver no Mapa</td> </tr> </thead> <tbody></tbody></table>',
            Empty: '1961',
        };

        return new Promise((resolve, reject) => {
            setTimeout(
                (data) => {
                    resolve(data);
                },
                200,
                mock[`${id}`]
            );
        }); */

        return text;
    }

    static _extractData(data) {
        let result = [];
        // let result = {};

        // LEARN: Html template element

        let tmp = document.createElement('template');
        tmp.innerHTML = data.trim();
        let htmlTable = tmp.content.firstChild;

        let thead = htmlTable.querySelector('thead');
        let tbody = htmlTable.querySelector('tbody');

        // [{Horário Previsto: 'HH:MM', Linha: 'ID - LINHA'}, ...]

        // LEARN: JS different types of 'for'
        for (let i = 0; i < tbody.children.length; i++) {
            const tr = tbody.children[i];

            let tmp = {};

            for (let j = 0; j < tr.children.length; j++) {
                const td = tr.children[j];

                // ignora por hora o primeiro e último (Empresa e Ver no Mapa)
                if (j === 0 || j === 3) continue;

                let value = td.innerText.trim();

                // if (value.length === 0)
                //     continue;

                let key = thead
                    .querySelector('tr')
                    .children[j].innerText.trim();

                tmp[key] = value;
            }

            result.push(tmp);
        }

        // {Horário Previsto: ['HH:MM'], Linha: ['ID - LINHA']}

        /* for (let i = 0; i < thead.querySelector('tr').children.length; i++) {
            const td = thead.querySelector('tr').children[i];

            // ignora por hora o primeiro e último (Empresa e Ver no Mapa)
            if (i === 0 || i === 3) continue;

            let key = td.innerText.trim();

            result[key] = [];

            for (let j = 0; j < tbody.children.length; j++) {
                const tr = tbody.children[j];

                let value = tr.children[i].innerText.trim();

                // if (value.length === 0)
                //     continue;

                result[key].push(value);
            }
        } */

        return result;
    }

    static async getData(id) {
        return this._extractData(await this._getData(id));
    }
}
