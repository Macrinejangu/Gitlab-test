class BankAccount:

    # The constructor runs automatically when a new bank account is created.
    def __init__(self, name, balance, account_no):
        # Store the account owner's name.
        self.name = name

        # Store the actual balance internally.
        # The underscore means this value should be managed by the class.
        self._balance = balance

        # Store the account number.
        self.account_no = account_no


    # This property controls how the balance is read.
    # We can access it using john.balance without parentheses.
    @property
    def balance(self):
        print("Somebody tried to read John's balance")
        return self._balance


    # This setter controls how the balance is changed.
    # It runs when we write something like:
    # john.balance = 5000
    @balance.setter
    def balance(self, value):

        # Check whether the new balance is a number.
        if not isinstance(value, (int, float)):
            print("Ensure you pass a number for the new balance")
            return

        # Prevent the balance from being set to a negative number.
        if value < 0:
            print("Ensure the new balance is not less than 0")
            return

        # Update the internal balance after validation.
        self._balance = value


    # This method will later handle depositing money.
    def deposit(self):
        pass


    # This method will later handle withdrawing money.
    def withdrawal(self):
        pass


    # Display the details stored in this bank account.
    def show_account_details(self):
        print(f"Owner: {self.name}")
        print(f"Balance: {self.balance}")
        print(f"Account No: {self.account_no}")


# Create a new BankAccount object.
john = BankAccount(
    name="John Mwangi",
    balance=-2,
    account_no="22344223"
)


# Access the balance.
# Because balance has @property, this calls the balance method.
print("John's balance:", john.balance)


# Display all account details.
john.show_account_details()