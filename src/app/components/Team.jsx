"use client";
import React, { useState, useRef } from "react";
import TeamCard from "./TeamCard";
import TeamTag from "./TeamTag";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const TeamData = [
  {
    id: 1,
    title: "Sabyasachi Mohanty",
    description: "Founder & CEO",
    image: "/sabya.png",
    tag: ["Leadership"],
    fulldescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus natus in, velit consequatur reiciendis exercitationem libero hic porro excepturi repellat nostrum quidem aut explicabo voluptas odio ab quas. Sint, mollitia.",
  },
  {
    id: 2,
    title: "lorem ipsum",
    description: "CMO",
    image: "/Satyajit.png",
    tag: ["Leadership"],
    fulldescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus natus in, velit consequatur reiciendis exercitationem libero hic porro excepturi repellat nostrum quidem aut explicabo voluptas odio ab quas. Sint, mollitia.",
  },
  {
    id: 3,
    title: "lorem ipsum",
    description: "Senior Leadership",
    image: "/sabya.png",
    tag: ["Board of Advisor"],
    fulldescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus natus in, velit consequatur reiciendis exercitationem libero hic porro excepturi repellat nostrum quidem aut explicabo voluptas odio ab quas. Sint, mollitia.",
  },
  {
    id: 4,
    title: "lorem ipsum",
    description: "lorem ipsumlorem ipsum lorem ipsumlorem ipsum",
    image: "/dramin.png",
    tag: ["Board of Advisor"],
  },
  {
    id: 5,
    title: "lorem ipsum lorem ipsum",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "/sabya.png",
    tag: ["Board of Advisor"],
  },
  {
    id: 6,
    title: "lorem ipsum lorem ipsum",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "/dramin.png",
    tag: ["Board of Advisor"],
  },
  {
    id: 7,
    title: "lorem ipsum lorem ipsum",
    description:
      "lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    image: "/sabya.png",
    tag: ["Board of Advisor"],
  },
  {
    id: 8,
    title: "lorem ipsum lorem ",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum.",
    image: "/dramin.png",
    tag: ["Board of Advisor"],
  },

  {
    id: 9,
    title: "lorem ipsum",
    description: "Co-Founder & CXO",
    image: "/pritam.png",
    tag: ["Leadership"],
  },
];

const Team = () => {
  const [tag, setTag] = useState("Leadership");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const filteredTeam = TeamData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="Team"
      style={{
        marginTop: "200px;",
      }}
    >
      <h2>Team</h2>
      <div>
        <TeamTag
          onClick={handleTagChange}
          name="Leadership"
          isSelected={tag === "Leadership"}
        />
        <TeamTag
          onClick={handleTagChange}
          name="Board of Advisor"
          isSelected={tag === "Board of Advisor"}
        />
      </div>
      <ul ref={ref} className="horizontal-scroll">
        {filteredTeam.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <TeamCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              onClick={() => handleCardClick(project)}
            />
          </motion.li>
        ))}
      </ul>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleCloseModal}
        >
          <div
            className="modal-content p-4 bg-white rounded-lg max-w-lg w-full relative"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-black"
              onClick={handleCloseModal}
              style={{
                color: "black",
                backgroundColor: "grey",
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              &times;
            </button>
            <Image
              src={selectedProject.image}
              width={500}
              height={300}
              alt="photo"
            />
            <div className="overflow-y">
              <p className="max-w-xl">
                <b>{selectedProject.title}</b>
                <br />
                {selectedProject.fulldescription ||
                  "No full description provided."}
              </p>
            </div>
            {/* <button
              style={{ color: "black", backgroundColor: "grey" }}
              onClick={handleCloseModal}
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
