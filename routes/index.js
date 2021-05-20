var express = require('express')
var child_process = require('child_process')

var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.post('/', (req, res, next) => {
  let oldpath = req.files.filetoupload.path
  let newpath = './uploads/' + req.files.filetoupload.name.substring(0, req.files.filetoupload.name.lastIndexOf('.'))+'.jpeg'
  newpath = newpath.replace(/ /g, '\\ ')
  console.debug(`convert ${oldpath} ${newpath}`)
  let child = child_process.exec(`convert ${oldpath} ${newpath}`, (err, stdout, stderr) => {
    if (err) return res.status(500).send('Oh no!')
    console.debug(`jp2a -i --width=${req.fields.width} ${newpath}`)
    let child = child_process.exec(`jp2a -i --width=${req.fields.width} ${newpath}`, (err, stdout, stderr) => {
      if (err) return res.status(500).send('Oh no!')

      res.setHeader("Content-Type", "text/plain");
      res.send(stdout)
    })
  })
})

module.exports = router
