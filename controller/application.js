const Post = require('../models/post')

// router.get('/', applicationController.index)
module.exports = {
  home: (req, res) => {
    res.render('app/home')
  },
  index: (req, res) => {
    Post.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate('author')
      .then(posts => {
        res.json(posts)
      })
  }
}
