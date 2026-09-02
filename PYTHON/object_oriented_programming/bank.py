# A class is a blueprint used to create objects.
# In this example, the blueprint represents a bank account.

class BankAccount:

    # __init__ runs automatically when a new BankAccount object is created.
    # It gives each bank account its own name, balance, and account number.
    def __init__(self, name, balance, account_no):
        self.name = name
        self.balance = balance
        self.account_no = account_no


    # This method will later return or display the account balance.
    def get_balance(self):
        pass


    # This method will later add money to the account balance.
    def deposit(self):
        pass


    # This method will later remove money from the account balance.
    def withdrawal(self):
        pass


    # This method displays the details stored in this bank account object.
    def show_account_details(self):
        print(f"Owner: {self.name}")
        print(f"Balance: {self.balance}")
        print(f"Account No: {self.account_no}")


# Create a BankAccount object called john.
# The values below are passed into the __init__ method.
john = BankAccount(
    name="John Mwangi",
    balance=0,
    account_no="22344223"
)


# Call the method belonging to the john object.
john.show_account_details()