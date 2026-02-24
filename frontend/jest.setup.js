require('dotenv').config({ path: '.env.test' });

const fetchMock = require('jest-fetch-mock');

fetchMock.enableMocks();
