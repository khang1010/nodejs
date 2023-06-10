import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
    connection.query(
        'SELECT * FROM `users`', (err, results, fields) => {
            let data = results.map((row) => {
                return row;
            })
            return res.render('index.ejs', {dataUser: data});
        }
    )
}

module.exports = {
    getHomePage,
}