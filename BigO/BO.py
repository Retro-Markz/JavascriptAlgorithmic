''''
#O(n)

def print_items(n):
    for i in range(n):
        print(i)
        
        
print_items(10)


def print_items(n):
    for i in range(n):
        print(i)
        
    for j in range(n):
        print(j)
        
print_items(10)

#O(n^2)

def print_items(n):
    for i in range(n):
       for j in range(n):
           for k in range(n):
                print(i,j,k)
        
        
print_items(10)
   
#drop non-dominants O(n^2 + n) the On^2 is dominant, so, take off the On is drop non-nominant

def print_items(n):
    for i in range(n):
       for j in range(n):
            print(i,j)
           
    for k in range(n):
                print(k)
        
print_items(10)


#O(1)

def add_items(n):
    return n + n


print(add_items(5))

'''

#O(a+b)

def print_items(a,b):
    for i in range(a):
        print(i)
        
    for j in range(b):
        print(j)

print_items(5,6)
