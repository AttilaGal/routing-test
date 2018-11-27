const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    bar: 'success'
  });
});

module.exports = router;
