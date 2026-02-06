import type { CourseCategory } from '../backend';

export function mapCourseCategory(category: string): CourseCategory | null {
  if (!category) return null;

  switch (category.toLowerCase()) {
    case 'basic':
      return { __kind__: 'certificate', certificate: null };
    case 'programming':
      return { __kind__: 'undergraduate', undergraduate: null };
    case 'design':
      return { __kind__: 'diploma', diploma: null };
    case 'other':
      return { __kind__: 'other', other: 'General Enquiry' };
    default:
      return null;
  }
}
