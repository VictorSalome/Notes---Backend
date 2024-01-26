const Annotations = require('../models/AnnotationData')


module.exports = {

    create(request, response) {
    const { title, notes, priority } = request.body

    console.log(title)
    console.log(notes)
    console.log(priority)

}

}