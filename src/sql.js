import React from "react";

const SQL = () => {
    const topics = [
        {
            title: "01. Create Database",
            code: `CREATE DATABASE college;

USE college;

SHOW DATABASES;`,
        },
        {
            title: "02. Create Table",
            code: `CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    marks DECIMAL(5,2)
);

DESCRIBE Students;`,
        },
        {
            title: "03. Insert Data",
            code: `INSERT INTO Students (id, name, age, marks)
VALUES
(1, 'Yash', 19, 85.50),
(2, 'Aman', 20, 78.00),
(3, 'Rahul', 19, 92.00);

SELECT * FROM Students;`,
        },
        {
            title: "04. Select Data",
            code: `-- Select all columns
SELECT * FROM Students;

-- Select specific columns
SELECT name, marks
FROM Students;

-- Select one record
SELECT * FROM Students
WHERE id = 1;`,
        },
        {
            title: "05. WHERE Condition",
            code: `SELECT * FROM Students
WHERE marks > 80;

SELECT * FROM Students
WHERE age = 19;

SELECT * FROM Students
WHERE marks >= 75 AND age = 19;`,
        },
        {
            title: "06. AND, OR, NOT",
            code: `SELECT * FROM Students
WHERE age = 19 AND marks > 80;

SELECT * FROM Students
WHERE age = 19 OR marks > 90;

SELECT * FROM Students
WHERE NOT age = 20;`,
        },
        {
            title: "07. ORDER BY",
            code: `-- Ascending order
SELECT * FROM Students
ORDER BY marks ASC;

-- Descending order
SELECT * FROM Students
ORDER BY marks DESC;

-- Sort by name
SELECT * FROM Students
ORDER BY name ASC;`,
        },
        {
            title: "08. DISTINCT",
            code: `SELECT DISTINCT age
FROM Students;

SELECT DISTINCT marks
FROM Students;`,
        },
        {
            title: "09. Aggregate Functions",
            code: `SELECT COUNT(*) AS total_students
FROM Students;

SELECT AVG(marks) AS average_marks
FROM Students;

SELECT MAX(marks) AS highest_marks
FROM Students;

SELECT MIN(marks) AS lowest_marks
FROM Students;

SELECT SUM(marks) AS total_marks
FROM Students;`,
        },
        {
            title: "10. GROUP BY",
            code: `SELECT age, COUNT(*) AS total
FROM Students
GROUP BY age;

SELECT age, AVG(marks) AS average_marks
FROM Students
GROUP BY age;`,
        },
        {
            title: "11. HAVING",
            code: `SELECT age, AVG(marks) AS average_marks
FROM Students
GROUP BY age
HAVING AVG(marks) > 80;`,
        },
        {
            title: "12. LIKE Operator",
            code: `-- Names starting with Y
SELECT * FROM Students
WHERE name LIKE 'Y%';

-- Names ending with n
SELECT * FROM Students
WHERE name LIKE '%n';

-- Names containing a
SELECT * FROM Students
WHERE name LIKE '%a%';`,
        },
        {
            title: "13. BETWEEN & IN",
            code: `SELECT * FROM Students
WHERE marks BETWEEN 75 AND 90;

SELECT * FROM Students
WHERE age IN (19, 20);

SELECT * FROM Students
WHERE age NOT IN (18, 21);`,
        },
        {
            title: "14. UPDATE Data",
            code: `UPDATE Students
SET marks = 95
WHERE id = 1;

SELECT * FROM Students
WHERE id = 1;`,
        },
        {
            title: "15. DELETE Data",
            code: `DELETE FROM Students
WHERE id = 3;

SELECT * FROM Students;`,
        },
        {
            title: "16. ALTER TABLE",
            code: `-- Add a new column
ALTER TABLE Students
ADD email VARCHAR(100);

-- Modify a column (MySQL)
ALTER TABLE Students
MODIFY name VARCHAR(150);

-- Rename a column (MySQL 8.0+)
ALTER TABLE Students
RENAME COLUMN email TO student_email;`,
        },
        {
            title: "17. JOIN Operations",
            code: `SELECT Students.name, Courses.course_name
FROM Students
INNER JOIN Courses
ON Students.id = Courses.student_id;

-- LEFT JOIN
SELECT Students.name, Courses.course_name
FROM Students
LEFT JOIN Courses
ON Students.id = Courses.student_id;`,
        },
        {
            title: "18. Subquery",
            code: `SELECT name, marks
FROM Students
WHERE marks > (
    SELECT AVG(marks)
    FROM Students
);`,
        },
        {
            title: "19. CASE Statement",
            code: `SELECT name, marks,
    CASE
        WHEN marks >= 90 THEN 'A'
        WHEN marks >= 75 THEN 'B'
        WHEN marks >= 40 THEN 'C'
        ELSE 'Fail'
    END AS grade
FROM Students;`,
        },
        {
            title: "20. Constraints",
            code: `CREATE TABLE Employees (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18),
    city VARCHAR(50) DEFAULT 'Moradabad'
);`,
        },
    ];

    const copyCode = async (code) => {
        try {
            await navigator.clipboard.writeText(code);
            alert("SQL code copied successfully!");
        } catch (error) {
            alert("Copy failed. Please copy the code manually.");
        }
    };

    return (
        <>
            <style>{`
        .sql-page {
          min-height: 100vh;
          padding: 30px;
          background: #0b1020;
          color: #e8edf7;
          font-family: Arial, sans-serif;
        }

        .sql-header {
          max-width: 900px;
          margin: 0 auto 35px;
          text-align: center;
        }

        .sql-badge {
          display: inline-block;
          padding: 8px 14px;
          border: 1px solid #345c8b;
          border-radius: 30px;
          background: #142b45;
          color: #84c5ff;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 1.5px;
        }

        .sql-header h1 {
          margin: 18px 0 12px;
          color: #ffffff;
          font-size: clamp(30px, 5vw, 46px);
        }

        .sql-header p {
          color: #aab6cb;
          line-height: 1.8;
        }

        .sql-grid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: 22px;
          max-width: 1300px;
          margin: auto;
        }

        .sql-card {
          min-width: 0;
          padding: 20px;
          border: 1px solid #293650;
          border-radius: 15px;
          background: #131c30;
          transition: transform 0.2s ease,
                      border-color 0.2s ease;
        }

        .sql-card:hover {
          transform: translateY(-4px);
          border-color: #84c5ff;
        }

        .sql-card h2 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 18px;
          line-height: 1.5;
        }

        .sql-code {
          min-height: 140px;
          margin: 0;
          padding: 16px;
          overflow-x: auto;
          border-radius: 9px;
          background: #080d18;
          color: #b8dcff;
          font-family: Consolas, "Courier New", monospace;
          font-size: 13px;
          line-height: 1.8;
          white-space: pre;
        }

        .sql-copy {
          width: 100%;
          margin-top: 14px;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #84c5ff;
          color: #091626;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .sql-copy:hover {
          background: #b0dcff;
        }

        .sql-footer {
          margin-top: 35px;
          color: #8d9ab1;
          text-align: center;
          font-size: 13px;
          line-height: 1.8;
        }

        @media (max-width: 600px) {
          .sql-page {
            padding: 22px 14px;
          }

          .sql-card {
            padding: 15px;
          }
        }
      `}</style>

            <div className="sql-page">
                <header className="sql-header">
                    <span className="sql-badge">
                        DATABASE CHEAT SHEET
                    </span>

                    <h1>SQL Cheat Sheet</h1>

                    <p>
                        Learn SQL from basic queries to filtering,
                        joins, subqueries and database constraints.
                    </p>

                    <p>
                        <strong>{topics.length} Topics</strong>
                        {" · Beginner Friendly · Quick Revision"}
                    </p>
                </header>

                <main className="sql-grid">
                    {topics.map((topic) => (
                        <article className="sql-card" key={topic.title}>
                            <h2>{topic.title}</h2>

                            <pre className="sql-code">
                                <code>{topic.code}</code>
                            </pre>

                            <button
                                type="button"
                                className="sql-copy"
                                onClick={() => copyCode(topic.code)}
                            >
                                Copy Code
                            </button>
                        </article>
                    ))}
                </main>

                <footer className="sql-footer">
                    Practice SQL daily. Learn to query and manage databases.
                </footer>
            </div>
        </>
    );
};

export default SQL;
