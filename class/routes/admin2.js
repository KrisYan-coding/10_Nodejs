
const express = require('express');
const router = express.Router();

router.get('/admin2/:action?/:id?', (req, res) => {
    const { url, baseUrl, originalUrl } = req;
    res.json({
        ...req.params,
        url,  // routers 內的路徑
        baseUrl, // url 前面的路徑
        originalUrl // 完整路徑
    })
});

module.exports = router;