const router = require('express').Router();

const Posts = require('./posts-model');

router.post('/upload', (req, res) => {
    const post = req.body;
  
    Posts.add(post)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(error => {
        res.status(500).json({
          message: `There was an error attempting to upload post: ${error}.`
        });
      });
  });

router.get('/all', (req, res) => {
    Posts.find()
        .then(post => {
            res.json(post);
        })
        .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    Posts.findById(req.params.id)
        .then(post => {
            res.status(200).json(post);
        })
        .catch(error => {
            console.log(error)
            res.status(404).send({ msg: 'File not found' });
        })
});

router.delete('/:id', (req, res) => {
    Posts.remove(req.params.id)
        .then(remove => {
            res.status(200).json(remove)
        })
});

module.exports = router;
