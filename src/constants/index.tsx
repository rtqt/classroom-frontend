import { mockSubjects } from './mock-data';

export const DEPARTMENTS = Array.from(
    new Set(mockSubjects.map((s) => s.department))
).sort();

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}));
