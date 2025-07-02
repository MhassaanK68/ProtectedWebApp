exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
  
    const body = JSON.parse(event.body || "{}");
    const inputPassword = body.password;
    const expectedPassword = process.env.PASSWORD;
  
    if (inputPassword !== expectedPassword) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Unauthorized" }),
      };
    }
  
    return {
      statusCode: 200,
      headers: {
        "Set-Cookie": `auth=true; Path=/; HttpOnly; Max-Age=86400`, // 1 day
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: "Logged in" }),
    };
  };
  