const R = require('ramda');
const shortid = require('shortid');
const store = [];

const create = (original) => {
    const payload = { original, short: shortid.generate() };
    store.push(payload);
    return payload;
};

const read = (short) => {
    return R.find(R.propEq('short', short))(store)
};

module.exports = {
    create,
    read
};
