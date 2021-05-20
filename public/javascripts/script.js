function getConversion(event) {
  event.preventDefault()
  file = event.target.filetoupload.files[0]
  width = event.target.width.value

  let formData = new FormData()
  formData.append('filetoupload', file)
  formData.append('width', width)
  spinner.classList.remove('invisible')
  imgcontent.classList.add('invisible')
  fetch('/', {
    method: 'POST',
    body: formData
  }).then(response => {
    if (!response.ok) throw 'Response not ok'
    return response.text()
  }).then(text => {
    imgcontent.innerHTML = text
    imgcontent.style['font-size'] = `calc(1vw*166/${width})`
    imgcontent.classList.remove('invisible')
    spinner.classList.add('invisible')
  }).catch(err => {
    console.error(err)
    imgcontent.innerHTML = 'ERROR'
    imgcontent.style['font-size'] = '8pt'
    imgcontent.classList.remove('invisible')
    spinner.classList.add('invisible')
  })
}
