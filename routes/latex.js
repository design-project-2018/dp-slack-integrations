/**
 * Routes for latex management
 *
 * @param app
 */
module.exports = function (app) {

  app.get('/', function (req, res) {
    res.send('Test')
  })

    /**
     * Retrieve all latex documents for the project
     */
  app.post('/documents', function (req, res) {
      res.send({
          'text': 'All documents',
          'attachments': [
	      {
		  'title': 'Google Drive',
		  'text': 'https://drive.google.com/drive/folders/10YtrS7klwOXfVfE8NbxthsQNgbCBZefL'
	      },
              {
                  'title': 'Project Proposal',
                  'text': 'https://www.overleaf.com/13160242vmdqjmxwmcgs#/50592578/'
              }
          ]
      })
  })
}
