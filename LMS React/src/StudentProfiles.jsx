import "./StudentProfiles.css";

import rahulImg from "./assets/download.jpg";
import priyaImg from "./assets/download.jpg";

function StudentProfiles() {
  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      course: "B.Tech CSE",
      year: "3rd Year",
      cgpa: "8.5",
      image: rahulImg,
    },
    {
      id: 2,
      name: "Priya Singh",
      course: "BCA",
      year: "2nd Year",
      cgpa: "9.1",
      image: priyaImg,
    },
  ];

  return (
    <>
      <h1 className="dashboard-title">
        Student Profile Dashboard
      </h1>

      <div className="container">
        {students.map((student) => (
          <div className="card" key={student.id}>
            <img
              src={student.image}
              alt={student.name}
              className="profile-img"
            />

            <p>
              <strong>Name:</strong> {student.name}
            </p>

            <p>
              <strong>Course:</strong> {student.course}
            </p>

            <p>
              <strong>Year:</strong> {student.year}
            </p>

            <p>
              <strong>CGPA:</strong> {student.cgpa}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default StudentProfiles;