export type User = {
  id: number;
  name: string;
  prefix: string;
  title: string;
  lastName: string;
  imageUrl: string;
};

export type FullUser = {
  id: number;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  jobDescriptor: string;
  jobArea: string;
  jobType: string;
  email: string;
  ip: string;
  imageUrl: string;
  company: {
    name: string;
    suffix: string;
  };
  address: {
    zipCode: string;
    city: string;
    streetAddress: string;
    country: string;
    state: string;
  };
};
