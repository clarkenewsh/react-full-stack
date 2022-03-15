export const createUser = async (username, email, pass, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify ({
        username: username,
        email: email,
        password: pass,
      }),
    });

    // convert response to json
    const data = await response.json();
    // set the user with response from the inputted form values
    setter(data.user);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, pass, setter) => {
  try {
    // target login user endpoint
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify ({
        username: username,
        password: pass,
      }),
    });

    // convert response to json
    const data = await response.json();
    // set the user with response from the inputted form values
    setter(data.user);
  } catch (error) {
    console.log(error);
  }
}