class PontoSalvo {
    // Por Hoje Só Fatec Sem Salvar
    static getSalvos() {
        let rawcookie = document.cookie;
        // let regex = /salvos=(.*);/g;
        let regex = /salvos=([^;]+)/g;
        let match = regex.exec(rawcookie)[1];

        return JSON.parse(match);
    };
}