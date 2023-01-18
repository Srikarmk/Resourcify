import os
import discord
import requests
import json
import random
import tech

intent = discord.Intents.default()
intent.members = True
intent.message_content = True
client = discord.Client(intents=intent)


@client.event
async def on_ready():
  print("we have logged in as {0.user}".format(client))


@client.event
async def on_message(message):
  if message.author == client.user:
    return

  msg = message.content
  if msg.startswith('$help'):
    await message.channel.send(
      '''```Hey there, I'm resource bot and i'm here to provide resources for you to start/resume your tech journey!.\n\nFor supported technologies use $support command and then use a $ command with the tech you want!
    
There are 3 types of resources available - 
d - for documentation 
yt -for free youtube courses
vc-for video courses from sources like udemy , coursera etc.

For getting a resource use the command as so - $tech-d
Eg - $python-d will give you a python documentation resource.!

Happy Learning 🫡!
    
    ```''')
  if msg.startswith("$support"):
    await message.channel.send('''```
These are the following supported technolgies -

Python 
HTML 
CSS
Javscript 
React 
Go 
Java 
Php 
Csharp
SQL 
    ```
    ''')

  if msg.startswith("$"):
    print("Here")
    await message.channel.send(tech.tech(msg))


my_secret = os.environ['Token']

client.run(my_secret)
