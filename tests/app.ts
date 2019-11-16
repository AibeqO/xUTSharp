import 'jasmine'
import 'test'

describe('Test add func', function () {
    it('add', function () {
        let result = add(5, 2);
        expect(result).toEqual(7);
    });
});