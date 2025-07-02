exports.handler = async function (event, context) {
    const cookie = event.headers.cookie || "";
  
    const isAuthenticated = cookie.includes("auth=true");
  
    if (!isAuthenticated) {
      return {
        statusCode: 302,
        headers: {
          Location: "/login.html",
        },
      };
    }
  
    return {
      statusCode: 200,
      body: "Authorized", // You can customize this if needed
    };
  };
  