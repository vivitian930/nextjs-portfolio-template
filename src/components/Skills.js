import { motion } from "framer-motion"
import React from "react"

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
          dark:bg-light dark:text-dark
        p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Cloud
        </motion.div>
        <Skill name="Web" x="-5vw" y="-10vw" />
        <Skill name="Azure" x="-8vw" y="2vw" />
        <Skill name="Azure DevOps" x="-10vw" y="10vw" />
        <Skill name="Kubernetes" x="5vw" y="10vw" />
        <Skill name="Service Mesh/Istio" x="25vw" y="0vw" />
        <Skill name="System Design" x="25vw" y="-8vw" />
        <Skill name="Cloud Native App" x="40vw" y="3vw" />
        <Skill name="Docker" x="-35vw" y="0vw" />
        <Skill name="Git/GitHub" x="-25vw" y="-3vw" />
        <Skill name="CI/CD Yaml pipelines" x="5vw" y="-18vw" />
        <Skill name="DevOps Engineer" x="15vw" y="-28vw" />
        <Skill name="Platform Engineer" x="25vw" y="-20vw" />
        <Skill name="Solution Architect" x="5vw" y="-10vw" />
        <Skill name="DevOps/GitOps" x="10vw" y="-0vw" />
        <Skill name="Cloud Engineering" x="15vw" y="15vw" />
        <Skill name="Backend Engineer" x="-15vw" y="-6vw" />
        <Skill name="IaC/Terraform" x="-20vw" y="-20vw" />
        <Skill name="Infrastructure as Code" x="-26vw" y="-15vw" />
        <Skill name="Nodejs" x="-20vw" y="20vw" />
        <Skill name="Python" x="20vw" y="10vw" />
        <Skill name="Bash/Powershell Scripting" x="5vw" y="20vw" />
      </div>
    </>
  )
}

export default Skills
