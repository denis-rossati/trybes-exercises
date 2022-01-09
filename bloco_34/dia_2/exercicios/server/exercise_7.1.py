# not gonna lie, I just followed the documentation line by line: https://docs.python.org/3/library/ssl.html
import http.server
import socketserver
from ssl import SSLContext, PROTOCOL_TLS_SERVER
from socket import socket, AF_INET, SOCK_STREAM

context = SSLContext(PROTOCOL_TLS_SERVER)
context.load_cert_chain('./cert.pem', './key.pem')

with socket(AF_INET, SOCK_STREAM, 0) as sock:
  Handler = http.server.SimpleHTTPRequestHandler
  httpd = socketserver.TCPServer(('localhost', 8003), RequestHandlerClass=http.server.SimpleHTTPRequestHandler)
  sock.listen(5)
  httpd.serve_forever()
  with context.wrap_socket(httpd, server_side=True) as ssock:
    conn, addr = ssock.accept()
