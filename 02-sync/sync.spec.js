const Lodash = require('./sync')

let _ = new Lodash();

describe("Lodash: compact", ()=>{
    let array;
    beforeEach(() => {
        array = [false, 42, 0, "", true, "hi", null];
    })
    afterAll(() => {
        _ = new Lodash();
    })
    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })
    test('should working arr editable', () => {
        array.push(...['one','two'])
        expect(array).toContain('one')
        expect(array).toContain('two')
    })
    test('should remove falsy values from arr', () => {
        const arrayRes = [42, true, "hi"];
        expect(_.compact(array)).toEqual(arrayRes)
    })
    test('should NOT contain falcy values', () => {
        const array = [false, 42, 0, "", true, "hi", null];
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain("")
        expect(_.compact(array)).not.toContain(null)
    })
})


describe("Lodash: groupBy", () => {
    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })

    test('should group array items by math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1];
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('should group array items by langth', () => {
        const array = ['one','two', 'three'];
        const result = {
            5: ['three'],
            3: ['one','two']
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('should NOT return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})