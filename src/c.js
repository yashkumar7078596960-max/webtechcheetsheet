
import React from "react";

const C = () => {
    const topics = [
        {
            title: "1. Basic C Program",
            code: `#include < stdio.h >

    int main() {
    printf("Hello, World!");
    return 0;
} `,
        },
        {
            title: "2. Variables & Data Types",
            code: `int age = 19;
float marks = 85.5f;
double price = 999.99;
char grade = 'A';

printf("%d", age);
printf("%f", marks);
printf("%c", grade); `,
        },
        {
            title: "3. User Input",
            code: `#include < stdio.h >

    int main() {
    int age;

    printf("Enter your age: ");
    scanf("%d", & age);

    printf("Age = %d", age);
    return 0;
} `,
        },
        {
            title: "4. Operators",
            code: `int a = 10, b = 3;

printf("%d", a + b); // Addition
printf("%d", a - b); // Subtraction
printf("%d", a * b); // Multiplication
printf("%d", a / b); // Division
printf("%d", a % b); // Remainder`,
        },
        {
            title: "5. If-Else",
            code: `int marks = 75;

if (marks >= 40) {
    printf("Pass");
} else {
    printf("Fail");
}`,
        },
        {
            title: "6. Switch Statement",
            code: `int day = 2;

switch (day) {
    case 1:
        printf("Monday");
        break;
    case 2:
        printf("Tuesday");
        break;
    default:
        printf("Invalid day");
}`,
        },
        {
            title: "7. For Loop",
            code: `for (int i = 1; i <= 5; i++) {
    printf("%d\\n", i);
}`,
        },
        {
            title: "8. While Loop",
            code: `int i = 1;

while (i <= 5) {
    printf("%d\\n", i);
    i++;
}`,
        },
        {
            title: "9. Arrays",
            code: `int numbers[5] = {10, 20, 30, 40, 50};

printf("%d", numbers[0]);
printf("%d", numbers[2]);`,
        },
        {
            title: "10. Strings",
            code: `#include <stdio.h>
#include <string.h>

int main() {
    char name[] = "Yash";

    printf("%s\\n", name);
    printf("Length: %zu", strlen(name));

    return 0;
}`,
        },
        {
            title: "11. Functions",
            code: `int add(int a, int b) {
    return a + b;
}

int main() {
    printf("%d", add(10, 20));
    return 0;
}`,
        },
        {
            title: "12. Pointers",
            code: `int number = 10;
int *ptr = &number;

printf("Value: %d\\n", number);
printf("Value: %d\\n", *ptr);
printf("Address: %p", (void *)ptr);`,
        },
        {
            title: "13. Structures",
            code: `struct Student {
    int roll;
    char grade;
};

int main() {
    struct Student s1 = {101, 'A'};

    printf("%d\\n", s1.roll);
    printf("%c", s1.grade);

    return 0;
}`,
        },
        {
            title: "14. Break & Continue",
            code: `for (int i = 1; i <= 10; i++) {
    if (i == 3) {
        continue;
    }

    if (i == 8) {
        break;
    }

    printf("%d\\n", i);
}`,
        },
        {
            title: "15. Common Header Files",
            code: `#include <stdio.h>   // Input/Output
#include <stdlib.h>  // Utilities
#include <string.h>  // String functions
#include <math.h>    // Math functions`,
        },
        {
            title: "16. Constants",
            code: `const float PI = 3.14159f;
const int MAX = 100;

printf("%f\\n", PI);
printf("%d", MAX);`,
        },
    ];

    const copyCode = async (code) => {
        try {
            await navigator.clipboard.writeText(code);
            alert("Code copied successfully!");
        } catch (error) {
            alert("Copy failed. Please copy the code manually.");
        }
    };

    return (
        <>
            <style>{`
        .c-page {
          min-height: 100vh;
          padding: 30px;
          background: #0b1020;
          color: #e8edf7;
          font-family: Arial, sans-serif;
        }

        .c-header {
          max-width: 900px;
          margin: 0 auto 35px;
          text-align: center;
        }

        .c-badge {
          display: inline-block;
          padding: 7px 12px;
          border: 1px solid #285f50;
          border-radius: 20px;
          background: #102b26;
          color: #65efba;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .c-header h1 {
          margin: 18px 0 12px;
          color: #ffffff;
          font-size: clamp(30px, 5vw, 46px);
        }

        .c-header p {
          color: #aab6cb;
          line-height: 1.7;
        }

        .c-grid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit, minmax(min(100%, 300px), 1fr)
          );
          gap: 22px;
          max-width: 1300px;
          margin: auto;
        }

        .c-card {
          min-width: 0;
          padding: 20px;
          overflow: hidden;
          border: 1px solid #293650;
          border-radius: 15px;
          background: #131c30;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .c-card:hover {
          transform: translateY(-4px);
          border-color: #65efba;
        }

        .c-card h2 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 18px;
        }

        .c-code {
          min-height: 130px;
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

        .c-copy {
          width: 100%;
          margin-top: 14px;
          padding: 11px;
          border: none;
          border-radius: 8px;
          background: #65efba;
          color: #07140f;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .c-copy:hover {
          background: #a0ffda;
        }

        .c-footer {
          margin-top: 35px;
          color: #8d9ab1;
          text-align: center;
          font-size: 13px;
        }

        @media (max-width: 600px) {
          .c-page {
            padding: 22px 14px;
          }

          .c-card {
            padding: 15px;
          }
        }
      `}</style>

            <div className="c-page">
                <header className="c-header">
                    <span className="c-badge">PROGRAMMING CHEAT SHEET</span>

                    <h1>C Language Cheat Sheet</h1>

                    <p>
                        Learn C programming with simple examples.
                        Revise important concepts and copy code for practice.
                    </p>

                    <p>
                        <strong>{topics.length} Topics</strong> ·
                        Beginner Friendly · Quick Revision
                    </p>
                </header>

                <main className="c-grid">
                    {topics.map((topic) => (
                        <article className="c-card" key={topic.title}>
                            <h2>{topic.title}</h2>

                            <pre className="c-code">
                                <code>{topic.code}</code>
                            </pre>

                            <button
                                className="c-copy"
                                type="button"
                                onClick={() => copyCode(topic.code)}
                            >
                                Copy Code
                            </button>
                        </article>
                    ))}
                </main>

                <footer className="c-footer">
                    Practice daily. Build your programming fundamentals with C.
                </footer>
            </div>
        </>
    );
};

export default C;
