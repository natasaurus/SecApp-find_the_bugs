import pickle
payload = input("Payload : ")
data = pickle.loads(bytes.fromhex(payload))
print(data)