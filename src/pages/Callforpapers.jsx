import React from "react";

const Callforpapers = () => {
  const tracks = [
    {
      title: "Track-1: Advances in Machine Learning and Deep Learning",
      topics: [
        "General Machine Learning, Active Machine Learning",
        "Fuzzy Learning",
        "Kernel Based Learning",
        "Genetic Learning",
        "Bayesian Estimation Approaches",
        "Recurrent Neural Networks",
        "Machine Learning over the Cloud",
        "Learning Paradigms",
        "Clustering, Classification and Regression Methods",
        "Supervised, Semi-Supervised and Unsupervised Learning",
        "Dimensionality reduction",
        "Reinforcement Learning",
        "Optimization Methods",
        "Video and Audio Generation and Analytics with Deep Learning",
        "Recurrent Neural Networks and its Applications",
        "Recommender Systems",
        "Bioinformatics and Biomedical Informatics",
        "Healthcare and Clinical Decision Support",
        "Information Retrieval",
        "Natural Language Processing",
        "Statistical Learning Theory",
      ],
    },
    {
      title: "Track-2: Advances in Data Science",
      topics: [
        "Mathematical, Probabilistic and Statistical Models and Theories",
        "Data Mining, Exploratory Data Analysis and Predictive Modelling",
        "Machine Learning Theories, Models and Systems",
        "Knowledge Discovery Theories, Models and Systems",
        "Manifold and Metric Learning",
        "Deep Learning and Deep Analytics",
        "Scalable Analysis and Learning",
        "Data Pre-Processing, Sampling and Reduction",
        "Time Series Analysis, Spectral Analysis and Bivariate Processes",
        "Feature Selection, Transformation and Construction",
        "Large Scale Optimization",
        "High Performance Computing for Data Analytics",
        "Architecture, Management and Process for Data Science",
        "Data Analytics, and Knowledge Discovery",
        "Data Visualization and Dashboards",
        "Data Integrity, Matching and Sharing",
        "Privacy and Protection Standards and Policies",
        "Privacy Preserving Big Data Access/Analytics",
        "Social Impact and Social Good",
      ],
    },
    {
      title:
        "Track-3: Applications of Artificial Intelligence in Interdisciplinary Areas",
      topics: [
        "Applications of AI in Manufacturing Industry",
        "Applications of AI in preventive maintenance",
        "Applications of AI in Insurance and Banking",
        "Application of AI in Machine design",
        "Applications of AI in Fluid dynamics",
        "Applications of AI in CFD/ CAD/CAM/CAE/FEA/FEM",
        "Applications of AI in Language Translation and Transliteration",
        "Evolution and Innovation of Transformers for AI Models",
        "Applications of AI in Cybersecurity",
        "Applications of AI in Robotics and Automation",
        "Applications of AI in Blockchain",
        "Applications of AI in Cloud Computing and Cloud Infrastructure",
        "Applications of AI in Precision Agriculture",
        "Applications of AI in Generation of Music and Art",
        "Applications of AI in Fashion Design",
        "Applications of AI in mobility and Autonomous vehicles",
        "Applications of AI in Healthcare, Medical Industry",
        "Applications of AI in Smart Cities and Smart Homes",
        "Applications of AI in Pharmaceutical and Drug Development",
        "Applications of AI in Bioinformatics, Genomic and DNA Sequencing/profiling",
        "Applications of AI in High Performance Computing",
        "Applications of AI in Telecommunications, Signal processing and Wireless Networks",
        "Applications of AI in Space Research, Planet Exploration, Satellite Research",
        "Applications of AI in Ocean Research",
        "Applications of AI in Renewable energy resources, Clean and Green Energy",
        "Big Data and Deep learning Applications",
        "Computational intelligence and Optimization",
      ],
    },
    {
      title: "Track-4: High Performance Computing",
      topics: [
        "Autonomic Computing",
        "Biotechnology",
        "Cluster, Cloud and Grid Computing",
        "Compiler Technologies for High-Performance Computing",
        "Distributed Computing",
        "Interconnection Network and Architecture",
        "Load Balancing, Scheduling and Resource Management",
        "Nanotechnology",
        "Operating System for High Performance Computing",
        "Parallel and Distributed Algorithms/Systems",
        "Quantum Computing",
      ],
    },
    {
      title: "Track-5: Advances in Communication and Networks",
      topics: [
        "Ad-hoc Networks",
        "Computer Networks",
        "Cryptography",
        "Cyber Crime",
        "Cyber Law & Security",
        "Ethical Hacking",
        "Fraud Control",
        "High Performance Networks",
        "High Speed Networks",
        "Information and System Security",
        "Intellectual Property Right",
        "Mobile Computing",
        "Multimedia Signal Processing",
        "Network Security and Privacy",
        "Reliable Computing",
        "RFID Applications",
        "Software Engineering for Emerging Networks and Systems",
        "Software Engineering for Mobile Systems",
        "Trusted Computing",
        "Wireless Communication",
        "Wireless Sensor Networks",
      ],
    },
    {
      title: "Track-6: Advanced Algorithms",
      topics: [
        "Approximation Algorithms",
        "Bioinformatics Algorithms",
        "Computational Biology",
        "Computational Geometry",
        "Data Compression Algorithm",
        "Parallel and Distributed Algorithms",
        "Exponential Algorithm",
        "External-Memory Algorithms",
        "Game Theory",
        "Graph Algorithms",
        "Network Algorithms",
        "On-line Algorithms",
        "Optimization Algorithms",
        "Parallel Algorithms",
        "Parameterized Algorithms",
        "Pattern Matching Algorithm",
        "Randomized Algorithms",
        "Streaming Algorithms",
        "String Algorithms",
      ],
    },
    {
      title: "Track-7: Teaching & Learning Systems",
      topics: [
        "Academic Staff/Faculty Development",
        "Accreditation and Quality Assurance",
        "Active Learning",
        "Assessment and Evaluation",
        "Computer-Based Learning and Courseware Technologies",
        "E-assessment",
        "E-learning in the Workplace",
        "Ethical and Social Justice Issues",
        "Generic Skills (e.g., Communications, Teamwork)",
        "Industry Linkages and Partnerships",
        "Infrastructure and Technology for Engineering Education",
        "Interdisciplinary Teaching Approaches",
        "Introductory Engineering and Computing Courses",
        "Learning Management Systems",
        "Learning Models",
        "Mobile Learning",
        "Service Learning",
        "Technology Enhanced Learning for students with special needs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 p-4">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 mt-20 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-6">
          Call for Papers
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          AICT-2025 is soliciting original, previously unpublished and high
          quality research papers addressing research challenges and advances in
          the tracks mentioned below. The topics of the conference include, but
          are not limited to:
        </p>
        {tracks.map((track, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {track.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {track.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Callforpapers;
