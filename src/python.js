import React from "react";

const Python = () => {
    const topics = [
        {
            title: "01. Hello World",
            code: `print("Hello, World!")`,
        },
        {
            title: "02. Variables & Data Types",
            code: `name = "Yash"
age = 19
marks = 85.5
is_student = True

print(name)
print(age)
print(marks)
print(is_student)`,
        },
        {
            title: "03. User Input",
            code: `name = input("Enter your name: ")
age = int(input("Enter your age: "))

print("Hello,", name)
print("Your age is", age)`,
        },
        {
            title: "04. Operators",
            code: `a = 10
b = 3

print(a + b)   # Addition
print(a - b)   # Subtraction
print(a * b)   # Multiplication
print(a / b)   # Division
print(a // b)  # Floor division
print(a % b)   # Remainder
print(a ** b)  # Power`,
        },
        {
            title: "05. If-Else",
            code: `marks = 75

if marks >= 40:
    print("Pass")
else:
    print("Fail")`,
        },
        {
            title: "06. Elif Condition",
            code: `marks = 85

if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 40:
    print("Grade C")
else:
    print("Fail")`,
        },
        {
            title: "07. For Loop",
            code: `for i in range(1, 6):
    print(i)`,
        },
        {
            title: "08. While Loop",
            code: `i = 1

while i <= 5:
    print(i)
    i += 1`,
        },
        {
            title: "09. Lists",
            code: `numbers = [10, 20, 30, 40]

numbers.append(50)
numbers.remove(20)

print(numbers)
print(numbers[0])
print(len(numbers))`,
        },
        {
            title: "10. Tuples",
            code: `colors = ("red", "green", "blue")

print(colors[0])
print(colors[1])
print(len(colors))`,
        },
        {
            title: "11. Sets",
            code: `numbers = {1, 2, 3, 3, 4}

numbers.add(5)

print(numbers)
print(len(numbers))  # Unique elements`,
        },
        {
            title: "12. Dictionaries",
            code: `student = {
    "name": "Yash",
    "age": 19,
    "grade": "A"
}

print(student["name"])
print(student["age"])

student["age"] = 20
print(student)`,
        },
        {
            title: "13. String Methods",
            code: `text = "Hello Python"

print(text.upper())
print(text.lower())
print(text.title())
print(text.replace("Python", "World"))
print(len(text))`,
        },
        {
            title: "14. Functions",
            code: `def add(a, b):
    return a + b

result = add(10, 20)
print(result)`,
        },
        {
            title: "15. List Comprehension",
            code: `squares = [x ** 2 for x in range(1, 6)]

print(squares)

even_numbers = [
    x for x in range(1, 11)
    if x % 2 == 0
]

print(even_numbers)`,
        },
        {
            title: "16. Exception Handling",
            code: `try:
    number = int(input("Enter a number: "))
    print(100 / number)

except ValueError:
    print("Please enter a valid integer.")

except ZeroDivisionError:
    print("Cannot divide by zero.")`,
        },
        {
            title: "17. Classes & Objects",
            code: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print(self.name, self.age)

student1 = Student("Yash", 19)
student1.display()`,
        },
        {
            title: "18. Inheritance",
            code: `class Animal:
    def speak(self):
        print("Animal makes a sound")

class Dog(Animal):
    def bark(self):
        print("Woof!")

dog = Dog()
dog.speak()
dog.bark()`,
        },
        {
            title: "19. File Handling",
            code: `with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Hello Python!")

with open("notes.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)`,
        },
        {
            title: "20. Modules & Math",
            code: `import math
from datetime import date

print(math.sqrt(64))
print(math.ceil(4.2))
print(math.floor(4.8))
print(date.today())`,
        },
    ];

    const copyCode = async (code) => {
        try {
            await navigator.clipboard.writeText(code);
            alert("Code copied successfully!");
        } catch (error) {
            alert("Copy failed. Please copy manually.");
        }
    };

    return (
        <>
            <style>{`
        .python-page {
          min-height: 100vh;
          padding: 30px;
          background: #0b1020;
          color: #e8edf7;
          font-family: Arial, sans-serif;
        }

        .python-header {
          max-width: 900px;
          margin: 0 auto 35px;
          text-align: center;
        }

        .python-badge {
          display: inline-block;
          padding: 8px 14px;
          border: 1px solid #64532c;
          border-radius: 30px;
          background: #302817;
          color: #ffd76a;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 1.5px;
        }

        .python-header h1 {
          margin: 18px 0 12px;
          color: #ffffff;
          font-size: clamp(30px, 5vw, 46px);
        }

        .python-header p {
          color: #aab6cb;
          line-height: 1.8;
        }

        .python-grid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: 22px;
          max-width: 1300px;
          margin: auto;
        }

        .python-card {
          min-width: 0;
          padding: 20px;
          border: 1px solid #293650;
          border-radius: 15px;
          background: #131c30;
          transition: transform 0.2s ease,
                      border-color 0.2s ease;
        }

        .python-card:hover {
          transform: translateY(-4px);
          border-color: #ffd76a;
        }

        .python-card h2 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 18px;
          line-height: 1.5;
        }

        .python-code {
          min-height: 130px;
          margin: 0;
          padding: 16px;
          overflow-x: auto;
          border-radius: 9px;
          background: #080d18;
          color: #ffe5a0;
          font-family: Consolas, "Courier New", monospace;
          font-size: 13px;
          line-height: 1.8;
          white-space: pre;
        }

        .python-copy {
          width: 100%;
          margin-top: 14px;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #ffd76a;
          color: #201a08;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .python-copy:hover {
          background: #ffe69a;
        }

        .python-footer {
          margin-top: 35px;
          color: #8d9ab1;
          text-align: center;
          font-size: 13px;
          line-height: 1.8;
        }

        @media (max-width: 600px) {
          .python-page {
            padding: 22px 14px;
          }

          .python-card {
            padding: 15px;
          }
        }
      `}</style>

            <div className="python-page">
                <header className="python-header">
                    <span className="python-badge">
                        PROGRAMMING CHEAT SHEET
                    </span>

                    <h1>Python Cheat Sheet</h1>

                    <p>
                        Learn Python from basic syntax to functions,
                        object-oriented programming and file handling.
                    </p>

                    <p>
                        <strong>{topics.length} Topics</strong>
                        {" · Beginner Friendly · Quick Revision"}
                    </p>
                </header>

                <main className="python-grid">
                    {topics.map((topic) => (
                        <article className="python-card" key={topic.title}>
                            <h2>{topic.title}</h2>

                            <pre className="python-code">
                                <code>{topic.code}</code>
                            </pre>

                            <button
                                type="button"
                                className="python-copy"
                                onClick={() => copyCode(topic.code)}
                            >
                                Copy Code
                            </button>
                        </article>
                    ))}
                </main>

                <footer className="python-footer">
                    Practice daily. Build strong Python fundamentals.
                </footer>
            </div>
        </>
    );
};

export default Python;
