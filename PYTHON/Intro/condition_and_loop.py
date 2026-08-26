# Python uses indentation (spaces at the beginning of a line)
# to show which lines belong to a block of code.

#Example
age = 20

if age > 18:
    print("You are over 18")
    print("This also belongs to the if statement")
#The two print() statements are indented, so Python knows both belong to the if.

#If Conditions
age=20
if age>18:
    print("You can Drink")
    print("You can't smoke")
    if age== 23:
        print("You are youth")
    print("You are still a teenager") #This belongs in the first 'if'

#else if condition 
# 
elif age==44:
    print("Such a young age")
else:
    print("Last else")

k=0

while k<30:
    k=k+1
    print("kis", k)

#When writing Range(Start, Stop, Step)
for i in range(0,5,1):
    print("I is", i)

ar=[23,"Hello", 76,45,40]
#in JS, we'd write for(let i=0;i<ar.length;i++){0-99}
for i in range(0,len(ar)):
    single_item=ar[i]
    print(single_item)

#for(let singleItem of array)
for single_item in ar:
    print("Single item", single_item)            