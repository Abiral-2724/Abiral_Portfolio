"use client";
import React from "react";
import { TextReveal } from "../magicui/text-reveal";
import {
	Timeline,
	TimelineContent,
	TimelineDate,
	TimelineHeader,
	TimelineIndicator,
	TimelineItem,
	TimelineSeparator,
	TimelineTitle,
} from "../ui/timeline";
import { CheckIcon } from "lucide-react";
import { AuroraText } from "../magicui/aurora-text";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";

const items = [
    {
		id: 1,
		date: "September 14th - 15th, 2023",
		title: "Hack JEC 1.0",
		company: "JEC Jabalpur",
		description: (
			<div className="flex flex-col gap-2">
				<p>Developed Lawverse, a website aimed at streamlining the lawyer hiring process. The platform connects clients with qualified legal professionals, simplifies communication, and enhances the search experience, ensuring efficient matching of legal needs with the right expertise in a user-friendly environment.</p>
                <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">ReactJS</Badge>
                <Badge variant="outline">Javascript</Badge>
                <Badge variant="outline">HTML</Badge>
                <Badge variant="outline">CSS</Badge>
                <Badge variant="outline">Tailwind</Badge>
                
					<Badge variant="outline">Typescript</Badge>
					<Badge variant="outline">Docker</Badge>
					<Badge variant="outline">ExpressJS</Badge>
					<Badge variant="outline">NodeJS</Badge>
					<Badge variant="outline">Git</Badge>
				</div>
			</div>
		),
	},
	{
		id: 2,
		date: "November 23rd - 25th, 2023",
		title: "Hack Xtreme",
		company: "IIT Delhi",
		description: (
			<div className="flex flex-col gap-2">
				<p>Developed a code snippet website that enables users to save their coding snippets and create a marketplace for selling their code. The platform fosters collaboration, enhances coding skills, and provides opportunities for developers to monetize their work in a user-friendly environment.</p>
				<div className="flex gap-2 flex-wrap">
                <Badge variant="outline">ReactJS</Badge>
                <Badge variant="outline">Javascript</Badge>
                <Badge variant="outline">HTML</Badge>
                <Badge variant="outline">CSS</Badge>
                <Badge variant="outline">Tailwind</Badge>
                
					<Badge variant="outline">Typescript</Badge>
					<Badge variant="outline">Docker</Badge>
					<Badge variant="outline">ExpressJS</Badge>
					<Badge variant="outline">NodeJS</Badge>
					<Badge variant="outline">Git</Badge>
				</div>
			</div>
		),
	},
    {
		id: 3,
		date: "September 8th - 9th, 2024",
		title: "Hack JEC 2.0",
		company: "JEC Jabalpur",
		description: (
			<div className="flex flex-col gap-2">
			<p>Developed an Ayush register portal designed to streamline the registration process for practitioners in the Ayush system. The platform provides easy access to essential resources, facilitates communication, and promotes efficient management of practitioner information, enhancing overall user experience and accessibility.</p>
                <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">ReactJS</Badge>
                <Badge variant="outline">Javascript</Badge>
                <Badge variant="outline">HTML</Badge>
                <Badge variant="outline">CSS</Badge>
					<Badge variant="outline">Typescript</Badge>
					<Badge variant="outline">Docker</Badge>
					<Badge variant="outline">ExpressJS</Badge>
					<Badge variant="outline">NodeJS</Badge>
					<Badge variant="outline">Git</Badge>
				</div>
			</div>
		),
	},
    
	// {
	// 	id: 2,
	// 	date: "2023",
	// 	title: "Graduation",
	// 	separator: "from",
	// 	company: "VIT, Vellore",
	// 	description:
	// 		"Graduated from college with a Bachelor of Technology in Computer Science degree 🧑‍🎓",
	// },
	// {
	// 	id: 3,
	// 	date: "October, 2022",
	// 	title: "Software Engineering Intern",
	// 	company: "Motorq",
	// 	description: (
	// 		<div className="flex flex-col gap-2">
	// 			<ul className="list-disc ml-4">
	// 				<li>Implemented in-database Geo-Spatial Clustering.</li>
	// 				<li>
	// 					Used algorithms like DBSCAN & Grid based, along with
	// 					tools like PostGIS to cluster vehicle locations and
	// 					display in the portal.
	// 				</li>
	// 				<li>
	// 					Resulted in sub 1 second processing times to cluster
	// 					over 100,000+ vehicle locations.
	// 				</li>
	// 			</ul>
	// 			<div className="flex gap-2 flex-wrap">
	// 				<Badge variant="outline">ReactJS</Badge>
	// 				<Badge variant="outline">PostgreSQL</Badge>
	// 				<Badge variant="outline">PostGIS</Badge>
	// 				<Badge variant="outline">ExpressJS</Badge>
	// 				<Badge variant="outline">Docker</Badge>
	// 				<Badge variant="outline">Kubernetes</Badge>
	// 			</div>
	// 		</div>
	// 	),
	// },
	// {
	// 	id: 4,
	// 	date: "August 2021",
	// 	title: "Software Consultant",
	// 	company: "Nearcast & Trademarkia",
	// 	description: (
	// 		<div className="flex flex-col gap-2">
	// 			<ul className="list-disc ml-4">
	// 				<li>
	// 					<span className="font-semibold">
	// 						Led the frontend development of the Trademark
	// 						Perfect platform:
	// 					</span>{" "}
	// 					Used by 100+ consumers with very high customer
	// 					satisfaction metrics and exceptional feedback.
	// 				</li>
	// 				<li>
	// 					<span className="font-semibold">
	// 						Implemented WebRTC video & audio conferencing
	// 						features:
	// 					</span>{" "}
	// 					Enabled users to have real-time & smooth calls with
	// 					other users.
	// 				</li>
	// 				<li>
	// 					Refactored the codebase to a monorepo: Increased the
	// 					scalability and maintainability of the codebase.
	// 					Enhanced cross-team code reusability
	// 				</li>
	// 			</ul>
	// 			<div className="flex gap-2 flex-wrap">
	// 				<Badge variant="outline">ReactJS</Badge>
	// 				<Badge variant="outline">ExpressJS</Badge>
	// 				<Badge variant="outline">Redux</Badge>
	// 				<Badge variant="outline">Material UI</Badge>
	// 				<Badge variant="outline">Chakra UI</Badge>
	// 				<Badge variant="outline">Stripe</Badge>
	// 			</div>
	// 		</div>
	// 	),
	// },
];

const Hackathon = () => {
	return (
		<div className="w-full xl:px-60 lg:px-30 sm:px-20 px-8 flex flex-col gap-8">
			<TextReveal className="text-center">
				Now let&apos;s talk about my hackathon experience
			</TextReveal>
			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="flex justify-center"
			>
				<Timeline defaultValue={items.length}>
					{items.map((item) => (
						<TimelineItem
							step={item.id}
							className="group-data-[orientation=vertical]/timeline:ms-10"
							key={item.id}
						>
							<TimelineHeader>
								<TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
								<TimelineDate>{item.date}</TimelineDate>
								<TimelineTitle>
									{item.title}{" "}
									<span className="font-normal">
										{"at"}
									</span>{" "}
									<AuroraText className="font-black">
										{item.company}
									</AuroraText>
								</TimelineTitle>
								<TimelineIndicator className="group-data-completed/timeline-item:bg-green-500 group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
									<CheckIcon
										className="group-not-data-completed/timeline-item:hidden"
										size={16}
									/>
								</TimelineIndicator>
							</TimelineHeader>
							<TimelineContent>
								{item.description}
							</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>
			</motion.div>
		</div>
	);
};

export default Hackathon;
