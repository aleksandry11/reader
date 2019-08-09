const multer = require('multer');
const path = require('path');

class MulterStorage
{
    constructor(dir)
    {
        this.storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, dir + '/');
            },
            filename: (req, file, cb) => {
                cb(null, this.generateFileName(file.originalname));
            }
        })
    }

    generateFileName(name)
    {
        return new Date().toISOString().slice(0, 10) + '-' + name.replace(path.extname(name), '') + path.extname(name)
    }

    static isAllowed(originalname)
    {
        const ext = path.extname(originalname);
        if (ext.match(/^.(doc|docx|pdf)$/i)) {
            return true;
        } else {
            return false;
        }
    }

    config()
    {
        return multer({
            storage: this.storage,
            fileFilter: function (req, file, cb) {
                if (MulterStorage.isAllowed(file.originalname)) {
                    cb(null, true);
                } else {
                    cb(null, false);
                    req.files = [{error: 'Sorry, presented file is not supported'}];
                }
            }
        });
    }
}


const upload = new MulterStorage('uploads').config();

module.exports = upload;