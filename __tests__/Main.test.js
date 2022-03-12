import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import Main from '../src/screen/Main'

const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve([]),
        })
})

afterAll(() => {
    global.fetch = unmockedFetch
})

const getMockData = async () => {
    const res = await fetch("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
        .then(response => response.json())
        .then(result => result)
    return res
}

it('fetch correctly', async () => {
    const mockData = await getMockData()
    expect(Array.isArray(mockData)).toEqual(true)
})


// async function withFetch() {
//     const res = await fetch('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
//     const json = await res.json()
  
//     return json
//   }

// describe('withFetch', () => {
//     test('works', async () => {
//         // highlight-start
//         const fetchMock = jest
//             .spyOn(global, 'fetch')
//             .mockImplementation(() =>
//                 Promise.resolve({ json: () => Promise.resolve([]) })
//             )
//         // highlight-end

//         const json = await withFetch()
//         expect(fetchMock).toHaveBeenCalledWith(
//             'https://5fc9346b2af77700165ae514.mockapi.io/simpsons'
//         )

//         expect(Array.isArray(json)).toEqual(true)
//         expect(json.length).toEqual(0)
//         console.log(json)
//     })
// })