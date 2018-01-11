/**
 * Routes for latex management
 *
 * @param app
 */
module.exports = function (app) {

    /**
     * Retrieve all latex documents for the project
     */
    app.get('/test', function (req, res) {
        res.send({
            'documents': 'docs'
        })
    })

}
