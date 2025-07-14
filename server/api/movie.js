export default defineEventHandler(async (event) => {
  // Extract query parameters from the incoming request
  const query = getQuery(event);
  const { id } = query;

  // Return an error if no movie ID is provided
  if (!id) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Incorrect movie id' })
    );
  }

  const apiKey = 'aa336af4';
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${encodeURIComponent(id)}`;

  try {
    // Fetch movie data from OMDb API
    const response = await $fetch(url);
    return response;
  } catch (err) {
    // Handle any fetch errors
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: 'OMDb fetch failed' })
    );
  }
});
