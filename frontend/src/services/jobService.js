
const API_BASE = process.env.REACT_APP_API_BASE_URL;


const header_details = {'Content-Type': 'application/json; charset=UTF-8'};

async function perform_request(url, method_type, body_details=null) {
    try {
        
        let request_details = {method: method_type};
        console.log(request_details);
        if (body_details != null) {
            request_details.body = JSON.stringify(body_details);
            request_details.headers = header_details;
        }
        const response = await fetch(url, request_details);
        if (!response.ok) {
            if (response.status === 404) {
                return [];
            }
            throw new Error(`Server Error`);
        }
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error('Fetch Error:', error);
        throw error;
    }
}

export async function getJobs(filters = {}) {
    const activeFilters = Object.fromEntries(
        Object.entries(filters).filter(([key, value]) => value !== "")
    );
    const params = new URLSearchParams(activeFilters);
    let full_url = `${API_BASE}/jobs/?${params.toString()}`;
    const data = await perform_request(full_url, "GET");
    return data;
}

async function createJob(jobData) {
    const full_url = `${API_BASE}/jobs/`;
    const data = await perform_request(full_url, "POST", jobData);
    return data;
}

async function deleteJob(id) {
    const full_url = `${API_BASE}/jobs/${id}`;
    const data = await perform_request(full_url, "DELETE");
    return data;
}

async function patchJob(id, jobData) {
    const full_url = `${API_BASE}/jobs/${id}`;
    const data = await perform_request(full_url, "PATCH", jobData);
    return data;
}

// export default {getJobs, createJob, deleteJob, patchJob};