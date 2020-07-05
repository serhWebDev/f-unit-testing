const Ajax = require('./asynch');
const axios = require("axios");

jest.mock('axios')

describe('Ajax: echo', () => {
    test('should return value asyc', async () => {
        const result = await Ajax.echo('some data')
        expect(result).toBe('some data')
    } )
    test('should return value with promise', () => {
        Ajax.echo('some data').then(data => {
            expect(data).toBe('some data')
        })
    } )
    test('should catch error with promise', () => {
        Ajax.echo('some data').catch(err => {
            expect(err).toBeInstanceOf('some data')
        })
    } )
    test('should catch error with promise', async () => {
        try {
            await Ajax.echo()
        } catch (e) {
            expect(e.message).toBe('error')
        }
    } )
})

describe('Ajax: get', () => {
    let response
    let todos

    beforeEach(() => {
        todos = [
            {id: 1, title: 'Todo 1', completed: false}
        ]
        response = {
            data: {
                todos
            }
        }
    })

    test('should return data from backend', () => {
        axios.get.mockReturnValue(response)
        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    })
})