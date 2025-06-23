"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const ProjectSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="sm:px-30 px-8 mt-30 py-10 flex flex-col gap-8"
		>
			<div className="flex justify-center items-center flex-col  gap-4">
				<Badge
					variant="destructive"
					className="sm:text-4xl text-3xl font-bold tracking-wide "
				>
					My Projects
				</Badge>
				<motion.div
					initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-10"
				>
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-3"
					>
						<WobbleCard containerClassName="w-full h-full bg-green-700 min-h-[550px] lg:min-h-[350px]">
							<Link
								href="https://github.com/Abiral-2724/ThreadScape-app"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="lg:max-w-lg w-full">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
								Threadscape
								</h2>
								<p className="mt-4 text-left  text-base/6 text-neutral-200">
								Developed Threadscape, a collaborative discussion platform built with Next.js, allowing users to easily manage threads and communities. Features include effortless thread creation, updates, and deletions, secure authentication via Clerk, and real-time updates with notifications. Users can search for others by username, manage their profiles, and track activity. Community creation and email invitations foster engaging discussions.
								</p>
							</div>
							<Image
								src="https://res.cloudinary.com/dci6nuwrm/image/upload/v1750697144/Screenshot_2025-06-23_at_10.14.03_PM_grzc1h.png"
								width={500}
								height={500}
								alt="Threadscape"
								className="absolute -right-4 -bottom-20 md:-bottom-10 rounded-2xl"
							/>
						</WobbleCard>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-3"
					>
						<WobbleCard containerClassName="w-full h-full min-h-[500px] xl:min-h-[300px]">
							<Link
								href="https://github.com/Abiral-2724/video-calling-app"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="lg:max-w-xs w-full">
								<h2 className="text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
								TalkSpace
								</h2>
								<p className="mt-4 text-left  text-base/6 text-neutral-200">
								TalkSpace is an innovative web application built using the Next.js framework, designed to make virtual communication seamless and efficient. The platform empowers users to create and join online meetings effortlessly, share meeting links, and access recordings of past sessions for future reference.
								</p>
							</div>
							<Image
								src="https://res.cloudinary.com/dci6nuwrm/image/upload/v1750697783/Screenshot_2025-06-23_at_10.26.07_PM_xuhdej.png"
								width={500}
								height={500}
								alt="project-devsoc"
								className="absolute -right-4 lg:-right-[10%] -bottom-5 object-contain rounded-2xl"
							/>
						</WobbleCard>
					</motion.div>
					{/* <motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="col-span-1"
					>
						<WobbleCard containerClassName="min-h-[300px] bg-pink-800">
							<Link
								href="https://github.com/CodeChefVIT/cetFrontend"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<h2 className="text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
								Common Entry Test Portal
							</h2>
							<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
								Common Entry Test is a centralised portal for
								clubs & chapters recruitments in the VIT Vellore
								Campus.
								<span className="font-bold">
									The website had more than 67,000+ page views
									and 3000+ students gave tests through the
									portal in the span of a month.
								</span>
							</p>
						</WobbleCard>
					</motion.div> */}
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-3"
					>
						<WobbleCard containerClassName="h-full bg-purple-900 min-h-[500px] lg:min-h-[300px]">
							<Link
								href="https://github.com/Abiral-2724/Anonymous-message-Nextjs"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="lg:max-w-lg w-full">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
								Mystery Message
								</h2>
								<p className="mt-4 text-left  text-base/6 text-neutral-200">
								Developed Mystry Message, a secure messaging platform built with Next.js, Zod, and NextAuth, allowing users to send and receive messages securely. Features include secure user authentication via email-based verification, the ability to send messages to specific users, and a user dashboard to view all received messages. Users can manage their inbox by deleting unwanted messages and control their settings to accept or delete incoming messages.
								</p>
							</div>
							<Image
								src="https://res.cloudinary.com/dci6nuwrm/image/upload/v1750697698/Screenshot_2025-06-23_at_10.12.32_PM_skvyca.png"
								width={500}
								height={500}
								alt="project-coded"
								className="absolute -right-4 lg:-right-[10%] -bottom-5 object-contain rounded-2xl"
							/>
						</WobbleCard>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-3"
					>
						<WobbleCard containerClassName="h-full bg-pink-700 min-h-[500px] lg:min-h-[300px]">
							<Link
								href="https://github.com/Abiral-2724/JobPortal"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="lg:max-w-lg w-full">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
								Job Hunt
								</h2>
								<p className="mt-4 text-left  text-base/6 text-neutral-200">
								Developed a full-stack job portal website using the MERN stack, allowing users to browse and apply for jobs while enabling admins to register companies and post job openings. Implemented user authentication, advanced search, and filtering by location, salary, and job type. Built a secure backend API with Node.js, Express, and MongoDB.
								</p>
							</div>
							<Image
								src="https://res.cloudinary.com/dci6nuwrm/image/upload/v1750698016/Screenshot_2025-06-23_at_10.29.59_PM_cdbqep.png"
								width={500}
								height={500}
								alt="project-coded"
								className="absolute -right-4 lg:-right-[10%] -bottom-5 object-contain rounded-2xl"
							/>
						</WobbleCard>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-3"
					>
						<WobbleCard containerClassName="h-full bg-rose-900 min-h-[500px] lg:min-h-[300px]">
							<Link
								href="https://github.com/Abiral-2724/Youtube_thumbnail_generator"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="lg:max-w-lg w-full">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
								YouTube Thumbnail Generator
								</h2>
								<p className="mt-4 text-left  text-base/6 text-neutral-200">
								Developed a web application for generating, managing, and downloading YouTube thumbnails from video URLs. Implemented a collection management system for easy organization and retrieval. Enabled one-click downloads for individual or bulk thumbnails.
								</p>
							</div>
							<Image
								src="https://res.cloudinary.com/dci6nuwrm/image/upload/v1750698069/Screenshot_2025-06-23_at_10.29.50_PM_cviexv.png"
								width={500}
								height={500}
								alt="project-coded"
								className="absolute -right-4 lg:-right-[10%] -bottom-5 object-contain rounded-2xl"
							/>
						</WobbleCard>
					</motion.div>

					
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-3"
					>
						<WobbleCard containerClassName="h-full bg-blue-600 min-h-[500px] lg:min-h-[300px]">
							<Link
								href="https://github.com/Abiral-2724/Quick-chat--backend"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>
							<div className="lg:max-w-lg w-full">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
								Lakshadweep Tourism
								</h2>
								<p className="mt-4 text-left  text-base/6 text-neutral-200">
								The Lakshadweep Tourism website highlights the breathtaking beauty of Lakshadweep, featuring stunning visuals of its pristine beaches, turquoise waters, and lush landscapes. It focuses on showcasing the natural charm of the islands, offering visitors a glimpse of the serene environment and picturesque locations perfect for a peaceful tropical escape.
					</p>
							</div>
							<Image
								src="https://res.cloudinary.com/dci6nuwrm/image/upload/v1750698186/Screenshot_2025-06-23_at_10.32.45_PM_msfsqw.png"
								width={500}
								height={500}
								alt="project-coded"
								className="absolute -right-4 lg:-right-[10%] -bottom-5 object-contain rounded-2xl"
							/>
						</WobbleCard>
					</motion.div>


				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className="flex justify-center"
			>
				<h2 className="sm:text-2xl text-xl font-bold tracking-wide">
					...and many more
				</h2>
			</motion.div>
		</motion.div>
	);
};

export default ProjectSection;
