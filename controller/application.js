const Post = require('../models/post')

// router.get('/', applicationController.index)
module.exports = {
  index: (req, res) => {
    if (req.params.id !== 'favicon.ico') {
      Post.find({})
        .sort({ createdAt: -1 })
        .limit(10)
        .populate('author')
        .then(posts => {
          res.render('app/index', { posts })
        })
    } else {
      res.send('hello world')
    }
  }
}
