fetch("https://api-to-call.com/endpoint")
  .then(
    (success = response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed!");
    }),
    (failure = networkError => {
      console.log(networkError.message);
    })
  )
  .then(
    (response = jsonResponse => {
      return jsonResponse;
    })
  );
