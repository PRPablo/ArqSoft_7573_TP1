from flask import Flask
import time
import random

TIMEOUT = 5
ID = round(random.random() * 1000)

app=Flask (__name__)
@app.route("/")
def getRoot():
    return ("Python Ping... " + str(ID))


@app.route("/sleep")
def getSleep():

    time.sleep(TIMEOUT)

    return ("Python Sleep... " + str(ID))


@app.route("/heavy")
def getHeavy():

    initialTime=int(time.time())

    secondtime=initialTime

    while secondtime < (initialTime + TIMEOUT):
        secondtime=int(time.time())

    return ("Python Heavy... " + str(ID))



if (__name__ == "__main__"):
	app.run
