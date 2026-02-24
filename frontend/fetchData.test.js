const { getJobs, createJob, deleteJob, patchJob } = require('./src/services/jobService');

beforeEach(() => {
    fetch.resetMocks();
});

test('Get jobs returns data when fetch is successful', async () => {
    const mockJobs = [{id: 1, company_name: "Software Company", job_title: "Software developer", link_to_job_app: "www.youtube.com", status: "interviewing"}];
    fetch.mockResponseOnce(JSON.stringify(mockJobs));

    const data = await getJobs();
    expect(data).toEqual(mockJobs);
    expect(fetch).toHaveBeenCalledWith('http://localhost:8000/jobs', {method: "GET"})
})