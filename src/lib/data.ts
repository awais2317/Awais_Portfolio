/**
 * Site-wide data and content configuration
 * Centralized data management for easy updates
 */

// Personal information
export const siteConfig = {
  name: "Awais Waqar",
  title: "AI Engineer | LLM Engineer | Full-Stack AI Systems Developer",
  description:
    "Building production-grade AI systems specializing in RAG pipelines, Healthcare AI automation, and Voice AI platforms.",
  url: "https://awaiswaqar.dev",
  ogImage: "/og-image.png",
  email: "awais.amw@gmail.com",
  phone: "+92 349 4318061",
  location: "Rawalpindi, Pakistan",
  links: {
    linkedin: "https://www.linkedin.com/in/awais-waqar-396504211",
    upwork:
      "https://www.upwork.com/freelancers/~010671e8415708a70c?mp_source=share",
    github: "https://github.com/awais2317",
  },
};

// Navigation links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Experience data
export const experiences = [
  {
    id: "carecloud-ai-engineer",
    title: "AI Engineer",
    company: "CareCloud",
    location: "Islamabad/Bagh, Pakistan",
    period: "Jun. 2025 – Present",
    type: "Full-time",
    description:
      "Designing and deploying production-grade LLM-powered healthcare automation systems, driving substantial improvements in revenue cycle workflows and clinical documentation efficiency.",
    highlights: [
      {
        metric: "1,000+",
        label: "Contracts Indexed",
        description: "Legal contracts searchable via RAG pipeline",
      },
      {
        metric: "15+",
        label: "Medical Specialties",
        description: "Covered by clinical documentation AI",
      },
      {
        metric: "Thousands",
        label: "Daily Transactions",
        description: "Automated claim adjudications processed",
      },
      {
        metric: "Real-time",
        label: "Voice AI",
        description: "Agentic interview platform with LiveKit",
      },
    ],
    achievements: [
      "Healthcare Claim Adjudication Automation: Designed and deployed an LLM-powered claims processing platform using Gemini AI and UHC/Availity APIs, automating end-to-end revenue cycle workflows and substantially reducing manual adjudication overhead across thousands of daily transactions",
      "Legal Contract Intelligence Platform: Built a production-grade semantic search system using GPT-4o and Qdrant, enabling legal teams to query 1,000+ contracts and retrieve precise, citation-backed answers from multi-hundred-page PDF documents",
      "Clinical Documentation & Medical Coding: Developed an enterprise AI platform that automates SOAP note generation and CPT/ICD-10 code suggestions across 15+ medical specialties, significantly reducing clinician documentation time",
      "AI Voice Recruiter Agent: Built an agentic interview platform using LiveKit for real-time voice conversations, with automated transcript scoring and structured candidate scorecard generation",
    ],
    technologies: [
      "Gemini AI",
      "GPT-4o",
      "Qdrant",
      "RAG",
      "LiveKit",
      "FastAPI",
      "Python",
      "UHC API",
      "Availity API",
      "Docker",
    ],
  },
  {
    id: "carecloud-intern",
    title: "AI Engineering Intern",
    company: "CareCloud",
    location: "Rawalpindi, Pakistan",
    period: "Mar. 2025 – Jun. 2025",
    type: "Internship",
    description:
      "Developed AI-powered language lab automation and speech recognition systems for Arabic language learning.",
    highlights: [
      {
        metric: "Whisper ASR",
        label: "Fine-tuned Models",
        description: "Arabic speech recognition capability",
      },
      {
        metric: "Full-Stack",
        label: "Python Backend",
        description: "AI-driven quiz and evaluation system",
      },
    ],
    achievements: [
      "Arabic Speech AI & Language Lab Automation: Fine-tuned Whisper ASR models for Arabic speech recognition and developed a Python backend supporting AI-driven quiz generation, automated email evaluation, and an avatar-based conversational chatbot",
    ],
    technologies: [
      "Whisper ASR",
      "Python",
      "NLP",
      "Speech Recognition",
      "FastAPI",
      "AI Chatbots",
    ],
  },
  {
    id: "upwork",
    title: "Freelance AI/Python Developer",
    company: "Upwork",
    location: "Remote",
    period: "May 2024 – Present",
    type: "Freelance",
    description:
      "AI Expert & LLM Engineer delivering enterprise-grade AI solutions, intelligent automation systems, and scalable backend architectures with 3+ years of proven expertise.",
    highlights: [
      {
        metric: "60+",
        label: "Projects Completed",
        description: "Successfully delivered client projects",
      },
      {
        metric: "94%",
        label: "Job Success Rate",
        description: "Upwork client satisfaction score",
      },
      {
        metric: "Global",
        label: "Client Base",
        description: "International clients across industries",
      },
    ],
    achievements: [
      "Completed 60+ projects with 94% job success rate, maintaining strong ratings and long-term client relationships",
      "Delivered end-to-end solutions in machine learning, process automation, and embedded systems for international clients across diverse industries",
      "Specialized in Large Language Models (LLM): ChatGPT Integration, OpenAI API, LLaMA, Mistral, Claude API implementations",
      "Built Generative AI (GenAI) solutions: AI Chatbots, AI Agents, Multi-Agent Systems, Prompt Engineering, Fine-tuning",
      "Developed RAG Systems: Retrieval-Augmented Generation with Vector Databases (Pinecone, Chroma, Weaviate), Semantic Search",
      "Created production-ready FastAPI microservices with async processing and RESTful APIs",
      "Implemented Deep Learning solutions: Computer Vision, NLP, Neural Networks using TensorFlow, PyTorch",
      "Built intelligent chatbot systems with advanced NLP and RAG-based search engines",
    ],
    technologies: [
      "Python",
      "GPT-4",
      "Claude",
      "LLaMA",
      "RAG",
      "LangChain",
      "FastAPI",
      "Django",
      "Flask",
      "Pinecone",
      "Chroma",
      "Weaviate",
      "TensorFlow",
      "PyTorch",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "C++",
      "MATLAB",
      "Java",
    ],
  },
  {
    id: "piy-intern",
    title: "Python Developer Intern",
    company: "Pixel It Yourself (PIY)",
    location: "Remote",
    period: "Jul. 2024 – Oct. 2024",
    type: "Internship",
    description:
      "Developed desktop image processing tools with real-time performance optimization using Python and OpenCV.",
    highlights: [
      {
        metric: "OpenCV",
        label: "Image Processing",
        description: "Real-time pixelation pipeline",
      },
      {
        metric: "Multi-layer",
        label: "Editing Controls",
        description: "Advanced desktop tool features",
      },
    ],
    achievements: [
      "Developed a desktop image pixelation tool in Python using OpenCV, featuring multi-layer editing controls and an optimized processing pipeline for real-time performance",
    ],
    technologies: ["Python", "OpenCV", "Image Processing", "Desktop Apps"],
  },
];

// Projects data
export const projects = [
  {
    id: "architext",
    title: "Architext",
    subtitle: "Floorplan Generator Using Linguistic Descriptions",
    description:
      "AI-powered architectural design system that transforms natural language descriptions into 3D floorplans using advanced diffusion models and graph neural networks. Features cross-attention editing for fine-grained control and interactive GUI for seamless design generation.",
    image: "/projects/architext/architext-poster.jpg",
    featured: true,
    category: "AI/ML",
    technologies: [
      "PyTorch",
      "Transformers",
      "T5",
      "DGL",
      "Graphormer",
      "Diffusion Models",
      "OpenCV",
      "Trimesh",
      "OpenAI API",
      "Graph Neural Networks",
    ],
    metrics: [
      { label: "Architecture Types", value: "15+" },
      { label: "Generation Time", value: "Seconds" },
      { label: "3D Conversion", value: "Real-time" },
    ],
    features: [
      "🤖 Natural Language Processing: Convert text descriptions into structured architectural data",
      "🎨 Diffusion-Based Generation: Advanced denoising diffusion models for high-quality floorplan generation",
      "📐 3D Conversion: Transform 2D floorplans into 3D visualizations",
      "🔄 Cross-Attention Editing: Fine-grained control over generated designs",
      "📊 Graph Neural Networks: Leverage spatial relationships in architectural layouts",
      "🖥️ Interactive GUI: User-friendly interface for design generation and editing",
    ],
    modelArchitecture: [
      "T5 Encoder: Processes natural language descriptions",
      "Graphormer: Encodes spatial relationships",
      "Denoising Diffusion: Generates high-quality layouts",
      "Cross-Attention Mechanisms: Enables precise editing and control",
    ],
    assets: {
      video: "/projects/architext/architext-demo.mp4",
      poster: "/projects/architext/architext-poster.jpg",
      report: "/projects/architext/architext-report.pdf",
    },
    caseStudy: {
      problem:
        "Architects and designers spend countless hours manually converting client requirements into floor plans. The process is time-consuming, error-prone, and requires specialized CAD skills. Traditional methods lack the flexibility to quickly iterate on designs based on natural language feedback.",
      solution:
        "Built an end-to-end AI pipeline combining T5 encoder for natural language understanding, Graphormer for spatial relationships, and denoising diffusion models for high-quality floorplan generation. The system enables real-time editing through cross-attention mechanisms and provides seamless 2D to 3D conversion, eliminating manual drafting.",
      architecture: [
        "T5 Encoder: Fine-tuned transformer model for processing natural language architectural descriptions",
        "Graphormer: Graph neural network encoding spatial relationships and room connectivity",
        "Denoising Diffusion Models: Generate high-quality 2D floorplans with architectural validity",
        "Cross-Attention Layer: Enable fine-grained editing and design control",
        "3D Rendering Engine: Real-time conversion from 2D layouts to 3D visualizations using Trimesh",
        "Interactive GUI: User-friendly interface for seamless design generation and editing",
      ],
      challenges: [
        "Handling ambiguous spatial descriptions in natural language",
        "Ensuring architectural validity and building code compliance of generated layouts",
        "Optimizing inference time for real-time generation with diffusion models",
        "Balancing creativity with practical architectural constraints",
        "Integrating multiple AI architectures (transformers, GNNs, diffusion) into cohesive pipeline",
      ],
      results: [
        "Reduced floor plan creation time from days to seconds",
        "Achieved high-quality generation using denoising diffusion models",
        "Supports 15+ different building types and architectural styles",
        "Real-time 3D visualization with interactive editing capabilities",
        "Seamless cloud integration for deployment and accessibility from any device",
      ],
    },
    links: {
      github: "https://github.com/awais2317/Architext.git",
      demo: "/projects/architext/Architext Demo.mp4",
    },
  },
  {
    id: "healthcare-automation",
    title: "AI Healthcare Automation Platform",
    subtitle: "Enterprise-Scale Claims Processing",
    description:
      "Production-grade AI platform automating healthcare claims processing with multi-provider API integrations, achieving significant cost reduction and processing efficiency.",
    image: "/projects/healthcare-automation-poster.svg",
    featured: true,
    category: "Healthcare AI",
    technologies: [
      "GPT-4o",
      "Gemini AI",
      "FastAPI",
      "Python",
      "UHC API",
      "Availity",
    ],
    metrics: [
      { label: "Claims Processed", value: "10K+/day" },
      { label: "Accuracy", value: "95%+" },
      { label: "Cost Reduction", value: "70%" },
    ],
    caseStudy: {
      problem:
        "Healthcare organizations struggle with manual claims processing, leading to high operational costs, slow turnaround times, and frequent errors in coding and documentation.",
      solution:
        "Developed a comprehensive AI automation platform that integrates with major healthcare providers (UHC, Availity) to automate claims coding, validation, and submission with built-in error handling and compliance checks.",
      architecture: [
        "Multi-LLM orchestration layer (GPT-4o + Gemini) for intelligent routing",
        "Healthcare API integration hub for UHC, Availity, and others",
        "Real-time validation engine with compliance rules",
        "Dashboard for monitoring and analytics",
      ],
      challenges: [
        "Ensuring HIPAA compliance across all data flows",
        "Handling complex multi-payor scenarios",
        "Maintaining high accuracy with diverse claim types",
        "Building robust error recovery mechanisms",
      ],
      results: [
        "Processing 10,000+ claims daily with 95%+ accuracy",
        "Reduced operational costs by 70%",
        "Eliminated 80% of manual review requirements",
        "99.9% uptime with automated failover",
      ],
    },
    links: {
      github: "#",
    },
  },
  {
    id: "rag-legal",
    title: "RAG-Based Legal Contract Intelligence",
    subtitle: "Enterprise Document Analysis",
    description:
      "Advanced RAG pipeline for legal document analysis providing citation-backed answers, risk assessment, and automated contract review capabilities.",
    image: "/projects/legal-rag-poster.svg",
    featured: true,
    category: "RAG/LLM",
    technologies: ["GPT-4o", "Qdrant", "LangChain", "Python", "FastAPI"],
    metrics: [
      { label: "Documents Indexed", value: "1000+" },
      { label: "Query Accuracy", value: "95%+" },
      { label: "Response Time", value: "<2s" },
    ],
    caseStudy: {
      problem:
        "Legal teams spend excessive time manually reviewing contracts, extracting key clauses, and assessing risks. Traditional keyword search fails to understand context and legal nuances.",
      solution:
        "Built an intelligent RAG system specifically designed for legal documents, featuring semantic chunking, citation tracking, and multi-hop reasoning for complex legal queries.",
      architecture: [
        "Custom document processing pipeline for legal documents",
        "Qdrant vector database with hybrid search capabilities",
        "GPT-4o with legal-specific prompting and citation tracking",
        "Multi-hop retrieval for complex cross-reference queries",
      ],
      challenges: [
        "Preserving legal context during document chunking",
        "Ensuring citation accuracy for compliance requirements",
        "Handling complex nested clause structures",
        "Balancing retrieval precision vs recall",
      ],
      results: [
        "Indexed 1000+ legal documents with semantic understanding",
        "Achieved 95%+ accuracy on legal Q&A benchmarks",
        "Sub-2-second response times for complex queries",
        "Full citation tracking for audit compliance",
      ],
    },
    links: {
      github: "#",
    },
  },
  {
    id: "voice-agent",
    title: "AI Conversational Voice Agent",
    subtitle: "Real-Time Voice AI Platform",
    description:
      "Production voice AI agent with RAG-powered knowledge retrieval, real-time speech processing, and natural conversation capabilities for enterprise use cases.",
    image: "/projects/voice-agent-poster.png",
    featured: true,
    category: "Voice AI",
    technologies: [
      "LiveKit",
      "FastAPI",
      "RAG",
      "Speech-to-Text",
      "Text-to-Speech",
    ],
    metrics: [
      { label: "Latency", value: "<500ms" },
      { label: "Conversation Quality", value: "4.5/5" },
      { label: "Concurrent Sessions", value: "100+" },
    ],
    caseStudy: {
      problem:
        "Traditional IVR systems frustrate users with rigid menus and limited understanding. Businesses need natural voice interfaces that can handle complex queries and provide accurate information.",
      solution:
        "Developed a conversational voice agent using LiveKit for real-time audio streaming, combined with RAG architecture for knowledge retrieval and natural language generation for human-like responses.",
      architecture: [
        "LiveKit WebRTC infrastructure for low-latency audio",
        "Real-time speech-to-text with streaming transcription",
        "RAG pipeline for contextual knowledge retrieval",
        "Neural TTS for natural-sounding responses",
      ],
      challenges: [
        "Achieving sub-500ms end-to-end latency",
        "Handling conversation context across turns",
        "Managing concurrent sessions at scale",
        "Dealing with background noise and accents",
      ],
      results: [
        "Sub-500ms response latency for natural conversations",
        "Supports 100+ concurrent voice sessions",
        "4.5/5 conversation quality rating from user testing",
        "Real-time transcript analysis for quality assurance",
      ],
    },
    links: {
      github: "#",
    },
  },
  {
    id: "brain-tumor",
    title: "Brain Tumor Detection",
    subtitle: "Medical Image Classification",
    description:
      "Deep learning system for automated brain tumor detection and classification from MRI scans, achieving clinical-grade accuracy for diagnostic support.",
    image: "/projects/brain-tumor-poster.svg",
    featured: false,
    category: "Medical AI",
    technologies: ["CNN", "TensorFlow", "Python", "Medical Imaging"],
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Tumor Types", value: "4" },
      { label: "Inference Time", value: "<1s" },
    ],
    caseStudy: {
      problem:
        "Manual MRI analysis for brain tumor detection is time-intensive and subject to human error. Early detection is critical for treatment outcomes, requiring fast and accurate diagnostic support tools.",
      solution:
        "Built a CNN-based classification system trained on medical MRI datasets, capable of detecting and classifying brain tumors into multiple categories with high accuracy.",
      architecture: [
        "Custom CNN architecture optimized for medical imaging",
        "Data augmentation pipeline for limited medical datasets",
        "Grad-CAM visualization for interpretable predictions",
        "REST API for integration with medical systems",
      ],
      challenges: [
        "Working with limited labeled medical data",
        "Ensuring model interpretability for clinical use",
        "Handling various MRI scan qualities and formats",
        "Meeting healthcare regulatory requirements",
      ],
      results: [
        "94% accuracy across 4 tumor classification types",
        "Sub-second inference for rapid screening",
        "Interpretable predictions with attention visualization",
        "Successful validation on external test datasets",
      ],
    },
    links: {
      github: "#",
    },
  },
  {
    id: "hidayah",
    title: "Hidayah – AI-Based Arabic Pronunciation Assessment System",
    subtitle: "Arabic Speech Recognition & Assessment",
    description:
      "AI-powered application designed to evaluate whether students pronounce Arabic (Qaida) words correctly. Analyzes recorded audio, compares with trained pronunciation standards, and provides instant correctness feedback.",
    image: "/projects/hidayah-poster.png",
    featured: false,
    category: "Educational AI",
    technologies: ["Arabic", "TensorFlow", "Model Optimization", "Django"],
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Dataset", value: "Custom" },
      { label: "Feedback", value: "Real-time" },
    ],
    caseStudy: {
      problem:
        "Students learning Arabic Qaida and Tajweed need consistent, accurate feedback on pronunciation. Traditional methods rely on human instructors, which limits scalability and provides inconsistent feedback.",
      solution:
        "Built an AI-powered pronunciation assessment system trained on custom Arabic audio recordings. The system analyzes student recordings in real-time and provides instant correctness feedback to support independent learning.",
      architecture: [
        "Custom audio dataset collection and annotation for Arabic phonetics",
        "TensorFlow-based speech recognition model optimized for Arabic",
        "Model optimization techniques for fast inference",
        "Django backend with audio processing pipeline",
        "Real-time feedback system with pronunciation scoring",
      ],
      challenges: [
        "Creating high-quality custom Arabic pronunciation dataset",
        "Handling diverse speaking styles and audio quality",
        "Optimizing model for real-time inference",
        "Supporting accurate feedback for Tajweed rules",
      ],
      results: [
        "94% accuracy in detecting correct vs incorrect pronunciation",
        "Real-time feedback enables independent practice",
        "Supports students in improving Tajweed and Qaida reading skills",
        "Automated, consistent feedback at scale",
      ],
    },
    links: {
      github: "#",
    },
  },
];

// Skills data organized by category
export const skills = {
  "AI & Machine Learning": {
    icon: "Brain",
    skills: [
      { name: "Large Language Models (LLMs)", level: "Expert" },
      { name: "RAG Pipelines", level: "Expert" },
      { name: "Prompt Engineering", level: "Expert" },
      { name: "Fine-tuning", level: "Advanced" },
      { name: "TensorFlow", level: "Advanced" },
      { name: "PyTorch", level: "Advanced" },
      { name: "Transformers", level: "Advanced" },
      { name: "Convolutional Neural Networks", level: "Advanced" },
      { name: "Graph Neural Networks", level: "Intermediate" },
      { name: "NLP", level: "Advanced" },
      { name: "spaCy", level: "Advanced" },
      { name: "Computer Vision", level: "Advanced" },
      { name: "OpenCV", level: "Advanced" },
      { name: "Speech Recognition", level: "Advanced" },
      { name: "Whisper ASR", level: "Advanced" },
      { name: "Model Optimization", level: "Advanced" },
      { name: "Medical Imaging", level: "Intermediate" },
    ],
  },
  Backend: {
    icon: "Server",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "FastAPI", level: "Expert" },
      { name: "Django", level: "Advanced" },
      { name: "Flask", level: "Advanced" },
      { name: "REST API Design", level: "Expert" },
      { name: "API Integration", level: "Expert" },
      { name: "Async Programming", level: "Advanced" },
      { name: "WebSockets", level: "Advanced" },
    ],
  },
  "Vector Databases": {
    icon: "Database",
    skills: [
      { name: "Qdrant", level: "Expert" },
      { name: "Pinecone", level: "Advanced" },
      { name: "FAISS", level: "Advanced" },
      { name: "Chroma", level: "Advanced" },
      { name: "Weaviate", level: "Advanced" },
    ],
  },
  Databases: {
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" },
    ],
  },
  "AI APIs & Tools": {
    icon: "Cpu",
    skills: [
      { name: "OpenAI GPT-4o", level: "Expert" },
      { name: "Google Gemini", level: "Advanced" },
      { name: "Claude", level: "Advanced" },
      { name: "LangChain", level: "Advanced" },
      { name: "LiveKit", level: "Advanced" },
      { name: "Hugging Face", level: "Intermediate" },
    ],
  },
  Frontend: {
    icon: "Monitor",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
    ],
  },
  "Deployment & DevOps": {
    icon: "Cloud",
    skills: [
      { name: "Docker", level: "Advanced" },
      { name: "Vercel", level: "Advanced" },
      { name: "Git", level: "Expert" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "AWS", level: "Intermediate" },
    ],
  },
};

// Testimonials (placeholder for future use)
export const testimonials = [
  {
    name: "Client Name",
    role: "CEO, Tech Startup",
    content:
      "Awais delivered exceptional work on our AI automation project. His expertise in RAG systems and LLMs was exactly what we needed.",
    image: "/testimonials/client1.png",
  },
];
