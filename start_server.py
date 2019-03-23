from http.server import SimpleHTTPRequestHandler, HTTPServer

port = 8000
host = 'localhost'
server_address = (host, port)
server = HTTPServer(server_address, SimpleHTTPRequestHandler)
server.serve_forever()
