const jwt = require('jsonwebtoken');
const { finished } = require ('stream/promises');


const { JWT_SECRET } = process.env
const getUser = (token)=> {
  if (token) {
    return jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] }, (err, payload) => {

      return err ?
        err.name == "TokenExpiredError" ?
          { tokenExpired: true } : { tokenInvalid: true }
        : payload

    })
  }
  return null
}



const singleUpload = async ({ file }) => {

  const { createReadStream, filename, mimetype, encoding } = await file;
  const stream = createReadStream();

  const out = require('fs').createWriteStream("public/Images/" + filename);
  stream.pipe(out);
  await finished(out);

  return { filename, mimetype, encoding };
}

module.exports = {
    getUser,
    singleUpload
}