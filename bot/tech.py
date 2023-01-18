import requests

def tech(message):
  message=message.lower()
  t=message[1:]
  x=t.split("-")
  print(x)
  techl=x[0]
  typel=x[1]
  msg=(requests.get(f"https://resourcify.glitch.me/resources?technology={techl}&type={typel}").text)
  msg=msg[1:-1]
  return msg
  
  
