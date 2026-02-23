const { beforeEach } = require('node:test');
const { getJobs } = require('./src/services/jobService');

let fetchMock;
const MOCK_DATA = {name: 'Test'};

beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(MOCK_DATA),
        
    }))
})