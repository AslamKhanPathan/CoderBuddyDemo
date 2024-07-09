// get methode  for recive data from backend
export async function simpleGetCall(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    const result = await response.text();
    return getResult(result);
  } catch (error) {
    console.error("Error fetching data: ", error);
    // You can also throw the error or return a default value if necessary
    throw error;
  }
}

// post methode  for add data in  backend
export async function simplePostCall(url, requestBody) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: requestBody,
    });

    const result = await response.text();
    return getResult(result);
  } catch (error) {
    console.error("Error posting data: ", error);
    // You can also throw the error or return a default value if necessary
    throw error;
  }
}

// parse data recieve request body
export async function getResult(data) {
  return JSON.parse(data.trim());
}
