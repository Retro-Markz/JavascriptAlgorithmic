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
   
'''
