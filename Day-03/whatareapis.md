# Learning Topic
## API
Application Program Interface(API) is a way for two software components to be able to communicate with one another using a set of 'definitions' and 'protocols'

Ex. Could be the 'weathers bureaus software system' containing daily reports of the weather data and the weather app API 'talking' to that system to display weather updates on your phone. 

**Communication: Server vs Client** 

* Client: Application sends a request to 'call' to the 'client'
* Server: Application sending a response to 'call' on that API 'Call'

## Types of API's
1. SOAP API:
2. RPC API:
3. Websocket API: 
4. REST API: 


## REST API: 
Definition: Representational State Transfer. REST - defines a set of functions(GET, PUT, DELETE etc) that could be communicated with on the client side to access 'server data'
* How does 'client' and 'server' exhchange data?: **HTTP**
* Follows the **standard architectural style**(details below)

Features: 
* Statelessness: servers do not save client data between the request
- response from the server is just 'plain data' without any GUI of the web page, similar to a 'url' link(plain text, HTTP)

Flexibility: 
* One of the most flexbible API's to work with on the web. 
- Reason: client can send a request to the server as actual data. The server could use the client input to start an internal function and then return(output) data pack to the client. 
- A Web API: is the processing(API) between the web server and the web browser. All web services use or consist of API's but not all API's are strictly for Web based services. You can have API's for internal or closed off situations too. 

##### Learning Resources: 
[AWS - What is an API(Applicaton Programing Interface)?](https://aws.amazon.com/what-is/api/)