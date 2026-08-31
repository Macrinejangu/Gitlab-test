'''
FUNCTION LOGGER DECORATOR
Import the time module so we can measure when a function starts and finishes
then import date and time, the date is used to get today's date

Datetime is used to get today's date and time
'''

import time
from datetime import date, datetime

'''
This decorator records information about each function that it decorates

'''

def logger(func):
    def wrapper (*args, **kwargs):
        start_time = time.time()
        print(f"Start Time: {start_time}")
        result = func(*args, **kwargs)

        end_time = time.time()
        diff = end_time - start_time
        diff_in_ms = round(diff * 1000, 2)
        today = date.today()
        timestamp = datetime.now().isofrmat()
        with open(f"{today}.txt", "a") as f:
            f.write(
                f"ts:{timestamp}"
                f"---func:{func.__name__}"
                f"---time:{diff_in_ms} ms/n"
            )
        return result
    return wrapper

@logger
def hello():
    print("Hello World")

@logger
def big_count():
    for i in range (0, 100):
        print(i)

hello()
big_count()            

