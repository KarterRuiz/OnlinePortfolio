import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // Download resume endpoint
  app.get("/api/download/resume", (req, res) => {
    // In a real implementation, this would serve an actual PDF file
    // For now, we'll create a simple text response simulating a download
    const resumeContent = `
KARTER RUIZ - EDTECH DESIGNER & CURRICULUM ARCHITECT

Professional Summary:
EdTech Designer and Curriculum Architect specializing in K-5 learning innovation.
Passionate about creating educational experiences that spark curiosity and make learning unforgettable.
Expertise in bridging educational theory with engaging, technology-enhanced practice.

Current Project:
- Weebo: Modular, gamified K-5 learning platform transforming traditional curriculum
  into immersive educational adventures through personal & interactive world-building

Experience:
- EdTech Platform Developer (Weebo - Modular K-5 Learning Platform)
- Experience Designer for Educational Theme Park Projects
- Visual Learning Specialist (Mission Murals AR Platform)

Core Skills:
Instructional Design:
- Curriculum Development & Architecture
- Learning Experience Design
- Assessment Strategy & Gamification
- Accessibility Design & Cognitive Science

Technical Skills:
- HTML5, JavaScript, React
- AR/VR Development & Learning Analytics
- Canva, Rise 360, Educational Technology Platforms

Philosophy:
"Learning should be an adventure, not a chore. By combining thoughtful design 
with cutting-edge technology, we can create educational experiences that inspire 
wonder and foster lifelong learning."

Contact: karter.ruiz@example.com
LinkedIn: linkedin.com/in/karterruiz
`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="karter-ruiz-resume.pdf"');
    res.send(resumeContent);
  });

  // Download sample unit plans
  app.get("/api/download/unit-plans", (req, res) => {
    const unitPlansContent = `
SAMPLE UNIT PLANS - K-5 EDTECH CURRICULUM

Unit 1: Digital Citizenship Adventures
Grade Level: K-2
Duration: 4 weeks
Learning Objectives:
- Understand basic online safety concepts
- Recognize appropriate digital behavior
- Practice using educational technology tools

Activities:
1. Interactive storytelling with digital characters
2. Safe browsing simulation games
3. Collaborative digital art projects
4. Virtual field trips to online learning spaces

Assessment:
- Digital portfolio creation
- Peer collaboration evaluation
- Online safety scenario responses

Unit 2: STEM Through Virtual Worlds
Grade Level: 3-5
Duration: 6 weeks
Learning Objectives:
- Apply scientific method in virtual environments
- Understand basic coding concepts
- Collaborate on engineering design challenges

Activities:
1. Virtual science experiments
2. Block-based programming projects
3. 3D design and building challenges
4. Data collection and analysis tasks

Assessment:
- Project-based presentations
- Coding portfolio development
- Scientific method documentation
- Team collaboration rubrics
`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="sample-unit-plans.pdf"');
    res.send(unitPlansContent);
  });

  // Get contact messages (for potential admin view)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
