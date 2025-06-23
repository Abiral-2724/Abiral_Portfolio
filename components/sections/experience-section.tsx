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
		date: "Jan, 2025",
		title: "Software Development Intern",
		company: "Zero65 technologies",
		description: (
			<div className="flex flex-col gap-2">
				<ul className="list-disc ml-4">
					<li>
					Developed and optimized RESTful APIs for efficient retrieval of stock data from NSE and BSE, implementing robust
					data transformation pipelines to create structured, easily processable CSV files.
					</li>
					<li>
					Engineered an automated workflow service to sequence API calls, significantly optimizing data retrieval and
					transformation processes.
					</li>
					<li>
					Built and maintained a robust data pipeline for cleaning, staging, and serving historical stock price data, improving data
					accessibility and ensuring usability for downstream applications.
					</li>
					
				</ul>
				<div className="flex gap-2 flex-wrap">
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

const ExperienceSection = () => {
	return (
		<div className="w-full xl:px-60 lg:px-30 sm:px-20 px-8 flex flex-col gap-8">
			<TextReveal className="text-center">
				Now let&apos;s talk about my experience
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

export default ExperienceSection;
