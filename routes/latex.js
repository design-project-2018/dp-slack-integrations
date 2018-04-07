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
          },
	      {
	        'title': 'Progress Report 1',
		    'text': 'https://www.overleaf.com/13631684wkzzjqthsbnb'
          },
          {
	        'title': 'Progress Report 2',
		    'text': 'https://www.overleaf.com/14059579ttgyqfyhyjjv'
          },
          {
	        'title': 'Progress Report 3',
		    'text': 'https://www.overleaf.com/14888379sjzhfgfxstvs'
          },
          {
	        'title': 'Final Report',
		    'text': 'https://www.overleaf.com/14881745bbjfbzdvpbqr'
          },
          {
	        'title': 'Final Presentation',
		    'text': 'https://docs.google.com/presentation/d/13FJwwZvvDbTwGJ1CDsYKz_pVcsQBzQUr7wTHu6BFo54/edit#slide=id.g36ae7cbb60_0_14'
          }
          ]
      })
  })
}
