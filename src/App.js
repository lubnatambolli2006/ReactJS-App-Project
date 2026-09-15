const { useState } = React;

function StudentCard({ name, course, marks }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Marks:</strong> {marks}%</p>
    </div>
  );
}

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>React Components and Props Demo</p>
    </header>
  );
}

function App() {
  const [message, setMessage] = useState("Welcome to the Student Dashboard!");

  const students = [
    {
      name: "Alice",
      course: "Computer Engineering",
      marks: 85
    },
    {
      name: "John",
      course: "Information Technology",
      marks: 78
    },
    {
      name: "Sara",
      course: "Computer Science",
      marks: 92
    }
  ];

  return (
    <div>
      <Header title="Student Dashboard" />

      <div className="container">
        <h2>Students</h2>

        <div className="cards">
          {students.map((student) => (
            <StudentCard
              key={student.name}
              name={student.name}
              course={student.course}
              marks={student.marks}
            />
          ))}
        </div>

        <br />

        <p>{message}</p>

        <button onClick={() => setMessage("You clicked the button!")}>
          Click Me
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
