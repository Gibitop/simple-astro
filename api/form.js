/** @param {Request} request */
export async function POST(request) {
	const body = await request.json();

	return new Response(
		JSON.stringify({
			request: body,
			currentServerTime: new Date().toISOString(),
		}),
	);
}
