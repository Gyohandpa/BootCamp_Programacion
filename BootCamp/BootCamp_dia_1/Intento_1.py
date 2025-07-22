import random
print("""
        Welcome to a new one
        PIEDRA, PAPEL O TIJERA        
      En este momento iniciará un juego
      de piedra papel o tijera
Para elegir solo tendra que escribir el numero que representará tu elección:
      Piedra: 1
      Papel: 2
      Tijera: 3
      """)
numero_aleatorio= random.randint(1,3)

Jugador=int(input("Elección: "))
Computadora=(numero_aleatorio)


