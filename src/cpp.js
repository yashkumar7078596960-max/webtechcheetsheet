import React from "react";

const CPP = () => {
    const topics = [
        {
            title: "1. Basic C++ Program",
            code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}`,
        },
        {
            title: "2. Variables & Data Types",
            code: `int age = 19;
float marks = 85.5f;
double price = 999.99;
char grade = 'A';
bool isStudent = true;
string name = "Yash";`,
        },
        {
            title: "3. Input and Output",
            code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;

    cout << "Enter your name: ";
    getline(cin, name);

    cout << "Hello, " << name;
    return 0;
}`,
        },
        {
            title: "4. Operators",
            code: `int a = 10, b = 3;

cout << a + b << endl;
cout << a - b << endl;
cout << a * b << endl;
cout << a / b << endl;
cout << a % b << endl;`,
        },
        {
            title: "5. If-Else",
            code: `int marks = 75;

if (marks >= 40) {
    cout << "Pass";
} else {
    cout << "Fail";
}`,
        },
        {
            title: "6. Switch Statement",
            code: `int day = 2;

switch (day) {
    case 1:
        cout << "Monday";
        break;

    case 2:
        cout << "Tuesday";
        break;

    default:
        cout << "Invalid day";
}`,
        },
        {
            title: "7. For Loop",
            code: `for (int i = 1; i <= 5; i++) {
    cout << i << endl;
}`,
        },
        {
            title: "8. While Loop",
            code: `int i = 1;

while (i <= 5) {
    cout << i << endl;
    i++;
}`,
        },
        {
            title: "9. Do-While Loop",
            code: `int i = 1;

do {
    cout << i << endl;
    i++;
} while (i <= 5);`,
        },
        {
            title: "10. Arrays",
            code: `int numbers[5] = {10, 20, 30, 40, 50};

cout << numbers[0] << endl;
cout << numbers[2] << endl;`,
        },
        {
            title: "11. Strings",
            code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "Yash";

    cout << name << endl;
    cout << name.length();

    return 0;
}`,
        },
        {
            title: "12. Functions",
            code: `int add(int a, int b) {
    return a + b;
}

int main() {
    cout << add(10, 20);
    return 0;
}`,
        },
        {
            title: "13. Pointers",
            code: `int number = 10;
int* ptr = &number;

cout << number << endl;
cout << *ptr << endl;
cout << ptr << endl;`,
        },
        {
            title: "14. References",
            code: `int number = 10;
int& ref = number;

ref = 50;

cout << number; // Output: 50`,
        },
        {
            title: "15. Vectors",
            code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {10, 20, 30};

    nums.push_back(40);

    for (int n : nums) {
        cout << n << " ";
    }

    return 0;
}`,
        },
        {
            title: "16. Classes & Objects",
            code: `#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name = "Yash";

    void display() {
        cout << name;
    }
};

int main() {
    Student s1;
    s1.display();
    return 0;
}`,
        },
        {
            title: "17. Constructor",
            code: `#include <iostream>
using namespace std;

class Student {
public:
    Student() {
        cout << "Object created";
    }
};

int main() {
    Student s1;
    return 0;
}`,
        },
        {
            title: "18. Inheritance",
            code: `#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Eating";
    }
};

class Dog : public Animal {
};

int main() {
    Dog d;
    d.eat();
    return 0;
}`,
        },
        {
            title: "19. Exception Handling",
            code: `#include <iostream>
using namespace std;

int main() {
    try {
        throw 10;
    } catch (int error) {
        cout << "An error occurred: " << error;
    }

    return 0;
}`,
        },
        {
            title: "20. Sorting a Vector",
            code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {5, 2, 8, 1};

    sort(nums.begin(), nums.end());

    for (int n : nums) {
        cout << n << " ";
    }

    return 0;
}`,
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
        .cpp-page {
          min-height: 100vh;
          padding: 30px;
          background: #0b1020;
          color: #e8edf7;
          font-family: Arial, sans-serif;
        }

        .cpp-header {
          max-width: 900px;
          margin: 0 auto 35px;
          text-align: center;
        }

        .cpp-badge {
          display: inline-block;
          padding: 8px 14px;
          border: 1px solid #285f50;
          border-radius: 30px;
          background: #102b26;
          color: #65efba;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 1.5px;
        }

        .cpp-header h1 {
          margin: 18px 0 12px;
          color: #ffffff;
          font-size: clamp(30px, 5vw, 46px);
        }

        .cpp-header p {
          color: #aab6cb;
          line-height: 1.8;
        }

        .cpp-grid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: 22px;
          max-width: 1300px;
          margin: auto;
        }

        .cpp-card {
          min-width: 0;
          padding: 20px;
          border: 1px solid #293650;
          border-radius: 15px;
          background: #131c30;
          transition: transform 0.2s ease,
                      border-color 0.2s ease;
        }

        .cpp-card:hover {
          transform: translateY(-4px);
          border-color: #65efba;
        }

        .cpp-card h2 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 18px;
          line-height: 1.5;
        }

        .cpp-code {
          min-height: 145px;
          margin: 0;
          padding: 16px;
          overflow-x: auto;
          border-radius: 9px;
          background: #080d18;
          color: #b7f5d8;
          font-family: Consolas, "Courier New", monospace;
          font-size: 13px;
          line-height: 1.8;
          white-space: pre;
        }

        .cpp-copy {
          width: 100%;
          margin-top: 14px;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #65efba;
          color: #07140f;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .cpp-copy:hover {
          background: #a0ffda;
        }

        .cpp-footer {
          margin-top: 35px;
          color: #8d9ab1;
          text-align: center;
          font-size: 13px;
          line-height: 1.8;
        }

        @media (max-width: 600px) {
          .cpp-page {
            padding: 22px 14px;
          }

          .cpp-card {
            padding: 15px;
          }
        }
      `}</style>

            <div className="cpp-page">
                <header className="cpp-header">
                    <span className="cpp-badge">
                        PROGRAMMING CHEAT SHEET
                    </span>

                    <h1>C++ Language Cheat Sheet</h1>

                    <p>
                        Learn C++ from programming basics to
                        object-oriented programming.
                    </p>

                    <p>
                        <strong>{topics.length} Topics</strong>
                        {" · Beginner Friendly · Quick Revision"}
                    </p>
                </header>

                <main className="cpp-grid">
                    {topics.map((topic) => (
                        <article className="cpp-card" key={topic.title}>
                            <h2>{topic.title}</h2>

                            <pre className="cpp-code">
                                <code>{topic.code}</code>
                            </pre>

                            <button
                                type="button"
                                className="cpp-copy"
                                onClick={() => copyCode(topic.code)}
                            >
                                Copy Code
                            </button>
                        </article>
                    ))}
                </main>

                <footer className="cpp-footer">
                    Keep practising. Build strong C++ fundamentals.
                </footer>
            </div>
        </>
    );
};

export default CPP;
