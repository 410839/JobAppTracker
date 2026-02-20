

const API_BASE = "give "

export async function getJobs(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }
    
        const data = await response.json();
        console.log(data);
        return data

    } catch (error) {
        console.error('Fetch Error:', error);

    }
}

export async function createJobs(url) {
    try {
        const response = await fetch(url)
    }
}