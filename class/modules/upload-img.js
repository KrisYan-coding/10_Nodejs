
const multer = require('multer');
const {v4 : uuidv4} = require('uuid');

const extMap = {
    'image/jpeg' : '.jpg',
    'image/png' : '.png',
    "video/mp4" : '.mp4'
};

const fileFilter = (req, file, cb) => {
    cb(null, !!extMap[file.mimetype]);
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/../public/uploads');
    },
    filename: (req, file, cb) => {
        const filename = uuidv4() + extMap[file.mimetype];
        cb(null, filename);
    }
});

module.exports = multer({fileFilter, storage});