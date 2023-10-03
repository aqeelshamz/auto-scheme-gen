API Documentation: User Management

This API provides endpoints to manage users, including Signup, Login, and JWT verification.


---

### User API

The user API provides endpoints for user signup, login, and JWT verification.

#### Signup

Create a new user account by sending a POST request to the `/signup` endpoint.

```http
POST /user/signup
```

Request body:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password"
}
```

- `name` (String, required): The name of the user.
- `email` (String, required): The email address of the user.
- `password` (String, required): The password for the user.

#### Login

Authenticate a user by sending a POST request to the `/login` endpoint.

```http
POST /user/login
```

Request body:

```json
{
  "email": "john.doe@example.com",
  "password": "password"
}
```

Response: An authentication token and user data.

#### JWT Verification

Verify a JWT token and retrieve user information by sending a GET request to the `/verify` endpoint.

```http
GET /user/verify
```

Request header:

```
auth-token: <jwt_token>
```

Response: User information extracted from the JWT token.

