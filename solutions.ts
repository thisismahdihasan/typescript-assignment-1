const multiplyValue = (value: number, multiplier = 2): number => {
  return value * multiplier;
};

type processInputType = string | number | boolean;
const processInput = (value: processInputType): string | number => {
  if (typeof value === 'string') {
    return value.trim().toLowerCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return value ? 'Active' : 'Inactive';
  }
};

const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
};

const concatenateArrays = <T>(...values: T[][]): T[] => {
  return values.flat();
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  return courses.filter((course) => course.isPublished && course.students >= minStudents);
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        return resolve('Access Granted');
      }, 1000);
    } else {
      reject(new Error('Access Denied: Must be 18 or older'));
    }
  });
};
