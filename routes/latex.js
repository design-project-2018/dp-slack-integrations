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
    res.send({
      'documents': [
        {
          'name': 'Project Proposal',
          'url': 'https://www.overleaf.com/13160242vmdqjmxwmcgs#/50592578/'
        }
      ]
    })
  })
}
