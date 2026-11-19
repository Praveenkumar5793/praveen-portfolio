const { PDFDocument, StandardFonts } = require('pdf-lib');
const fs = require('fs');

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
  y -= 25;
  page.drawText('+91 6303300931 | kalvapraveen62@gmail.com | LinkedIn | GitHub', { x: margin, y, size: 10, font: font });
  y -= 30;

  // Professional Summary
  page.drawText('PROFESSIONAL SUMMARY', { x: margin, y, size: 12, font: boldFont });
  y -= 18;
  const summaryText = 'Software Engineer with professional experience specializing in Frontend Development, React.js, and TypeScript. Experienced in developing scalable, modular components and integrating GraphQL APIs with Apollo Client. Exploring AI Application Development, LLM integration, prompt engineering, and Agentic AI workflows through hands-on learning and AI-assisted development (Vibe Coding).';

  // Simple text wrapping helper
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

  y = drawWrappedText(summaryText, margin, y, width - 100, 10, font);
  y -= 10;

  // Professional Experience
  page.drawText('PROFESSIONAL EXPERIENCE', { x: margin, y, size: 12, font: boldFont });
  y -= 18;
  page.drawText('Software Engineer — Peritus Corporation Pvt. Ltd.', { x: margin, y, size: 10, font: boldFont });
  page.drawText('September 2025 – Present', { x: width - 180, y, size: 10, font: font });
  y -= 15;

  const expBullets = [
    'Develop and maintain responsive user interfaces for the Nebula Identity Access enterprise platform using React.js, TypeScript, and CSS3.',
    'Design and implement reusable, modular React components to enhance application scalability and maintainability.',
    'Integrate frontend modules with GraphQL APIs using Apollo Client to efficiently manage data retrieval and state.',
    'Collaborate with backend teams to ensure seamless integration and troubleshoot complex frontend issues.',
    'Utilize Git and GitLab for version control, collaborative development, and rigorous code reviews to maintain code quality.'
  ];

  expBullets.forEach(bullet => {
    page.drawText('•', { x: margin, y, size: 10, font: font });
    y = drawWrappedText(bullet, margin + 15, y, width - 120, 9.5, font);
  });
  y -= 10;

  // Technical Skills
  page.drawText('TECHNICAL SKILLS & AI INTERESTS', { x: margin, y, size: 12, font: boldFont });
  y -= 18;
  const skills = [
    'Frontend: React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, React Router, Tailwind CSS',
    'API & Backend: GraphQL, Apollo Client, REST APIs, Node.js, Express.js',
    'Databases: PostgreSQL, Microsoft SQL Server, SQLite, MongoDB',
    'AI & LLM Development (Learning & Exploring): LLM fundamentals, AI API integration, Prompt Engineering',
    'Agentic AI Concepts: AI agents, tool calling, multi-step task automation workflows',
    'AI-Assisted Development: Vibe Coding, AI coding assistants, code generation workflows',
    'Tools & DevOps: Git, GitLab, VS Code, Postman, npm, Vite'
  ];
  skills.forEach(skill => {
    page.drawText('• ' + skill, { x: margin, y, size: 9.5, font: font });
    y -= 14;
  });
  y -= 10;

  // Projects
  page.drawText('PROJECTS', { x: margin, y, size: 12, font: boldFont });
  y -= 18;
  page.drawText('Nebula Identity Access Project (Enterprise)', { x: margin, y, size: 10, font: boldFont });
  y -= 14;
  y = drawWrappedText('Developed core frontend features for an enterprise-grade identity access management system using React.js and TypeScript. Implemented secure auth workflows and managed global state with Apollo Client and GraphQL.', margin + 10, y, width - 110, 9.5, font);

  y -= 5;
  page.drawText('Smart Farming System (IoT / ML)', { x: margin, y, size: 10, font: boldFont });
  y -= 14;
  y = drawWrappedText('Designed an IoT-based system to monitor soil metrics and automate irrigation processes using sensors and machine learning components.', margin + 10, y, width - 110, 9.5, font);
  y -= 10;

  // Education
  page.drawText('EDUCATION & CERTIFICATIONS', { x: margin, y, size: 12, font: boldFont });
  y -= 18;
  page.drawText('Bachelor of Technology in Electronics and Communication Engineering — Tirumala Engineering College (2019 – 2025)', { x: margin, y, size: 9.5, font: font });
  y -= 14;
  page.drawText('Certifications: Full Stack Web Development, Node.js & Advanced React, Python & Database Certification', { x: margin, y, size: 9.5, font: font });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('C:/tmp/portfolio-neon/public/Praveen_Resume.pdf', pdfBytes);
  console.log('Updated resume PDF created successfully at C:/tmp/portfolio-neon/public/Praveen_Resume.pdf');
}

createResume().catch(console.error);