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
  app.post('/documents', function (req, res) {
      res.send({
          'text': 'All latex documents',
          'attachments': [
              {
                  'title': 'Project Proposal',
                  'text': 'https://www.overleaf.com/13160242vmdqjmxwmcgs#/50592578/'
              }
          ]
      })
  })
}
