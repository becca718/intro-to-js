fetch("https://api-to-call.com/endpoint", {
  method: "POST",
  body: JSON.stringify({ id: "200" })
})
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
