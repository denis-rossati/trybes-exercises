#!/bin/bash

# exercicio 1
# Defina uma regra de firewall que bloqueie toda entrada de pacotes utilizando o protocolo ICMP.
sudo iptables -A INPUT -p icmp -j REJECT

# exercicio 2
# Exclua a regra anterior
sudo iptables -D INPUT 1

# exercicio 3 / exercicio 4
# Crie uma regra para bloquear o tráfego HTTPS. / Bloqueie agora o tráfego de saída para HTTP
sudo iptables -A OUTPUT -p tcp -m multiport --sport 80,443 -j REJECT

# exercicio 5
# Limpe todas regras
sudo iptables --flush

# exercício 6 
# utilize um proxy na porta de sua escolha: NGROK
# ps: execute o example.js
ngrok https 8000

# exercicio 7
# Gere um certificado SSL
openssl genrsa -out key.pem # gera uma chave ssl em um arquivo
openssl req -new -key key.pem -out csr.pem # fazemos uma nova requisição usando um arquivo que contém informações sobre nosso certificado
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem # definimos a assinatura do certificado e o criamos de fato
rm csr.pem

# 7.1: Escreva um servidor https usando os módulos nativos do python ssl e http.server (./server/exercise_7.1.py)