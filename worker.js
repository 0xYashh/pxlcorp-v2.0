export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // Change the hostname to your Supabase project URL
        url.hostname = 'jrvumcoxzzzciplrfqwq.supabase.co';

        // Check if the request is for a WebSocket
        const upgradeHeader = request.headers.get('Upgrade');
        if (upgradeHeader && upgradeHeader.toLowerCase() === 'websocket') {
            const modifiedRequest = new Request(url.toString(), {
                method: request.method,
                headers: request.headers,
            });
            // Fetch from Supabase with WebSocket pass-through
            return fetch(modifiedRequest);
        }

        // Handle standard HTTP requests
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                status: 204,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': '*',
                }
            });
        }

        const modifiedRequest = new Request(url.toString(), {
            method: request.method,
            headers: request.headers,
            body: request.body,
            redirect: 'follow'
        });

        const response = await fetch(modifiedRequest);

        // Create a new response to modify headers for CORS
        const newHeaders = new Headers(response.headers);
        newHeaders.set('Access-Control-Allow-Origin', '*');
        newHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        newHeaders.set('Access-Control-Allow-Headers', '*');

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
        });
    }
};
