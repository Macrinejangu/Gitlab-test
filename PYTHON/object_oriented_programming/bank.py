"""
Abstractions.

Bank Class →
deposits, withdrawal,
show account.
getter and setter. →
→ easy to scale function <understing>

→ Login account
→ Create account
──→ Deposit
──→ Withdrawal
──→ account balance
"""


"""
Static <it does not change>.<class properties> properties. <Belong to the class>
Static Method.<Class method.<function belongs to the class>

Why would you want to use a class property.◇
"""


class BankAccount:

    # Static or class properties.
    # These belong to the class.
    clients = 0
    bank_name = "Post Bank"  # static property


    # Constructor.
    def __init__(self, name, balance, account_no):

        # Store the values passed when creating the account.
        self.name = name
        self._balance = balance
        self.account_no = account_no

        # Different ways we could increase the number of clients.

        # BankAccount.clients = BankAccount.clients + 1

        # self.__class__.clients = self.__class__.clients + 1

        # self.__class__.add_client()

        # Call the class method to increase the number of clients.
        BankAccount.add_client()

        # self.__class__.bank_name = new_bank

        # self.__class__.clients += 1

        # BankAccount.clients += 1


    # Data is read.
    @property
    def balance(self):
        print("Somebody tried to read Johns balance")
        return self._balance


    # To control updated values.
    @balance.setter
    def balance(self, value):

        # Ensure the new balance is a number.
        if not isinstance(value, (int, float)):
            print("Ensure you pass a number for new balance")
            return

        # Ensure the new balance is not less than zero.
        if value < 0:
            print("Ensure new balance must not be less than 0")
            return

        # Update the balance.
        self._balance = value


    # Instance method.
    # self → object.
    def deposit(self):
        pass


    def withdrawal(self):
        pass


    def show_account_details(self):
        print(f"Owner {self.name}")
        print(f"Balance {self.balance}")
        print(f"Account No {self.account_no}")


    # ------------------------------------------------

    # Static Method.
    # Static methods do not receive self or cls.
    @staticmethod
    def calculate_interest(amount, year):

        # Interest rate.
        rate = 10

        # Calculate interest earned per year.
        interest_per_year = amount * (rate / 100)

        # Calculate total interest for the given number of years.
        interest_total = interest_per_year * year

        # Calculate the total amount to pay.
        total = amount + interest_total

        print(
            f"You take a loan of {amount}, "
            f"interest rate per year {interest_per_year}"
        )

        print(
            f"Total interest {interest_total}, "
            f"total to pay {total} after {year}"
        )


    # ------------------------------------------------

    # Class Method.
    # Class methods receive cls instead of self.
    @classmethod
    def add_client(cls):

        # Increase the total number of clients.
        cls.clients = cls.clients + 1


# ------------------------------------------------


# Create an object or instance from the class.
john = BankAccount(
    name="John Mwangi",
    balance=0,
    account_no="223344223"
)


samuel = BankAccount(
    name="Samuel",
    balance=0,
    account_no="223344223"
)


# Print the total number of clients created.
print("Total clients", BankAccount.clients)


# Call the static method using the class name.
BankAccount.calculate_interest(5000, 3)