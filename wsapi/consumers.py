from threading import Thread
import time
import json


langs = ['cxx', 'java']

class StatusThread(Thread):
    def __init__(self, val):
        ''' Constructor. '''

        Thread.__init__(self)
        self.ch = val

    def run(self):
        for i in range(2):
            self.ch.send({
                'text': json.dumps({
                    'lang': langs[i],
                    'status': 'success'
                })
            })
            time.sleep(2)


# Connected to websocket.connect
def ws_connect(message):
    # Accept the connection
    message.reply_channel.send({"accept": True})
    # Add to the chat group
    # Group("chat").add(message.reply_channel)

    thread = StatusThread(message.reply_channel)
    thread.start()
    # thread.join()


# Connected to websocket.disconnect
def ws_disconnect(message):
    # Group("chat").discard(message.reply_channel)
    pass