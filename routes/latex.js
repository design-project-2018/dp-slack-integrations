var request = require('request');
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
      var options = {
          url: 'https://hooks.slack.com/services/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',
          method: 'POST',
          headers: {
              'User-Agent':       'Super Agent/0.0.1',
              'Content-Type':     'application/json'
          },
          form: {
              'attachments': [
                  {
                      'title': 'Project Proposal',
                      'text': 'https://www.overleaf.com/13160242vmdqjmxwmcgs#/50592578/'
                  }
              ]
          }
      }
      request(options, function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body)
          }
      })
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
