const store = require('../');

describe('store', () => {
    let testHash = '';
    const testUrl = 'http://test-url.com';
    describe('create', () => {
        it('returns the short and original url', () => {
            const expected = store.create(testUrl);
            testHash = expected.short;
            expect(expected).toEqual(expect.objectContaining({
                original: testUrl,
                short: expect.any(String)
            }));
        });
    });
    describe('read', () => {
        it('returns the short and original url', () => {
            expect(store.read(testHash)).toEqual(expect.objectContaining({
                original: testUrl,
                short: testHash
            }));
        });
    });
});
