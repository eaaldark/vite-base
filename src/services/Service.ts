import instance from "./Api";

/**
 * The function `Service` is an asynchronous function that sends a POST request to a specified
 * endpoint with the provided data and returns the response data or an error.
 * @param {any} data - The `data` parameter is an object that contains the user's login credentials. It
 * typically includes properties such as `email` and `password`.
 * @returns The function `Service` returns a Promise that resolves to a response data object if the
 * request is successful, or rejects with an error object if the request fails.
 */
export const Service = async (data: { params: unknown }) => {
  const { params } = data;

  const response = await instance
    .post(
      "/endpoint/to/backedn",
      {
        params,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((_res) => {
      return _res.data;
    })
    .catch((_err) => {
      return _err;
    });

  // console.log("Respuesta LoginUser:", response);

  return response;
};
