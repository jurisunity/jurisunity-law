
const OnlineCertifiedCourse = () => {
  const courses = [
    {
      title: "Certificate Course in Legal Drafting",
      duration: "3 Months",
      price: "$199",
    },
    {
      title: "Certificate Course in Cyber Law",
      duration: "6 Months",
      price: "$299",
    },
    {
      title: "Certificate Course in Intellectual Property Rights (IPR)",
      duration: "2 Months",
      price: "$149",
    },
    {
      title: "Certificate Course in Corporate Law",
      duration: "3 Months",
      price: "$199",
    },
    {
      title: "Certificate Course in Human Rights Law",
      duration: "6 Months",
      price: "$299",
    },
    {
      title: "Certificate Course in Environmental Law",
      duration: "2 Months",
      price: "$149",
    },
    {
      title: "Certificate Course in Labour Law",
      duration: "2 Months",
      price: "$149",
    },
    {
      title: "Certificate Course in Alternative Dispute Resolution (ADR)",
      duration: "2 Months",
      price: "$149",
    },
    {
      title: "Certificate Course in Taxation Law",
      duration: "2 Months",
      price: "$149",
    },
    {
      title: "Certificate Course in Family Law",
      duration: "2 Months",
      price: "$149",
    },
    {
      title: "Certificate Course in International Law",
      duration: "2 Months",
      price: "$149",
    },
    {
      title: "Certificate Course in Competition Law",
      duration: "2 Months",
      price: "$149",
    },
    {
      title: "Certificate Course in Constitutional Law",
      duration: "2 Months",
      price: "$149",
    },
    {
      title: "Certificate Course in Criminal Law",
      duration: "2 Months",
      price: "$149",
    },
    {
      title: "Certificate Course in Media and Entertainment Law",
      duration: "2 Months",
      price: "$149",
    },
    // Add more courses as needed
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Online Certified Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md hover:bg-slate-600 ">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>      
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCertifiedCourse;
