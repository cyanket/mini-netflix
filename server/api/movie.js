export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { id } = query;

  if (!id) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Incorrect movie id' })
    )
  }

  const apiKey = 'aa336af4';
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${encodeURIComponent(id)}`;

  try {
    // Get movie data from OMDb API
    const response = await $fetch(url);
    return response
  } catch (err) {
    // Handle any fetch errors
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: 'OMDb fetch failed' })
    )
  }
})
