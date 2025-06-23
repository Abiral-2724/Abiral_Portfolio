"use client";
import React from "react";
import { TextReveal } from "../magicui/text-reveal";
import { AuroraText } from "../magicui/aurora-text";
import { GradientBars } from "../ui/gradient-bars";
import { motion } from "motion/react";

const EasterEggSection = () => {
	return (
		<>
			<div className="pb-10">
				<TextReveal className="text-center">
					Oh, you found an easter egg!
				</TextReveal>
				<div className="flex flex-col gap-10 lg:px-30 px-8">
					<motion.h2
						className="text-4xl font-bold text-center"
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<AuroraText>
							Just so you can get to know me better,
							<br /> here are some of my favorite songs!
						</AuroraText>
					</motion.h2>
					<motion.h3
						className="text-xl text-center"
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						Feel free to reach out to me to appreciate or roast my
						music taste (and recommendations!) 🙏
					</motion.h3>
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mt-30 grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
					>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.9,
								filter: "blur(5px)",
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="col-span-1 md:col-span-2 w-full"
						>
							<iframe
								className="rounded-[12px]"
								src="https://open.spotify.com/embed/track/63HwAAXuSV2tzIUPoHOwZa?utm_source=generator"
								width="100%"
								height="152"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</motion.div>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.9,
								filter: "blur(5px)",
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="col-span-1 w-full"
						>
							<iframe
								className="rounded-[12px]"
								src="https://open.spotify.com/embed/track/0U0ldCRmgCqhVvD6ksG63j?utm_source=generator&theme=0"
								width="100%"
								height="152"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</motion.div>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.9,
								filter: "blur(5px)",
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="col-span-1 w-full"
						>
							<iframe
								className="rounded-[12px]"
								src="https://open.spotify.com/embed/track/2X485T9Z5Ly0xyaghN73ed?utm_source=generator"
								width="100%"
								height="152"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</motion.div>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.9,
								filter: "blur(5px)",
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="col-span-1 md:col-span-2 w-full"
						>
							<iframe
								className="rounded-[12px]"
								src="https://open.spotify.com/embed/track/0Ftrkz2waaHcjKb4qYvLmz?utm_source=generator"
								width="100%"
								height="152"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</motion.div>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.9,
								filter: "blur(5px)",
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="col-span-1 md:col-span-3 w-full"
						>
							<iframe
								className="rounded-[12px]"
								src="https://open.spotify.com/embed/track/68lTEhMEx4MxDCJypT6bXE?utm_source=generator"
								width="100%"
								height="152"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</motion.div>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.9,
								filter: "blur(5px)",
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="col-span-1 w-full"
						>
							<iframe
								className="rounded-[12px]"
								src="https://open.spotify.com/embed/track/2c3KCGq6UojB2c8UAFrRON?utm_source=generator"
								width="100%"
								height="152"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</motion.div>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.9,
								filter: "blur(5px)",
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="col-span-1 w-full"
						>
							<iframe
								className="rounded-[12px]"
								src="https://open.spotify.com/embed/track/1FSwIftO4BGQ97aUhbYN2E?utm_source=generator"
								width="100%"
								height="152"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</motion.div>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.9,
								filter: "blur(5px)",
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.5 }}
							className="col-span-1 w-full"
						>
							<iframe
								className="rounded-[12px]"
								src="https://open.spotify.com/embed/track/40tPP3K10yMZxwnT65REKj?utm_source=generator"
								width="100%"
								height="152"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</motion.div>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.9,
								filter: "blur(5px)",
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="md:col-span-3 col-span-1 w-full"
						>
							<iframe
								className="rounded-[12px]"
								src="https://open.spotify.com/embed/track/7bHT9osSq1rwT2yaImzqCi?utm_source=generator"
								width="100%"
								height="152"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</motion.div>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.9,
								filter: "blur(5px)",
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="col-span-1 w-full"
						>
							<iframe
								className="rounded-[12px]"
								src="https://open.spotify.com/embed/track/39glDGcpBhLVMSsQhvtqHR?utm_source=generator"
								width="100%"
								height="152"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</motion.div>
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.9,
								filter: "blur(5px)",
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="col-span-1 md:col-span-2 w-full"
						>
							<iframe
								className="rounded-[12px]"
								src="https://open.spotify.com/embed/track/6WzRpISELf3YglGAh7TXcG?utm_source=generator"
								width="100%"
								height="152"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</motion.div>
					</motion.div>
				</div>
			</div>
			<div className="h-screen flex items-center justify-center relative">
				<GradientBars colors={["#7928CA", "transparent"]} />
				<motion.h1
					className="text-center md:text-7xl text-5xl font-bold z-10"
					initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.3 }}
				>
					Ok, now bye for real! 👋
				</motion.h1>
			</div>
		</>
	);
};

export default EasterEggSection;
