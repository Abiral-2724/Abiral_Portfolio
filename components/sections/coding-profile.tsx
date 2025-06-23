"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, Code2, Trophy, Star } from "lucide-react";
import { TextReveal } from "../magicui/text-reveal";

const codingProfiles = [
  {
    id: 1,
    date: "Active Since 2023",
    platform: "LeetCode",
    username: "abiraljain2004",
    profileUrl: "https://leetcode.com/u/abiraljain2004/",
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    icon: Code2,
  },
  {
    id: 2,
    date: "Active Since 2022",
    platform: "GeeksforGeeks",
    username: "abiral_274",
    profileUrl: "https://www.geeksforgeeks.org/user/abiral_274/",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    icon: Trophy,
  },
  {
    id: 3,
    date: "Active Since 2023",
    platform: "Coding Ninjas",
    username: "abiral_2724",
    profileUrl: "https://www.naukri.com/code360/profile/03210753-7b5b-42d7-94ea-d51ec4907181",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    icon: Star,
  },
  {
    id: 4,
    date: "Active Since 2024",
    platform: "Codeforces",
    username: "abiral2004jain",
    profileUrl: "https://codeforces.com/profile/abiral2004jain",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    icon: Code2,
  }
];

const CodingProfilesShowcase = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br ">
      <div className="xl:px-60 lg:px-30 sm:px-20 px-8 flex flex-col gap-12 text-white py-16">
        
        {/* Header with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <TextReveal className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
            Now let&apos;s check out my coding profiles
          </TextReveal>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Enhanced Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative max-w-4xl w-full">
            {/* Enhanced Vertical Line with gradient */}
            <div className="absolute left-6 top-8 w-0.5 h-[calc(100%-4rem)] bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
            
            {codingProfiles.map((profile, index) => {
              const IconComponent = profile.icon;
              return (
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100 
                  }}
                  className="relative flex items-start gap-8 pb-16 group"
                >
                  {/* Enhanced Check Icon with gradient border */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${profile.color} rounded-full p-0.5`}>
                      <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                        <Check size={20} className="text-white" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Enhanced Content Card */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-1 p-6 rounded-2xl border ${profile.borderColor} ${profile.bgColor} backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group-hover:shadow-lg`}
                  >
                    {/* Date with enhanced styling */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className={`text-sm font-semibold mb-3 bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}
                    >
                      {profile.date}
                    </motion.div>

                    {/* Platform title with icon */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-2 rounded-lg ${profile.bgColor} border ${profile.borderColor}`}>
                        <IconComponent size={20} className={`text-transparent bg-gradient-to-r ${profile.color} bg-clip-text`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gray-200 transition-colors">
                          {profile.platform}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400 font-mono text-sm">
                            @{profile.username}
                          </span>
                          <motion.a
                            href={profile.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-2 rounded-lg ${profile.bgColor} border ${profile.borderColor} hover:shadow-lg transition-all duration-300 group`}
                          >
                            <ExternalLink 
                              size={16} 
                              className={`text-gray-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${profile.color} group-hover:bg-clip-text transition-all duration-300`}
                            />
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="flex gap-2 flex-wrap">
                      <Badge 
                        variant="outline" 
                        className={`${profile.borderColor} ${profile.bgColor} text-gray-300 hover:text-white transition-colors`}
                      >
                        Problem Solving
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={`${profile.borderColor} ${profile.bgColor} text-gray-300 hover:text-white transition-colors`}
                      >
                        Algorithms
                      </Badge>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        
      </div>
    </div>
  );
};

export default CodingProfilesShowcase;