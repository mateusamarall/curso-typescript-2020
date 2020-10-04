exports.paginaInicial = (req, res) => {

    res.send(
        `<form action="/" method="POST">
            <input type="text" name="qualquercoisa" placeholder="nome do cliente"><br/>
            <input type="text" name="qualquercoisa2" placeholder="outrocampo"><br/>
            <button>ola mundo</button>
        </form>`
    );
}

exports.trataPost = (req, res) => {
    res.send('sou sua nova rota de post');
}