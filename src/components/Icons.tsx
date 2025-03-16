'use client';

import React from 'react';
import { FiMenu, FiX, FiGitBranch, FiCpu, FiCode, FiCheckCircle, FiShield, FiArrowRight, FiArrowDown, FiZap, FiBarChart2, FiCloud, FiUsers, FiSettings } from 'react-icons/fi';
import { FaRobot, FaRocket } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

// Export icons with consistent interface
export const Menu = (props: any) => <FiMenu {...props} />;
export const X = (props: any) => <FiX {...props} />;
export const Workflow = (props: any) => <FiGitBranch {...props} />;
export const Cpu = (props: any) => <FiCpu {...props} />;
export const Code = (props: any) => <FiCode {...props} />;
export const Rocket = (props: any) => <FaRocket {...props} />;
export const CheckCircle = (props: any) => <FiCheckCircle {...props} />;
export const Bot = (props: any) => <FaRobot {...props} />;
export const Shield = (props: any) => <FiShield {...props} />;
export const ArrowRight = (props: any) => <FiArrowRight {...props} />;
export const ArrowDown = (props: any) => <FiArrowDown {...props} />;
export const Star = (props: any) => <AiFillStar {...props} />;
export const Zap = (props: any) => <FiZap {...props} />;
export const ChartBar = (props: any) => <FiBarChart2 {...props} />;
export const Cloud = (props: any) => <FiCloud {...props} />;
export const Users = (props: any) => <FiUsers {...props} />;
export const Settings = (props: any) => <FiSettings {...props} />; 