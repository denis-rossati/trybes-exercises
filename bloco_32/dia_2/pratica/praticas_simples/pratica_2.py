import sys

if __name__ == "__main__":
    for argument in sys.argv:
        print("Received ->", argument)

# sys.argv é uma lista com parâmetros recebidos e que é preenchida 
# automaticamente
# experimente rodar: 
# python3 pratica_2.py 1 2 3 4 "cinco"  