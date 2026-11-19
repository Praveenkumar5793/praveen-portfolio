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
  y -= 25;
  page.drawText('+91 6303300931 | kalvapraveen62@gmail.com | LinkedIn | GitHub', { x: margin, y, size: 10, font: font });
  y -= 30;

  // Professional Summary
  page.drawText('PROFESSIONAL SUMMARY', { x: margin, y, size: 12, font: boldFont });
  y -= 18;
  const summaryText = 'Software Engineer specializing in robust Frontend Development with React.js and TypeScript, currently bridging into AI Application Engineering. Experienced in developing scalable, modular components and integrating GraphQL APIs. Leveraging AI-Assisted Development & Vibe Coding: using AI coding assistants, structured prompts, and iterative AI-guided workflows to accelerate prototyping, debug issues, and build intelligent applications.';

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
  page.drawText('TECHNICAL SKILLS & AI FOCUS', { x: margin, y, size: 12, font: boldFont });
  y -= 18;
  const skills = [
    'Frontend: React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, React Router, Tailwind CSS',
    'API & Backend: GraphQL, Apollo Client, REST APIs, Node.js, Express.js',
    'AI Application Engineering (Learning): LLM Fundamentals, AI API Integration, Prompt Engineering, Agentic AI',
    'AI-Assisted Development & Vibe Coding: AI Coding Assistants (Cursor, Claude Code), Iterative AI Workflows',
    'Tools & DevOps: Git, GitLab, VS Code, Postman, npm, Vite, MongoDB, SQL Server'
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
  y = drawWrappedText('Developed core frontend features for an enterprise-grade identity access management system using React.js and TypeScript. Managed global state and secure auth workflows with Apollo Client and GraphQL.', margin + 10, y, width - 110, 9.5, font);

  y -= 5;
  page.drawText('AI-Assisted Portfolio (Vibe Coding)', { x: margin, y, size: 10, font: boldFont });
  y -= 14;
  y = drawWrappedText('A professional portfolio built using AI-assisted development workflows, leveraging structured prompts and iterative AI-guided prototyping to accelerate feature delivery.', margin + 10, y, width - 110, 9.5, font);
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