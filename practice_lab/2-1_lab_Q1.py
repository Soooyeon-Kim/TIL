def factorial(num):
    result = 1
    
    for i in range(1, num+1):
        result *= i
    return result

def main():
    print(factorial(5)) 
    # return 120

if __name__ == "__main__":
    main()