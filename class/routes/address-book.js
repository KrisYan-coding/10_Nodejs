const express = require("express");
const db = require("../modules/connect-mysql");

const router = express.Router();

const getListData = async (req, res) => {
    
    const output = {
        totalRows: 0,
        totalPages: 0,
        page: 1
    }

    let page = +req.query.page || 1;

    if (page < 1) {
        return res.redirect(req.baseUrl);
    }

    const perPage = 20;
    const t_sql = "SELECT COUNT(1) totalRows FROM address_book";
    const [[{ totalRows }]] = await db.query(t_sql);
    const totalPages = Math.ceil(totalRows / perPage);

    let rows = [];
    if (totalRows > 0) {
        if (page > totalPages) {
            return res.redirect('?page=' + totalPages);
        };

        const sql = `SELECT * FROM address_book ORDER BY sid DESC LIMIT ${(page - 1) * perPage}, ${perPage}`;

        [rows] = await db.query(sql);
    }

    res.render('ab-list', { totalRows, totalPages, page, rows });
}

router.get("/", async (req, res) => {
    const output = await getListData(); 
    res.render("ab-list", {totalRows, totalPages, page, rows})
});

module.exports = router;