var db = require('../lib/db')
/**
 * Routes for latex management
 *
 * @param app
 */
module.exports = function (app) {

    app.get('/', function (req, res) {
        res.send('Hello')
    })

    /**
     * Retrieve all latex documents for the project
     */
    app.get('/documents', function (req, res) {
        db.query('SELECT * FROM documents',[] , function (err, data) {
            if (err) {
                return console.error('error running query', err)
            }
            res.send({
                'documents': data.rows
            })
        })
    })

}
