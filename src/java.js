
import React from "react";

const Java = () => {
  const topics = [
    {
      title: "01. Hello World",
      code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
} `,
    },
    {
      title: "02. Variables & Data Types",
      code: `String name = "Yash";
int age = 19;
double marks = 85.5;
float price = 99.5f;
char grade = 'A';
boolean isStudent = true;

System.out.println(name);
System.out.println(age); `,
    },
    {
      title: "03. User Input",
      code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.println("Hello, " + name);
        sc.close();
    }
} `,
    },
    {
      title: "04. Operators",
      code: `int a = 10, b = 3;

System.out.println(a + b); // Addition
System.out.println(a - b); // Subtraction
System.out.println(a * b); // Multiplication
System.out.println(a / b); // Integer division
System.out.println(a % b); // Remainder`,
    },
{
    title: "05. If-Else",
        code: `int marks = 75;

if (marks >= 40) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}`,
    },
{
    title: "06. Switch Statement",
        code: `int day = 2;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Invalid day");
}`,
    },
{
    title: "07. For Loop",
        code: `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
    },
{
    title: "08. While Loop",
        code: `int i = 1;

while (i <= 5) {
    System.out.println(i);
    i++;
}`,
    },
{
    title: "09. Do-While Loop",
        code: `int i = 1;

do {
    System.out.println(i);
    i++;
} while (i <= 5);`,
    },
{
    title: "10. Arrays",
        code: `int[] numbers = {10, 20, 30, 40, 50};

System.out.println(numbers[0]);
System.out.println(numbers[2]);
System.out.println("Length: " + numbers.length);`,
    },
{
    title: "11. Strings",
        code: `String name = "Yash Kumar";

System.out.println(name.length());
System.out.println(name.toUpperCase());
System.out.println(name.toLowerCase());
System.out.println(name.contains("Kumar"));`,
    },
{
    title: "12. Methods",
        code: `public class Main {
    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(10, 20));
    }
}`,
    },
{
    title: "13. Classes & Objects",
        code: `class Student {
    String name = "Yash";
    int age = 19;

    void display() {
        System.out.println(name);
        System.out.println(age);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.display();
    }
}`,
    },
{
    title: "14. Constructors",
        code: `class Student {
    String name;

    Student(String studentName) {
        name = studentName;
    }

    void display() {
        System.out.println(name);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Yash");
        s1.display();
    }
}`,
    },
{
    title: "15. Inheritance",
        code: `class Animal {
    void eat() {
        System.out.println("Eating...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();
        dog.bark();
    }
}`,
    },
{
    title: "16. ArrayList",
        code: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();

        names.add("Yash");
        names.add("Aman");
        names.add("Rahul");

        System.out.println(names);
        System.out.println(names.get(0));

        names.remove("Aman");
        System.out.println(names);
    }
}`,
    },
{
    title: "17. Exception Handling",
        code: `public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("Program finished");
        }
    }
}`,
    },
{
    title: "18. Encapsulation",
        code: `class Student {
    private int age;

    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }

    public int getAge() {
        return age;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setAge(19);
        System.out.println(s.getAge());
    }
}`,
    },
{
    title: "19. Interfaces",
        code: `interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();
        animal.sound();
    }
}`,
    },
{
    title: "20. Sorting an Array",
        code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 8, 1, 3};

        Arrays.sort(numbers);

        System.out.println(Arrays.toString(numbers));
    }
}`,
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
        .java-page {
          min-height: 100vh;
          padding: 30px;
          background: #0b1020;
          color: #e8edf7;
          font-family: Arial, sans-serif;
        }

        .java-header {
          max-width: 900px;
          margin: 0 auto 35px;
          text-align: center;
        }

        .java-badge {
          display: inline-block;
          padding: 8px 14px;
          border: 1px solid #754040;
          border-radius: 30px;
          background: #321b23;
          color: #ff9c9c;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 1.5px;
        }

        .java-header h1 {
          margin: 18px 0 12px;
          color: #ffffff;
          font-size: clamp(30px, 5vw, 46px);
        }

        .java-header p {
          color: #aab6cb;
          line-height: 1.8;
        }

        .java-grid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: 22px;
          max-width: 1300px;
          margin: auto;
        }

        .java-card {
          min-width: 0;
          padding: 20px;
          border: 1px solid #293650;
          border-radius: 15px;
          background: #131c30;
          transition: transform 0.2s ease,
                      border-color 0.2s ease;
        }

        .java-card:hover {
          transform: translateY(-4px);
          border-color: #ff9c9c;
        }

        .java-card h2 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 18px;
          line-height: 1.5;
        }

        .java-code {
          min-height: 135px;
          margin: 0;
          padding: 16px;
          overflow-x: auto;
          border-radius: 9px;
          background: #080d18;
          color: #ffc9c9;
          font-family: Consolas, "Courier New", monospace;
          font-size: 13px;
          line-height: 1.8;
          white-space: pre;
        }

        .java-copy {
          width: 100%;
          margin-top: 14px;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #ff9c9c;
          color: #241010;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .java-copy:hover {
          background: #ffc1c1;
        }

        .java-footer {
          margin-top: 35px;
          color: #8d9ab1;
          text-align: center;
          font-size: 13px;
          line-height: 1.8;
        }

        @media (max-width: 600px) {
          .java-page {
            padding: 22px 14px;
          }

          .java-card {
            padding: 15px;
          }
        }
      `}</style>

        <div className="java-page">
            <header className="java-header">
                <span className="java-badge">
                    PROGRAMMING CHEAT SHEET
                </span>

                <h1>Java Cheat Sheet</h1>

                <p>
                    Learn Java from basic syntax to object-oriented
                    programming, collections and exception handling.
                </p>

                <p>
                    <strong>{topics.length} Topics</strong>
                    {" · Beginner Friendly · Quick Revision"}
                </p>
            </header>

            <main className="java-grid">
                {topics.map((topic) => (
                    <article className="java-card" key={topic.title}>
                        <h2>{topic.title}</h2>

                        <pre className="java-code">
                            <code>{topic.code}</code>
                        </pre>

                        <button
                            type="button"
                            className="java-copy"
                            onClick={() => copyCode(topic.code)}
                        >
                            Copy Code
                        </button>
                    </article>
                ))}
            </main>

            <footer className="java-footer">
                Practice daily. Build strong Java fundamentals.
            </footer>
        </div>
    </>
);
};

export default Java;

