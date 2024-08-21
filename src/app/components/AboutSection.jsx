"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Soft Skills",
        id: "softskills",
        content: (
            <ul className="list-disc pl-2">
                <li>Teamwork</li>
                <li>Time Management</li>
                <li>Leadership</li>
                <li>Effective Communication</li>
                <li>Critical Thinking</li>
            </ul>
        ),
    },
    {
        title: "Tech Skills",
        id: "techskills",
        content: (
            <ul className="list-disc pl-2">
                <li>Networking: TCP/IP, LAN/WAN, VLAN, VPN, DNS, DHCP, CLI, Command Line, FTP, HTTP</li>
                <li>Software & Applications: Linux CentOS, Wirehark, SQL Server, Docker, VMWare</li>
                <li>Programming: Python, PowerShell, Java, JavaScript, SQL,XML</li>
                <li>Hardware: Routers, Switches, Firewalls, Access Points, Servers, Storage Arrays</li>
            </ul>
        ),
    },
    {
        title: "Languages",
        id: "languages",
        content: (
            <ul className="list-disc pl-2">
                <li>Thai: Native </li>
                <li>English: Proficient</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <div>
                    <div className='font-semibold text-xl'>High School Diploma</div>
                    <p className='text-slate-400'>Chainatpittayakom School</p>
                    <p className='text-cyan-200'>GPAX: 3.90</p>
                </div>
                <div>
                    <div className='font-semibold text-xl'>Bachelor of Information Technology</div>
                    <p className='text-slate-400'>School of Information technology King Mongkut’s University of Technology Thonburi</p>
                    <p className='text-cyan-200'>GPAX: 3.25</p>
                </div>
            </ul>
        ),
    },
    
]

const AboutSection = () => {
    const [tab, setTab] = useState("softskills")

    const handleTabChange = (id) => {
        setTab(id)
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/About.png" width={500} height={500} alt="About me image" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
                        I am an Information Technology student at King Mongkut’s
                        University of Technology Thonburi (KMUTT), with a deep
                        passion for cybersecurity. My academic journey has equipped
                        me with a solid foundation in IT principles, and I am
                        particularly drawn to the challenges of protecting
                        digital assets and networks. I am eager to apply my
                        knowledge in a real-world setting, develop my skills
                        further, and contribute to the field of cybersecurity.
                        I am a quick learner, a problem-solver, and highly
                        motivated to pursue a career in this dynamic
                        and ever-evolving industry.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("softskills")}
                            active={tab === "softskills"}
                        >
                            Soft Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("techskills")}
                            active={tab === "techskills"}
                        >
                            Tech Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("languages")}
                            active={tab === "languages"}
                        >
                            Languages
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection