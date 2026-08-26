# 1. INDENTATION


# Python uses indentation to show which lines
# belong to a block of code.
#
# In JavaScript, curly braces {} usually define
# the beginning and end of a block.
#
# Python:
#
# if age > 18:
#     print("You are over 18")
#
# JavaScript:
#
# if (age > 18) {
#     console.log("You are over 18");
# }


# 2. IF, ELIF, ELSE


age = 20

# 'if' checks whether a condition is True.
if age > 18:
    print("You are over 18")

# 'elif' means "else if".
# Python checks this only if the first 'if' was False.
elif age == 18:
    print("You are exactly 18")

# 'else' runs when none of the conditions above are True.
else:
    print("You are under 18")



# 3. NESTED IF


age = 23

if age > 18:
    print("You are over 18")

    # This if is inside the first if.
    if age == 23:
        print("You are exactly 23")

    # This belongs to the first if.
    print("Your age is above 18")



# 4. RANGE


# range(start, stop, step)
#
# start = where we begin
# stop = where we stop, excluding this number
# step = how much we increase by

for i in range(0, 5, 1):
    print(i)

# Output:
# 0
# 1
# 2
# 3
# 4



# 5. PYTHON LISTS


ar = [23, "Hello", 76, 45, 40]

# Lists use indexes starting at 0.
#
# Index:  0       1        2       3       4
#         ↓       ↓        ↓       ↓       ↓
# ar = [23,    "Hello",   76,     45,     40]



# 6. LOOPING USING AN INDEX


# len(ar) tells us how many items are in the list.
# len(ar) is 5 in this example.

for i in range(0, len(ar)):
    single_item = ar[i]
    print(single_item)

# This is similar to JavaScript:
#
# for (let i = 0; i < ar.length; i++) {
#     console.log(ar[i]);
# }


# 7. LOOPING DIRECTLY THROUGH THE ITEMS

# Python lets us loop directly through the list.
# We don't need to create an index ourselves.

for single_item in ar:
    print("Single item:", single_item)

# This is similar to JavaScript:
#
# for (let singleItem of ar) {
#     console.log("Single item:", singleItem);
# }