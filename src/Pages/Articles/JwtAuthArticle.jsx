import React from "react"
import Page from "../../components/Page"
import Article from "../../components/Article"
import BackButton from "../../components/BackButton"
import Code from "../../components/Code"

const JwtAuthArticle = () => {
  return (
    <Page>
      <BackButton to="/articles" />
      <Article>
        <Article.Header>
          <Article.DateTime>January 5, 2023</Article.DateTime>
          <Article.Title>
            Implementing JSON Web Token Authentication
          </Article.Title>
        </Article.Header>

        <Article.Prose>
          <p>
            Authentication is a critical aspect of modern web applications, and
            JSON Web Tokens (JWT) have become a popular choice for implementing
            secure and stateless authentication. In this article, we will
            explore how to implement JWT token authentication in a Node.js and
            Express application using the Bcrypt library for password hashing.
            We will cover the entire process, from user registration to
            generating and validating JWT tokens, ensuring a robust and secure
            authentication mechanism.
          </p>

          <h2>Installing Dependencies</h2>

          <p>
            Before we begin, let's set up our project by installing the required
            dependencies. Open your terminal and navigate to your project
            directory. Run the following command:
          </p>

          <Code language="bash">{`npm install express bcrypt jsonwebtoken dotenv`}</Code>

          <p>
            This installs Express, Bcrypt, JSON Web Token, and dotenv (for
            environment variable management).
          </p>

          <h2>Setting Up the Express Server</h2>

          <p>
            Create an <strong>index.js</strong> file and set up the basic
            Express server with the necessary middleware and routes. Add the
            following code:
          </p>

          <Code>{`const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
// Add your routes here

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(\`Server is running on port \${port}\`);
});`}</Code>

          <p>
            Make sure to require the necessary dependencies and initialize the
            Express app with appropriate middleware.
          </p>

          <h2>User Registration and Password Hashing</h2>

          <p>
            Let's create a user registration endpoint that will accept user
            details, hash the password using Bcrypt, and store the user in a
            database (for simplicity, we will use an in-memory array).
          </p>

          <Code>{`const users = [];

app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Store the user
    users.push({ username, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});`}</Code>

          <p>
            We use the <strong>bcrypt.hash</strong> function to generate a
            salted and hashed password, and then store the user details in our
            array.
          </p>

          <h2>User Login and JWT Generation</h2>

          <p>
            Now, let's implement the user login endpoint, where users can
            authenticate themselves and receive a JWT token upon successful
            login.
          </p>

          <Code>{`const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});`}</Code>

          <p>
            Here, we compare the hashed password with the one provided by the
            user using <strong>bcrypt.compare</strong>. If the password matches,
            we generate a JWT token using <strong>jsonwebtoken.sign</strong>,
            including the user's username in the payload and signing it with a
            secret key obtained from the environment variables.
          </p>

          <h2>Protecting Routes with JWT Authentication</h2>

          <p>
            To protect certain routes, we can create a middleware function that
            verifies the JWT token before allowing access to the protected
            resources.
          </p>

          <Code>{`const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  });
};
`}</Code>

          <p>
            This middleware function extracts the token from the{" "}
            <strong>authorization</strong>
            header, verifies it using <strong>jsonwebtoken.verify</strong>, and
            attaches the decoded user object to the <strong>req.user</strong>{" "}
            property if the token is valid.
          </p>

          <h2>Protected Route Example</h2>

          <p>
            Now, let's create a protected route that requires authentication to
            access. We will create a simple <strong>/dashboard</strong> route as
            an example.
          </p>

          <Code>{`app.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: \`Welcome, \${req.user.username}! This is your dashboard.\` });
});`}</Code>

          <p>
            By adding the <strong>authenticateToken</strong> middleware as a
            second argument to the route handler, we ensure that only
            authenticated users can access the dashboard route.
          </p>

          <h2>Testing the Authentication Flow</h2>

          <p>
            You can now test the authentication flow using tools like Postman or
            cURL. Perform the following steps:
          </p>

          <ul>
            <li>
              Register a user by sending a POST request to{" "}
              <strong>/register</strong> with a JSON payload containing the{" "}
              <strong>username</strong> and <strong>password</strong>.
            </li>

            <li>
              Log in with the registered user by sending a POST request to{" "}
              <strong>/login</strong> with the same JSON payload.
            </li>

            <li>The login endpoint will respond with a JWT token.</li>

            <li>
              To access the protected <strong>/dashboard</strong> route, include
              the token in the <strong>authorization</strong> header as{" "}
              <strong>bearer {"<token>"}</strong>.
            </li>

            <li>
              Send a GET request to <strong>/dashboard</strong>, and you should
              receive a response with a welcome message.
            </li>
          </ul>

          <h2>Conclusion</h2>

          <p>
            In this article, we explored the process of implementing JWT token
            authentication in a Node.js and Express application using the Bcrypt
            library for password hashing. We covered user registration, password
            hashing, user login, JWT token generation, protecting routes with
            JWT authentication, and testing the authentication flow.
          </p>

          <p>
            By following this comprehensive guide, you now have a solid
            foundation for implementing secure and stateless authentication in
            your Node.js and Express applications. Remember to handle errors,
            implement proper error handling middleware, and persist user data
            securely in a production-ready environment.
          </p>

          <p>
            JWT token authentication, coupled with Bcrypt for password hashing,
            provides a robust and scalable authentication mechanism for your
            backend applications. Use this knowledge to build secure and
            reliable authentication systems for your projects.
          </p>
        </Article.Prose>
      </Article>
    </Page>
  )
}

export default JwtAuthArticle
