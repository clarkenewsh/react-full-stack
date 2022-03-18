export const createUser = async (username, email, pass, setUser) => {
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
    setUser(data.user);
    // store user token in local storage
    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, pass, setUser) => {
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
    setUser(data.user);
    // store user token in local storage
    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};


export const tokenLogin = async (setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "GET",
      headers: {Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await response.json();
    setUser(data.user);
  } catch (error) {
    console.log(error)
  }
};

export const deleteUser = async (user, setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user/${user.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('myToken')}`,
      },
    });
    const data = await response.json();
    // Testing delete 
    console.log("deleted user", data);
    setUser();
  } catch (error) {
    console.log(error)
  }
};