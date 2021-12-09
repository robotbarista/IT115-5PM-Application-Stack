const express = require('express');
const router = express.Router();

// Load Vinyl model
const Vinyl = require('../../models/Vinyl');

// @route GET api/vinyl/test
// @description tests vinyl route
// @access Public
router.get('/test', (req, res) => res.send('vinyl route testing!'));

// @route GET api/vinyl
// @description Get all vinyl
// @access Public
router.get('/', (req, res) => {
  Vinyl.find()
    .then(vinyl => res.json(vinyl))
    .catch(err => res.status(404).json({ novinylfound: 'No Vinyls found' }));
});

// @route GET api/vinyl/:id
// @description Get single vinyl by id
// @access Public
router.get('/:id', (req, res) => {
  Vinyl.findById(req.params.id)
    .then(vinyl => res.json(vinyl))
    .catch(err => res.status(404).json({ novinylfound: 'No Vinyls found' }));
});

// @route GET api/vinyl
// @description add/save vinyl
// @access Public
router.post('/', (req, res) => {
  Vinyl.create(req.body)
    .then(vinyl => res.json({ msg: 'Vinyl added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this vinyl' }));
});

// @route GET api/vinyl/:id
// @description Update vinyl
// @access Public
router.put('/:id', (req, res) => {
  Vinyl.findByIdAndUpdate(req.params.id, req.body)
    .then(vinyl => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/vinyl/:id
// @description Delete vinyl by id
// @access Public
router.delete('/:id', (req, res) => {
  Vinyl.findByIdAndRemove(req.params.id, req.body)
    .then(vinyl => res.json({ mgs: 'Vinyl entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such vinyl' }));
});

module.exports = router;