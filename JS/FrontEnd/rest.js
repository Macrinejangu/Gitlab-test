/*
API (Application Programming Interface)
--------------------------------------
An API is a way for two or more applications to communicate with each other.
Think of an API as a bridge that allows different software systems to exchange information.
Examples of APIs:

1. Mobile APIs
----------------
Mobile applications use APIs to communicate with device features.
Example:
- Bluetooth API allows an Android app to communicate with Bluetooth devices.
- Android Developer Tools provide documentation on how to use these APIs.

2. Node.js APIs
----------------
Node.js provides APIs that allow developers to interact with the computer system.
Example:
File System API (fs)
It allows Node.js programs to:
- Create files
- Read files
- Update files
- Delete files

Example command:
touch filename
Creates a new file using the terminal.
Node.js can also communicate directly with the computer shell.
Rules and guidelines define how applications communicate with each other.

REST API
========
REST stands for:
Representational State Transfer
REST API is a set of rules that allows applications and devices
to communicate over the internet using HTTP or HTTPS.

HTTP:
HyperText Transfer Protocol

HTTPS:
Secure version of HTTP

How REST APIs work
------------------
A client sends a request.
A server receives the request, processes it, and sends back a response.
Example:
Client (Browser/App) -> Request  
Server -> Response
Client

Applications that can use REST APIs
-----------------------------------
A device must be able to connect to the internet and act as an HTTP client.
Examples:
1. Computers
   - Laptop
   - Desktop
2. Mobile devices
   - Smartphones
   - Tablets
3. IoT devices
   - Smart watches
   - Smart home devices
HTTP Clients
------------
HTTP clients are tools or applications that send requests to servers.
Examples:
1. Browser
   - Chrome
   - Firefox
   - Safari
2. cURL
   - A command line tool used to make HTTP requests.
3. Postman
   - A tool used for testing APIs

REST API Communication
----------------------
REST communication follows a request-response pattern.
1. Client sends a request.
Example:
A user opens an app and requests their profile information.
2. Server receives the request.
3. Server processes the request.
4. Server sends a response back to the client.

Making an API Request
---------------------
An API request contains several parts:
1. URL
URL means Universal Resource Locator.
It tells the application where to send the request.

Example:
https://api.example.com/users
2. HTTP Method
The method tells the server what action to perform.
Common methods:

GET
- Retrieve data from a server.

POST
- Send new data to a server.

PATCH
- Update existing data.

DELETE
- Remove data.

3. Headers
Headers provide extra information about the request.
Examples:
- Authentication tokens
- Content type
- Security information

4. Body
The body contains data sent to the server.
Examples:
- Forms
- Images
- JSON data

5. Parameters
Parameters provide additional information.
They are often used for:
- Searching
- Filtering
- Sorting

Example:
https://api.example.com/users?name=John
Testing APIs with Postman and cURL

Practice:
1. Install Postman.
2. Visit any website.
3. Open Developer Tools.
4. Go to the Network tab.

5. Identify:
- Request method (GET, POST, etc.)
- Request URL
- Parameters
- Request time

6. Try making the same request using:
- Postman
- cURL

This helps understand how websites communicate with servers.
*/