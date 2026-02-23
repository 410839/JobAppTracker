const axios = require('axios');

const API_BASE = process.env.REACT_APP_API_BASE_URL;

const header_details = {'Content-Type': 'application/json; charset=UTF-8'};

async function perform_request(url, method_type, body_details=null) {
    try {
        let request_details = {method: method_type}
        if (body_details != null) {
            request_details.body = JSON.stringify(body_details);
            request_details.headers = header_details;
        }
        const response = await fetch(url, request_details);
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

export async function getJobs(page = null, status = null) {
    let full_url = `${API_BASE}/jobs`;
    if (page != null) {
        
    }

    
    const data = await perform_request(full_url, "GET");
    return data;
}

export async function createJob(jobData) {
    const full_url = `${API_BASE}/jobs`;
    const data = await perform_request(full_url, "POST", jobData);
    return data;
}

export async function deleteJob(id) {
    const full_url = `${API_BASE}/jobs/${id}`;
    const data = await perform_request(full_url, "DELETE");
    return data;
}

export async function patchJob(id, jobData) {
    const full_url = `${API_BASE}/jobs/${id}`;
    const data = await perform_request(full_url, "PATCH", jobData);
    return data;
}

