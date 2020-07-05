const {map} = require('./mock')

describe('Map func', () => {
    let array
    let fn
    beforeEach(() => {
        array = [1,2,3,5]
        fn = jest.fn(x => x ** 2)
    })

    test('should call callback', () => {
        map(array,fn)
        expect(fn).toBeCalled()
    })

    test('should call callback 4 times', () => {
        map(array,fn)
        expect(fn).toBeCalledTimes(4)
        expect(fn.mock.calls.length).toBe(4)
    })

    test('should pow 2 each element', () => {
        map(array,fn)
        expect(fn.mock.results[0].value).toBe(1)
        expect(fn.mock.results[1].value).toBe(4)
        expect(fn.mock.results[2].value).toBe(9)
        expect(fn.mock.results[3].value).toBe(25)
    })

    test('should fn work', () => {
        fn
            .mockReturnValueOnce(100)
            .mockReturnValueOnce(200)
            .mockReturnValue('42')
        expect(fn()).toBe(100)
        expect(fn()).toEqual(200)
        expect(fn()).toEqual('42')
        expect(fn()).toEqual('42')
    })
})