const { getJobs, createJob, deleteJob, patchJob } = require('./src/services/jobService');

const header_details = {'Content-Type': 'application/json; charset=UTF-8'};

const API_BASE = process.env.REACT_APP_API_BASE_URL;

beforeEach(() => {
    fetch.resetMocks();
});

test('Get jobs returns data when fetch is successful', async () => {
    const mockJobs = [{id: 1, date: '2026', company_name: "Software Company", job_title: "Software developer", link_to_job_app: "www.youtube.com", status: "interviewing"}];
    fetch.mockResponseOnce(JSON.stringify(mockJobs));

    const data = await getJobs();
    expect(data).toEqual(mockJobs);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE}/jobs`, {method: "GET"});
});

test('Create Job App sends post request when fetch is successful', async () => {
    const mockJobApp = [{id: 1, date: "2026", company_name: "Software Company", job_title: "Software developer", link_to_job_app: "www.youtube.com", status: "interviewing"}];
    fetch.mockResponseOnce(JSON.stringify(mockJobApp));
    const data = await createJob(mockJobApp);

    expect(data).toEqual(mockJobApp);

    expect(fetch).toHaveBeenCalledWith(`${API_BASE}/jobs`, {body: JSON.stringify(mockJobApp), headers: header_details, method: "POST"});
});

test('Patch job app works correctly', async () => {
    const mockJobs = [{id: 1, date: '2025', company_name: "Software Company", job_title: "Software developer", link_to_job_app: "www.youtube.com", status: "interviewing"}];
    fetch.mockResponseOnce(JSON.stringify(mockJobs));
    
    
    const data = await patchJob(1, {date: 2025});
    expect(data).toEqual(mockJobs);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE}/jobs/1`, {body: JSON.stringify({date: 2025}), headers: header_details, method: "PATCH"});

});

test('Delete job app works correctly', async () => {
    const mockJobs = [{id: 1, date: '2026', company_name: "Software Company", job_title: "Software developer", link_to_job_app: "www.youtube.com", status: "interviewing"}];
    fetch.mockResponseOnce(JSON.stringify(mockJobs));
    
    
    const data = await deleteJob(1);
    expect(data).toEqual(mockJobs);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE}/jobs/1`, {method: "DELETE"});

});

test('Get jobs error gives correct httpexception', async () => {
    
    fetch.mockResponseOnce(JSON.stringify({}), {status: 500, ok: false});

    await expect(getJobs()).rejects.toThrow('HTTP error status: 500');

    expect(fetch).toHaveBeenCalledWith(`${API_BASE}/jobs`, { method: "GET" });
});