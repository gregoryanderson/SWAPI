import { fetchCalls } from './apiFetchCalls';

describe('fetchCalls', () => {
    let mockResponse 

    beforeEach(() => {
        mockResponse = [
            {
                name: 'Alyssa',
                year: 1986,
                scroll: 'This is the crawl',
                type: 'films',
                isFavorite: false
            }
        ]

        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok:true,
                json: () => {Promise.resolve(mockResponse)}
            })
        })
    })

    it('Should call fetch with the correct URL', () => {
        fetchCalls()
        expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films')
    })

    it('Should return an array of films (HAPPY)', () => {
        expect(fetchCalls()).resolves.toEqual(mockResponse)
    })

    it('Should return an error (SAD)', () => {
        fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: false
            })
        })
        expect(fetchCalls()).rejects.toEqual(Error('Error fetching data'))
    })

    it('Should return an error if the promise rejects', () => {
        fetch = jest.fn().mockImplementation(() => {
            return Promise.reject({
                message: 'Server is down'
            })
        })
        expect(fetchCalls()).rejects.toEqual(Error('Server is down'))
    })
})