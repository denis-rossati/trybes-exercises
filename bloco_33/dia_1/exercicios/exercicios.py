from contextlib import _GeneratorContextManager
import math

# Para exercitar nossa capacidade de abstração, vamos modelar algumas partes de um software de geometria. Como poderíamos modelar um objeto retângulo?


class Quadrado:
    def __init__(self, comprimento, largura):
        self.comprimento = comprimento
        self.largura = largura

    
    def perimetro(self):
        return (self.comprimento * 2) + (self.largura * 2)


    def area(self):
        return self.largura * self.comprimento


# E como poderíamos definir um círculo? 


class Circulo:
    def __init__(self, raio):
        self.raio = raio
        self.circunferencia = raio * 2

    def area(self):
        return math.pi * pow(self.raio, 2)


# Vamos mudar um pouco nosso contexto para um sistema de vendas de uma cafeteria. Como podemos abstrair um pedido composto por vários itens? Qual seu nome, atributos e comportamentos?


class Salao:
    def __init__(self, mesas_disponiveis):
        self.max_mesas = mesas_disponiveis
        self.mesas_disponiveis = mesas_disponiveis

    def checa_mesas_disponiveis(self):
        return self.mesas_disponiveis

    def indisponibiliza_mesas(self, quantidade):
        if (self.mesas_disponiveis - quantidade >= 0):
            self.mesas_disponiveis -= quantidade
            return 'Mesa reservada'
        else:
            return 'Salão lotado'

    def disponibiliza_mesas(self, quantidade):
        if (self.mesas_disponiveis + quantidade <= self.max_mesas):
            self.mesas_disponiveis += quantidade
            return 'Mesa livre'
        else:
            return 'Não temos tantas mesas'



class Cozinha:
    def __init__(self, recepcao):
        self.recepcao = recepcao

    def preparar_pedidos(self, pedidos):
        for pedido in pedidos:
            self.recepcao.alertar_garcom_sobre_pedido(pedido)

    def receber_pedidos(self, pedidos):
        self.preparar_pedidos(pedidos)


class Garcom:
    def __init__(self, nome, cozinha, salao):
        self.nome = nome
        self.cozinha = cozinha
        self.salao = salao

    def levar_pedido_para_cozinha(self, pedido):
        return self.cozinha.receber_pedidos(pedido)

    def anotar_pedido(self, pedidos):
        return self.levar_pedido_para_cozinha(pedidos)

    def levar_pedido_ao_cliente(refeicao):
        return refeicao

    def preparar_mesas(self, quantidade):
        return self.salao.indisponibiliza_mesas(quantidade)

    def limpar_mesas(self, quantidade):
        return self.salao.disponibiliza_mesas(quantidade)
    

class Recepcao:
    def __init__(self, salao, garcom, cozinha):
        self.salao = salao
        self.garcom = garcom
        self.cozinha = cozinha

    def alertar_garcom_sobre_pedido(self, pedido)
        self.garcom.levar_pedido_ao_cliente(pedido)

    def reservar_mesa(self, quantidade):
        return self.garcom.preparar_mesas(quantidade)

    def liberar_mesa(self, quantidade):
        return self.garcom.limpar_mesas(quantidade)


class Cafeteria:
    def __init__(self):
        self.salao = Salao(50)
        self.cozinha = Cozinha()
        self.pedro = Garcom('Pedro', self.cozinha, self.salao)
        self.recepcao = Recepcao(self.salao, self.pedro, self.cozinha)

    def receber_cliente(self, mesa):
        self.recepcao.reservar_mesa(mesa)

    def liberar_cliente(self, mesa):
        self.recepcao.liberar_mesa(mesa)

    def receber_pedidos(self, pedidos):
        self.pedro.anotar_pedido(pedidos)