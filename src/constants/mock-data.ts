import {BaseRecord} from '@refinedev/core';

export interface Subject extends BaseRecord {
    id: string;
    code: string;
    name: string;
    department: string;
    university: string;
    description: string;
}

export const mockSubjects: Subject[] = [
    // ── Massachusetts Institute of Technology ──────────────────────────────
    {
        id: '1',
        code: 'MIT-CS101',
        name: 'Introduction to Computer Science',
        department: 'Electrical Engineering & Computer Science',
        university: 'Massachusetts Institute of Technology',
        description: 'Foundational course covering algorithms, data structures, and programming paradigms using Python. Emphasises computational thinking and problem solving.',
    },
    {
        id: '2',
        code: 'MIT-MATH201',
        name: 'Linear Algebra',
        department: 'Mathematics',
        university: 'Massachusetts Institute of Technology',
        description: 'In-depth study of vector spaces, linear transformations, eigenvalues, and matrix decompositions, with applications in engineering and data science.',
    },
    {
        id: '3',
        code: 'MIT-PHY301',
        name: 'Classical Mechanics',
        department: 'Physics',
        university: 'Massachusetts Institute of Technology',
        description: 'Rigorous treatment of Newtonian mechanics, Lagrangian and Hamiltonian formulations, and their applications to real-world physical systems.',
    },
    {
        id: '4',
        code: 'MIT-EE410',
        name: 'Circuits and Electronics',
        department: 'Electrical Engineering & Computer Science',
        university: 'Massachusetts Institute of Technology',
        description: 'Covers the analysis and design of analog and digital circuits, including amplifiers, filters, and basic semiconductor devices.',
    },
    {
        id: '5',
        code: 'MIT-AI502',
        name: 'Deep Learning',
        department: 'Electrical Engineering & Computer Science',
        university: 'Massachusetts Institute of Technology',
        description: 'Advanced study of neural network architectures including CNNs, RNNs, and Transformers, with hands-on projects using PyTorch.',
    },

    // ── Stanford University ────────────────────────────────────────────────
    {
        id: '6',
        code: 'SU-CS106B',
        name: 'Programming Abstractions',
        department: 'Computer Science',
        university: 'Stanford University',
        description: 'Explores abstraction techniques in software development: recursion, algorithmic analysis, and data structure design using C++.',
    },
    {
        id: '7',
        code: 'SU-STAT101',
        name: 'Introduction to Statistics',
        department: 'Statistics',
        university: 'Stanford University',
        description: 'Covers probability theory, statistical inference, hypothesis testing, and regression analysis with practical data-analysis exercises.',
    },
    {
        id: '8',
        code: 'SU-BIO210',
        name: 'Molecular Biology',
        department: 'Biology',
        university: 'Stanford University',
        description: 'Examines the molecular mechanisms of gene expression, DNA replication, protein synthesis, and modern biotechnology techniques.',
    },
    {
        id: '9',
        code: 'SU-MBA320',
        name: 'Entrepreneurship and Venture Capital',
        department: 'Graduate School of Business',
        university: 'Stanford University',
        description: 'An immersive look at startup formation, business model design, fundraising strategies, and the Silicon Valley venture ecosystem.',
    },
    {
        id: '10',
        code: 'SU-LAW415',
        name: 'Technology Law and Policy',
        department: 'Law School',
        university: 'Stanford University',
        description: 'Analyses legal frameworks governing intellectual property, data privacy, cybersecurity, and platform regulation in the digital age.',
    },

    // ── University of Oxford ───────────────────────────────────────────────
    {
        id: '11',
        code: 'UO-PPE101',
        name: 'Philosophy, Politics and Economics I',
        department: 'Social Sciences',
        university: 'University of Oxford',
        description: 'Interdisciplinary introduction exploring the foundations of political philosophy, microeconomic theory, and the history of ideas.',
    },
    {
        id: '12',
        code: 'UO-CHEM201',
        name: 'Organic Chemistry',
        department: 'Chemistry',
        university: 'University of Oxford',
        description: 'Systematic study of carbon compound structure, reaction mechanisms, stereochemistry, and spectroscopic identification methods.',
    },
    {
        id: '13',
        code: 'UO-HIST310',
        name: 'Medieval History of Europe',
        department: 'History',
        university: 'University of Oxford',
        description: 'Explores European society, politics, and culture from the fall of Rome to the Renaissance through primary-source analysis.',
    },
    {
        id: '14',
        code: 'UO-MATH402',
        name: 'Number Theory',
        department: 'Mathematics',
        university: 'University of Oxford',
        description: 'Advanced study of integers, prime distribution, modular arithmetic, Diophantine equations, and connections to modern cryptography.',
    },
    {
        id: '15',
        code: 'UO-MED501',
        name: 'Clinical Pharmacology',
        department: 'Medical Sciences',
        university: 'University of Oxford',
        description: 'Covers drug mechanisms, pharmacokinetics, therapeutic applications, and evidence-based prescribing principles for clinical practice.',
    },
];
