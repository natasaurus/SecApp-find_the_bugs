filename = input("Nom du fichier : ")
with open("data/" + filename, "r") as f:
    print(f.read())