import time

def up_to_n(n):
    sum = 0  # op1
    for i in range(1, n + 1):  # i op2, 1, n < op3
        sum = sum + i  # op4
        print(f"Liner time: when is n {n} sum is {sum}")  # op5
    return sum  # op6

def up_to_n_2(n):
    sum = n * (n + 1) / 2  # op1 + op2 + op3 -> 1
    print(f"constant time: when is n {n} sum is {sum}")  # op5
    return sum

n = 100000

start_time = time.perf_counter()
up_to_n_2(n)
end_time = time.perf_counter()
diff_ms = (end_time - start_time) * 1000
print(f"\n Execution time:{diff_ms} ms")

start_time = time.perf_counter()
up_to_n(n)
end_time = time.perf_counter()
diff_ms = (end_time - start_time) * 1000
print(f"\n Execution time:{diff_ms} ms")

ar = {
    "1": {
        "left": {
            2: {
                "left": {},
                "right": {}
            }
        },
        "right": {}
    }
}