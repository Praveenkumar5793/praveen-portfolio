import { PDFDocument, StandardFonts } from 'pdf-lib';
import fs from 'fs';

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.276, 841.89]); // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const { width, height } = page.getSize();
  const margin = 50;
  let y = height - 50;

  // Header
  page.drawText('PRAVEEN KUMAR KALVA', { x: margin, y, size: 20, font: boldFont });
  y -= 18;
  page.drawText('Full Stack Developer | React.js & Node.js Engineer', { x: margin, y, size: 11, font: boldFont });
  y -= 16;
  page.drawText('+91 6303300931 | kalvapraveen62@gmail.com | LinkedIn | GitHub', { x: margin, y, size: 9.5, font: font });
  y -= 25;

  // Professional Summary
  page.drawText('PROFESSIONAL SUMMARY', { x: margin, y, size: 11, font: boldFont });
  y -= 14;
  const summaryText = 'Full Stack Developer with professional software engineering experience specializing in React.js, TypeScript, and modern web architectures. Experienced in building responsive frontend components, integrating GraphQL APIs with Apollo Client, and working with Node.js backend services and SQL/NoSQL databases. Actively leveraging AI-Assisted Development & Vibe Coding: utilizing AI assistants, structured prompting, and iterative workflows to build intelligent end-to-end applications.';

  function drawWrappedText(text, x, startY, maxWidth, fontSize, font) {
    const words = text.split(' ');
    let line = '';
    let currentY = startY;
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const width = font.widthOfTextAtSize(testLine, fontSize);
      if (width > maxWidth && i > 0) {
        page.drawText(line, { x, y: currentY, size: fontSize, font });
        line = words[i] + ' ';
        currentY -= fontSize + 4;
      } else {
        line = testLine;
      }
    }
    page.drawText(line, { x, y: currentY, size: fontSize, font });
    return currentY - (fontSize + 6);
  }

  y = drawWrappedText(summaryText, margin, y, width - 100, 9.5, font);
  y -= 8;

  // Professional Experience
  page.drawText('PROFESSIONAL EXPERIENCE', { x: margin, y, size: 11, font: boldFont });
  y -= 14;
  page.drawText('Software Engineer — Peritus Corporation Pvt. Ltd.', { x: margin, y, size: 9.5, font: boldFont });
  page.drawText('September 2025 – Present', { x: width - 170, y, size: 9.5, font: font });
  y -= 14;

  const expBullets = [
    'Develop and maintain responsive user interfaces for the Nebula Identity Access enterprise platform using React.js, TypeScript, and CSS3.',
    'Design and implement reusable, modular React components to enhance application scalability and maintainability.',
    'Integrate frontend modules with GraphQL APIs using Apollo Client to efficiently manage data retrieval and state.',
    'Collaborate with backend teams to ensure seamless API integration and troubleshoot complex full-stack issues.',
    'Utilize Git and GitLab for version control, collaborative development, and code reviews to maintain high quality standards.'
  ];

  expBullets.forEach(bullet => {
    page.drawText('•', { x: margin, y, size: 9.5, font: font });
    y = drawWrappedText(bullet, margin + 15, y, width - 120, 9, font);
  });
  y -= 8;

  // Technical Skills
  page.drawText('TECHNICAL SKILLS', { x: margin, y, size: 11, font: boldFont });
  y -= 14;
  const skills = [
    'Frontend Development: React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, React Router, Tailwind CSS, Bootstrap',
    'Backend & APIs: Node.js, Express.js, GraphQL, Apollo Client, REST APIs, Microservices Integration',
    'Databases & Storage: PostgreSQL, Microsoft SQL Server, SQLite, MongoDB',
    'AI & Agentic Learning: LLM Fundamentals, AI API Integration, Prompt Engineering, Agentic AI Concepts',
    'AI-Assisted Workflows: Vibe Coding, AI Coding Assistants (Cursor, Claude Code), AI-Guided Prototyping',
    'Tools & Practices: Git, GitLab, GitHub, VS Code, Postman, npm, Vite, Agile Collaboration'
  ];
  skills.forEach(skill => {
    page.drawText('• ' + skill, { x: margin, y, size: 9, font: font });
    y -= 13;
  });
  y -= 8;

  // Projects
  page.drawText('PROJECTS', { x: margin, y, size: 11, font: boldFont });
  y -= 14;
  page.drawText('Nebula Identity Access Project (Enterprise)', { x: margin, y, size: 9.5, font: boldFont });
  y -= 12;
  y = drawWrappedText('Developed core frontend features for an enterprise-grade identity access management system using React.js and TypeScript. Managed global state and secure auth workflows with Apollo Client and GraphQL APIs.', margin + 10, y, width - 110, 9, font);

  y -= 4;
  page.drawText('Smart Farming System (IoT / ML)', { x: margin, y, size: 9.5, font: boldFont });
  y -= 12;
  y = drawWrappedText('Designed an IoT system to monitor soil metrics and automate irrigation processes using telemetry sensors and machine learning automation components.', margin + 10, y, width - 110, 9, font);

  y -= 4;
  page.drawText('AI-Assisted Portfolio (Vibe Coding)', { x: margin, y, size: 9.5, font: boldFont });
  y -= 12;
  y = drawWrappedText('Full-stack responsive portfolio engineered using AI-assisted development workflows, demonstrating practical application of AI coding assistants and agentic design.', margin + 10, y, width - 110, 9, font);
  y -= 8;

  // Education & Certifications
  page.drawText('EDUCATION & CERTIFICATIONS', { x: margin, y, size: 11, font: boldFont });
  y -= 14;
  page.drawText('Bachelor of Technology in ECE — Tirumala Engineering College (2019 – 2025)', { x: margin, y, size: 9, font: font });
  y -= 12;
  page.drawText('Certifications: Full Stack Web Development & Frontend, Node.js & Advanced React, Python & Databases', { x: margin, y, size: 9, font: font });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('C:/tmp/portfolio-neon/public/Praveen_Resume.pdf', pdfBytes);
  console.log('Updated resume PDF created successfully at C:/tmp/portfolio-neon/public/Praveen_Resume.pdf');
}

createResume().catch(console.error);