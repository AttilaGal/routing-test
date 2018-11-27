const express = require('express');
const router = express.Router();

function blockingMiddleware(req, res, next) {
  res.send({foo: "blocked"}).status(403);
}

router.get('/', blockingMiddleware, (req, res, next) => {
  res.json({
    foo: 'success'
  });
});

module.exports = router;
