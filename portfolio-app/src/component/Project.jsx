import React from "react";

const Project = () => {
  console.log();

  const Projects = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg",
      title: "BeautyHub",
      description:
        "BeautyHub is an online beauty and cosmetic eCommerce platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It offers a diverse range of skincare, makeup, haircare, and fragrance products. Users can browse products, add them to their carts, and securely complete transactions. Features include user authentication, product search and filtering, a streamlined checkout process, and order management. Admins can manage products, categories, and orders via an intuitive dashboard. The website is responsive for optimal viewing across devices. Future enhancements may include social media integration, personalized recommendations, and loyalty programs. BeautyHub aims to provide a seamless shopping experience for beauty enthusiasts worldwide.",
    },
    {
      id: 2,
      img: "https://s3.us-east-2.amazonaws.com/stg.uploads.slidenest/template_821/templateColor_855/previewImages/crime-investigation-research-powerpoint-google-slides-keynote-presentation-template-1.jpeg",
      title: "CrimeReportSys",
      description: "CrimeReportSys is an online crime report management system developed using JSP, Java, and MySQL. It facilitates the submission and management of crime reports by citizens and law enforcement agencies. Features include user authentication, report submission, case management, and statistical analysis. Users can report crimes, track case statuses, and provide updates. Admins can manage users, view reports, assign cases, and generate reports. The system enhances efficiency in crime investigation and promotes community safety through data-driven insights.",
    },
    {
      id: 3,
      img: "https://t3.ftcdn.net/jpg/03/45/97/36/240_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg",
      title: "Quizify",
      description: "Quizify is a web-based application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It offers a dynamic and interactive platform for creating, managing, and taking quizzes. Users can register, log in, and access a variety of quizzes on different topics. Features include user authentication, quiz creation, quiz taking, real-time scoring, and leaderboard tracking. Admins have the ability to create and edit quizzes, manage user accounts, and view analytics. The platform promotes learning and engagement through gamified quizzes and fosters community interaction through shared leaderboards.",
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
      title: "BloomBlog",
      description: "BloomBlog is an online blogging system developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a user-friendly interface for creating, publishing, and managing blog posts. Users can register, log in, and customize their profiles. Features include post creation, editing, deletion, commenting, and liking. The platform supports rich text formatting, image uploads, and categorization of posts. Admins have access to additional functionalities such as user management, content moderation, and analytics. The platform encourages content creation, community engagement, and sharing of ideas through written expression",
    },
  ];

  return (
    <div className="bg-slate-200">
    <h1 className="text-3xl text-center font-extrabold tracking-widest uppercase font-serif py-5 border-spacing-2">
      Projects
    </h1>
    {Projects.map((p) => (
      <div className="flex flex-col md:flex-row items-center mx-auto justify-center py-3 my-8" key={p.id}>
        <img
          src={p.img}
          width="600px"
          alt="img"
          className="w-full md:w-2/5 mb-4 md:mb-0 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-transform duration-900"
        />
        <div className="md:ml-8 md:w-3/5">
          <span className="text-2xl font-bold tracking-widest font-sans"> {p.title} </span>
          <p className="text-lg font lg:text-xl text-start text-gray-700 lg:w-[200px] xl:w-[600px]">{p.description}</p>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default Project;
